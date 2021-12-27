import { server } from '../config/index'

import { Hero } from '../components/home/01-hero'
import { ProjectList } from '../components/home/02-project-list'
import { TechStack } from '../components/home/03-tech-stack'
import { Writing } from '../components/home/04-writing'
import { Contact } from '../components/home/05-contact'
import { TopNav } from '../components/layout/top-nav'

import {
  layout,
  content,
  footer,
  social,
  design,
  linkout,
} from '../styles/layout/layout.module.scss'

export const getStaticProps = async () => {
  const res = await fetch(`${server}/projects.json`)

  if (res.status !== 200) {
    throw new Error(
      `There was an error! Status code is ${res.status}`
    )
  }

  const data = await res.json()

  return {
    props: { projects: data },
  }
}

export default function Home({ projects }) {
  return (
    <div className={layout}>
      <main className={content}>
        <TopNav />
        <Hero />
        <ProjectList projects={projects} />
        <TechStack />
        <Writing />
        <Contact />
      </main>
      <footer className={footer}>
        <div className={social}>
          <span>Github</span>
          <span>Codepen</span>
          <span>LinkedIn</span>
          <span>Strava</span>
        </div>
        <div className={design}>
          Design adapted from{' '}
          <span className={linkout}>
            &nbsp; Isaac Fayemi
          </span>
        </div>
      </footer>
    </div>
  )
}
