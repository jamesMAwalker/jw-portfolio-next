import React, {
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react'
import Head from 'next/head'
import { useWindowSize } from 'react-use'

import { server } from '../config/index'
import { ProjectContext } from '../context/project-context'

import { Hero } from '../components/home/01-hero'
import { ProjectList } from '../components/home/02-project-list'
import { TechStack } from '../components/home/03-tech-stack'
import { Writing } from '../components/home/04-writing'
import { Contact } from '../components/home/05-contact'
import { TopNav } from '../components/layout/top-nav'
import { content } from '../styles/layout/layout.module.scss'
import { Footer } from '../components/layout/footer'



export default function Home({ projects }) {
  
  // set project data in context API
  const { setProjectData } = useContext(ProjectContext)
  useEffect(() => {
    setProjectData(projects)
  }, [])
  

  // progress bar logic
  const layoutRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const { width } = useWindowSize()

  // check vp dimensions on resize
  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setIsMobile(true)
    }
  }, [width])

  // scrollProgress bar logic
  useEffect(() => {
    // only set scrollProgress on desktop
    if (window.innerWidth <= 1024) return

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
    <>
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
        <ProjectList
          projects={projects}
          isMobile={isMobile}
        />
        <TechStack />
        <Writing isMobile={isMobile} />
        <Contact />
      </main>
      <Footer isMobile={isMobile} />
    </>
  )
}

// get page paths
export const getStaticProps = async () => {
  const res = await fetch(`${server}/projects.json`)

  if (res.status !== 200) {
    throw new Error(
      `There was an error! Status code is ${res.status}`
    )
  }

  const data = await res.json()

  return {
    props: { projects: data, fallback: false },
  }
}
