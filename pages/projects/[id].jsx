import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useRouter } from 'next/router'
import Marquee from 'react-fast-marquee'

// Internal Imports
import { server } from '../../config/index'
import { ProjectNav } from '../../components/project/project-nav'
import { ProjectModal } from '../../components/project/project-modal'
import { ProjectHero } from '../../components/project/project-hero'
import { ProjectHeader } from '../../components/project/header'
import { DescriptionBlock } from '../../components/project/description-block'
import { DoubleMarquee } from '../../components/project/double-marquee'

// Styling
import {
  projectPageLayout,
  label,
  projectContent,
} from '../../styles/project/project-page.module.scss'
import { nextProject } from '../../styles/project/project-components.module.scss'
import { Footer } from '../../components/layout/footer'


const Project = ({
  project: prj,
  allProjects: projects,
}) => {
  const { push } = useRouter()
  const layoutRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [descBlocks, setDescBlocks] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  // set JS breakpoint
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  // modal animations
  const handleModalToggle = () => {
    if (modalOpen) {
      gsap.to('.modal-container', {
        y: '105vh',
        ease: 'power2.inOut',
        opacity: 0,
      })
      setTimeout(() => {
        setModalOpen(false)
      }, 300)
    } else {
      setModalOpen(true)
      setTimeout(() => {
        console.log('toggle modal open')
        gsap.to('.modal-container', {
          y: 0,
          opacity: 1,
          ease: 'power2.inOut',
        })
      }, 300)
    }
  }

  // close modal with esc key
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handleModalToggle()
      }
    }
    window.addEventListener('keydown', close)
    return () =>
      window.removeEventListener('keydown', close)
  }, [modalOpen, setModalOpen, handleModalToggle])

  // create blocks array from project data
  useEffect(() => {
    const blockNames = Object.keys(prj).filter((key) =>
      key.includes('block')
    )
    const blocksToSet = blockNames.map((name) => {
      return prj[name]
    })
    setDescBlocks(blocksToSet)
  }, [prj])
  

  return (
    <div className={projectPageLayout}>
      <ProjectNav
        name={prj.abbr}
        date={prj.date}
        num={prj.number}
        toggleModal={handleModalToggle}
        modalOpen={modalOpen}
        isMobile={isMobile}
      />
      <ProjectHero prj={prj} isMobile={isMobile} />
      <section className={projectContent}>
        <h3 className={label}>
          <span>Development/Design</span>
          <span>Case Study</span>
        </h3>
        <ProjectHeader text={prj.lead} />
        {descBlocks.map(
          ({ header, blocks, mockupUrl }, idx) => {
            const device = idx % 2 === 0 ? 'MBP' : 'iPhone'
            return (
              <DescriptionBlock
                key={header}
                title={header}
                blurb={blocks}
                mockup={{
                  url: mockupUrl,
                  device,
                }}
              />
            )
          }
        )}
      </section>
      <section
        className={nextProject}
        onClick={() => push(prj.next.path)}
      >
        <DoubleMarquee
          words={['Next Project', prj.next.name.join(' ')]}
          separateLines
          pauseHover
          speed={50}
        />
      </section>
      {modalOpen && (
        <ProjectModal
          projects={projects}
          closeModal={handleModalToggle}
        />
      )}
      <Footer isMobile={isMobile} />
    </div>
  )
}

export default Project

// API
export const getStaticPaths = async () => {
  const res = await fetch(`${server}/projects.json`)

  if (res.status !== 200) {
    console.log('res from GSPaths in [id]: ', res)
    throw new Error(
      `There was an error! Status code is ${res.status}`
    )
  }

  const data = await res.json()

  const projectPaths = data.map((prj) => {
    return {
      params: { id: prj.abbr },
    }
  })

  return {
    paths: projectPaths,
    fallback: false,
  }
}
export const getStaticProps = async (context) => {
  const { id } = context.params

  const res = await fetch(`${server}/projects.json`)

  if (res.status !== 200) {
    console.log('res from GSProps in [id]: ', res)
    throw new Error(
      `There was an error! Status code is ${res.status}`
    )
  }

  const data = await res.json()
  const pageData = data.filter((d) => d.abbr === id)[0]

  return {
    props: { project: pageData, allProjects: data },
  }
}
