import React, { useContext, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'

import { server } from '../../config/index'
import { ProjectContext } from '../../context/project-context';

import { ProjectNav } from '../../components/project/project-nav'
import { ProjectModal } from '../../components/layout/project-modal'
import { ProjectHero } from '../../components/project/project-hero'
import { ProjectHeader } from '../../components/project/header'
import { DescriptionBlock } from '../../components/project/description-block'
import { DoubleMarquee } from '../../components/project/double-marquee'
import { nextProject } from '../../styles/project/project-components.module.scss'
import { Footer } from '../../components/layout/footer'

import {
  blurFadeIn,
  fadeSlideUpShort,
  fadeSlideUp,
} from '../../animation/fade'
import {
  phases,
  scrollPhases,
  smooth,
} from '../../animation/transition'

import {
  projectPageLayout,
  label,
  projectContent,
} from '../../styles/project/project-page.module.scss'

import {
  allProjectsBtn,
  btnInnerText,
} from '../../styles/project/project-nav.module.scss'

const Project = ({
  project: prj,
  allProjects: projects,
}) => {
  const { push, route } = useRouter()
  const { setProjectData } = useContext(ProjectContext)
  const [modalOpen, setModalOpen] = useState(false)
  const [descBlocks, setDescBlocks] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  const [buttonPushed, setButtonPushed] = useState(false)


  // set projectData in context
  useEffect(() => {
    setProjectData(projects)
  }, [])

  // set JS breakpoint
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])


  // reposition projects button at bottom of page
  useEffect(() => {
    if (isMobile) return

    if (buttonPushed) {
      gsap.to('.modal-btn', {
        top: '41vh',
      })
    } else {
      gsap.to('.modal-btn', {
        top: '88vh',
      })
    }
  }, [buttonPushed])

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
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={projectPageLayout}
        {...blurFadeIn}
        {...phases}
        key={prj.abbr}
      >
        <ProjectNav
          name={prj.abbr}
          date={prj.date}
          num={prj.number}
          toggleModal={() => setModalOpen(!modalOpen)}
          modalOpen={modalOpen}
          isMobile={isMobile}
        />
        <ProjectHero prj={prj} isMobile={isMobile} />
        <section className={projectContent}>
          <motion.h3
            className={label}
            {...fadeSlideUpShort}
            {...scrollPhases}
            transition={smooth(0.5, 0)}
          >
            <span>Development/Design</span>
            <span>Case Study</span>
          </motion.h3>
          <ProjectHeader text={prj.lead} />
          {descBlocks.map(
            ({ header, blocks, mockupUrl }, idx) => {
              const device =
                idx % 2 === 0 ? 'MBP' : 'iPhone'
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
        <motion.section
          className={nextProject}
          onClick={() => push(prj.next.path)}
          onViewportEnter={() => setButtonPushed(true)}
          onViewportLeave={() => setButtonPushed(false)}
          {...fadeSlideUpShort}
          {...scrollPhases}
          viewport={{ margin: '-8%' }}
          transition={smooth(1, 0.5)}
        >
          <DoubleMarquee
            words={[
              'Next Project',
              prj.next.name.join(' '),
            ]}
            separateLines
            pauseHover
            speed={50}
          />
        </motion.section>
        <Footer isMobile={isMobile} />
      </motion.div>
    </AnimatePresence>
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
