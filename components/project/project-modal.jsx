import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import {
  modal,
  modalHeader,
  modalFooter,
  modalContent,
  projectList as projectListStyle,
  projectRow,
  projectName,
  projectNameL,
  projectNameR,
  footerSocial,
  footerLink
} from '../../styles/project/project-modal.module.scss'

export const ProjectModal = ({ projects, closeModal }) => {
  const [projectList, setprojectList] = useState([])
  useEffect(() => {
    setprojectList(projects)
  }, [projects])

  return (
    <div className={`${modal} modal-container`}>
      <nav className={modalHeader}>
        <span>
          James <br /> Walker{' '}
        </span>
        <span>
          <button className='pill-btn' onClick={closeModal}>
            View Resume{' '}
          </button>
        </span>
        <div>
          <span>
            <button
              className='pill-btn'
              onClick={closeModal}
            >{`Let's talk`}</button>
          </span>
        </div>
      </nav>
      <div className={modalContent}>
        <ul className={projectListStyle}>
          {projectList.map((prj) => {
            return (
              <Link href={`/projects/${prj.abbr}`} key={prj.abbr}>
                <a onClick={closeModal}>
                  <li className={projectRow} key={prj.abbr}>
                    <span
                      className={`${projectName} ${projectNameL}`}
                    >
                      {prj.name}&nbsp;
                      {prj.name}
                    </span>
                    {prj.abbr}
                    <span
                      className={`${projectName} ${projectNameR}`}
                    >
                      {prj.name}&nbsp;
                      {prj.name}
                    </span>
                  </li>
                </a>
              </Link>
            )
          })}
        </ul>
      </div>
      <footer className={modalFooter}>
        <div className={footerSocial}>
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
      </footer>
    </div>
  )
}
