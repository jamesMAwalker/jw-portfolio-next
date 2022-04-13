import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

import { server } from '../../config/index'

import { ProjectNav } from '../../components/project/project-nav'
import { ProjectModal } from '../../components/project/project-modal'

import { basePngUrl } from '../../utils/baseImgUrl'
import {
  layout,
  progressBar,
} from '../../styles/layout/layout.module.scss'
import {
  projectHero,
  lineOne,
  letter,
  projectImage,
  lineTwo,
  bannerLine,
  bannerOne,
  bannerTwo,
  phrase as phraseStyle,
  lineThree,
  roles,
  tech,
  projectContent,
  label,
  nextProject,
  nextArrow,
} from '../../styles/project/project-page.module.scss'
import { ProjectHeader } from '../../components/project/header'
import { DescriptionBlock } from '../../components/project/description-block'
import { ScrollProgressBar } from '../../components/layout/scroll-progress'

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

const Project = (props) => {
  const { project: prj } = props
  const { allProjects: projects } = props

  const layoutRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [descBlocks, setDescBlocks] = useState([])

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
  }, [modalOpen, setModalOpen])


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
    <div className={layout} ref={layoutRef}>
      <ProjectNav
        name={prj.name[0].replace('-', '')}
        date={prj.date}
        num={prj.number}
        toggleModal={handleModalToggle}
        modalOpen={modalOpen}
      />
      <div className={projectHero}>
        <div className={lineOne}>
          <h1>
            {' '}
            {`${prj.abbr}`.split('').map((lett, idx) => (
              <span className={letter} key={idx}>
                {lett}
              </span>
            ))}
          </h1>
          <div className={projectImage}>
            <img
              src={basePngUrl(prj.previewImg.long)}
              alt={prj.abbr}
            />
          </div>
        </div>
        <div className={lineTwo}>
          {prj.name.map((phrase, idx) => {
            const lineNum =
              idx === 0 ? bannerOne : bannerTwo

            return (
              <div
                className={`${bannerLine} ${lineNum}`}
                key={idx}
              >
                <a>
                  {Array.from({ length: 24 }).map(
                    (_, idx) => (
                      <span
                        className={phraseStyle}
                        key={idx}
                      >
                        {prj.name[0]} {prj.name[1]} -{' '}
                      </span>
                    )
                  )}{' '}
                </a>
              </div>
            )
          })}
        </div>
        <div className={lineThree}>
          <div className={roles}>
            {prj.roles.map((rl) => (
              <span key={rl}>{rl}</span>
            ))}
          </div>
          <div className={tech}>
            {prj.tech.map((rl) => (
              <span key={rl}>{rl}</span>
            ))}
          </div>
        </div>
      </div>
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
      <div className={nextProject}>
        <h3 className={label}>
          <span>Next</span>
          <span>Project</span>
        </h3>

        <div className={lineTwo}>
          {['Next Project', prj.next.name.join(' ')].map(
            (phrase, idx) => {
              const lineNum =
                idx === 0 ? bannerOne : bannerTwo

              return (
                <div
                  className={`${bannerLine} ${lineNum}`}
                  key={idx}
                >
                  <a href={prj.next.path}>
                    {Array.from({ length: 24 }).map(
                      (_, idx) => (
                        <span
                          className={phraseStyle}
                          key={idx}
                        >
                          {phrase} -&nbsp;
                        </span>
                      )
                    )}{' '}
                  </a>
                </div>
              )
            }
          )}
        </div>

        <div className={lineOne}>
          <h1>
            {' '}
            {`${prj.next.abbr}`
              .split('')
              .map((lett, idx) => (
                <span className={letter} key={idx}>
                  {lett}
                </span>
              ))}
          </h1>
          <div className={projectImage}>
            <Link href={prj.next.path}>
              <a>
                <div className={nextArrow}>→</div>
                <img
                  src={basePngUrl(prj.next.imgUrlFrag)}
                  alt={prj.next.name}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* <ScrollProgressBar layoutRef={layoutRef} /> */}
      {modalOpen && (
        <ProjectModal
          projects={projects}
          closeModal={handleModalToggle}
        />
      )}
    </div>
  )
}

export default Project
