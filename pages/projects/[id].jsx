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
  console.log('id from gsProps of [id]: ', id);

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
  const [scrollProgress, setScrollProgress] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)


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

  // scroll progress functionality
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
    <div className={layout} ref={layoutRef}>
      <ProjectNav
        name={prj.name[0].replace('-', '')}
        date={prj.date}
        num={prj.number}
        toggleModal={handleModalToggle}
        modalOpen={modalOpen}
      />
      <div className={projectHero}>
        {/* <div className={lineOne}>
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
        </div> */}
      </div>
      <section className={projectContent}>
        {/* <h3 className={label}>
          <span>Development/Design</span>
          <span>Case Study</span>
        </h3>
        <ProjectHeader text={prj.lead} />
        <DescriptionBlock
          title={prj.block1.header}
          blurb={prj.block1.blocks}
          mockup={{
            url: prj.block1.mockupUrl,
            device: 'MBP',
          }}
        />
        <DescriptionBlock
          title={prj.block2.header}
          blurb={prj.block2.blocks}
          mockup={{
            url: prj.block2.mockupUrl,
            device: 'pixel',
          }}
        /> */}
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
          <Link href={prj.next.path}>
            <a>
              <div className={projectImage}>
                <div className={nextArrow}>→</div>
                <img
                  src={basePngUrl(prj.next.imgUrlFrag)}
                  alt={prj.next.name}
                />
              </div>
            </a>
          </Link>
        </div>

      </div>
      <div
        className={progressBar}
        style={{ width: `${scrollProgress}vw` }}
      />
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
