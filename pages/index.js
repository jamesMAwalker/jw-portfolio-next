import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
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
  footerLink,
  linkout,
  progressBar,
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
  // progress bar logic
  const layoutRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const totalHeight = layoutRef.current.clientHeight
    const maxScroll = totalHeight - window.innerHeight

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY

      setScrollProgress((currentScroll / maxScroll) * 100.1)
    })
    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  return (
    <div className={layout}>
      <Head>
        <title>jmswlkr.dev</title>
        <meta
          name='description'
          content='Front-end developer portfolio site - James Walker'
        />
      </Head>
      <main className={content} ref={layoutRef}>
        <TopNav />
        <Hero />
        <ProjectList projects={projects} />
        <TechStack />
        <Writing />
        <Contact />
      </main>
      <footer className={footer}>
        <div className={social}>
          <span className={`${footerLink} pill-btn`}>
            Github
          </span>
          <span className={`${footerLink} pill-btn`}>
            Codepen
          </span>
          <span className={`${footerLink} pill-btn`}>
            LinkedIn
          </span>
          <span className={`${footerLink} pill-btn`}>
            Strava
          </span>
        </div>
        <div className={design}>
          Design adapted from{' '}
          <span className={linkout}>
            &nbsp; Isaac Fayemi
          </span>
        </div>
      </footer>
      <div
        className={progressBar}
        style={{ width: `${scrollProgress}vw` }}
      />
    </div>
  )
}
