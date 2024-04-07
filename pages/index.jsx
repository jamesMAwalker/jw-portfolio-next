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

import { TopNav } from '../components/layout/top-nav'
import { Hero } from '../components/home/00-hero'
import { WorkExperience } from '../components/home/01-work'
import { ProjectList } from '../components/home/02-project-list'
import { TechStack } from '../components/home/03-tech'
import { Contact } from '../components/home/05-contact'
import { Footer } from '../components/layout/footer'

import { content } from '../styles/layout/layout.module.scss'



// export default function Home({ projects }) {
export default function Home(props) {
  console.log('props: ', props);
  
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
        <title>jameswalker.dev</title>
        <meta
          name='description'
          content='Front-end Developer Portfolio - James Walker'
        />
      </Head>
      <main className={content} ref={layoutRef}>
        <TopNav />
        <Hero />
        <WorkExperience />
        {/* <ProjectList
          projects={projects}
          isMobile={isMobile}
        /> */}
        <TechStack />
        <Contact />
      </main>
      <Footer isMobile={isMobile} />
    </>
  )
}

// get page paths
// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/projects.json`)

//   if (res.status !== 200) {
//     throw new Error(
//       `There was an error! Status code is ${res.status}`
//     )
//   }

//   const data = await res.json()

//   return {
//     props: { projects: data, fallback: false },
//   }
// }
