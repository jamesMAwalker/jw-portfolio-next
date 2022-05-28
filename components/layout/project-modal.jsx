import React, {
  useContext,
  useEffect,
  useState,
} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { ProjectContext } from '../../context/project-context'

import {
  modal,
  modalHeader,
  modalFooter,
  modalContent,
  projectList as projectListStyle,
  projectRow,
  projectDetail,
  detailItem,
  detailShade,
  projectName,
  selectedStyle,
  projectNameL,
  projectNameR,
  footerSocial,
  footerLink,
} from '../../styles/project/project-modal.module.scss'

export const ProjectModal = ({  }) => {
  const { push } = useRouter()
  const { projectData, setModalOpen } = useContext(ProjectContext)

  const [projectList, setprojectList] = useState([])
  const [selectedProject, setSelectedProject] = useState(0)

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  // mobile links require selection first
  const handleLink = (e, href, idx) => {
    const isMobile = window.innerWidth < 1024

    if (isMobile) {
      if (idx === selectedProject) {
        push(`/projects/${href}`)
      } else {
        setSelectedProject(idx)
      }
    } else {
      push(`/projects/${href}`)
      handleCloseModal()
    }
  }

  useEffect(() => {
    setprojectList(projectData)
  }, [projectData])

  const handleContactBtn = () => {
    handleCloseModal()
    push('/#contact')
  }

  return (
    <motion.div
      className={`${modal} modal-container`}
      data-testid='modal-container'
    >
      <nav className={modalHeader}>
        <span>
          James <br /> Walker{' '}
        </span>
        <span>
          <button
            className='pill-btn'
            onClick={handleCloseModal}
          >
            View <br /> Resume{' '}
          </button>
        </span>
        <div>
          <span>
            <button
              className='pill-btn'
              onClick={handleContactBtn}
            >{`Let's talk`}</button>
          </span>
        </div>
      </nav>
      <div className={modalContent}>
        <ul className={projectListStyle}>
          <div
            className={detailShade}
            style={{
              transform: `translateY(${
                selectedProject * 11.75
              }vh)`,
            }}
          />
          {projectList.map((prj, idx) => {
            const isSelectedStyle =
              idx === selectedProject ? selectedStyle : ''

            return (
              <a
                onClick={(e) =>
                  handleLink(e, prj.abbr, idx)
                }
                key={prj.abbr}
              >
                <li
                  className={`${projectRow} ${isSelectedStyle}`}
                  key={prj.abbr}
                >
                  <span
                    className={`${projectName} ${projectNameL}`}
                  >
                    {prj.name}&nbsp;
                    {prj.name}
                  </span>
                  {prj.abbr}
                  <p className={projectDetail}>
                    {prj.tech.slice(0, 2).map((tech) => {
                      return (
                        <span
                          className={detailItem}
                          key={`${tech}-${prj.abbr}`}
                        >
                          {tech}
                        </span>
                      )
                    })}
                  </p>
                  <span
                    className={`${projectName} ${projectNameR}`}
                  >
                    {prj.name}&nbsp;
                    {prj.name}
                  </span>
                </li>
              </a>
            )
          })}
        </ul>
      </div>
      <footer className={modalFooter}>
        <div className={footerSocial}>
          {[
            { display: 'Github', link: '' },
            { display: 'Codepen', link: '' },
            { display: 'LinkedIn', link: '' },
            { display: 'Strava', link: '' },
          ].map(({ display, link }) => {
            return (
              <Link href={link} key={display}>
                <a className={`${footerLink} pill-btn`}>
                  {display}
                </a>
              </Link>
            )
          })}
        </div>
      </footer>
    </motion.div>
  )
}
