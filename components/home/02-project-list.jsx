import React, {
  Fragment,
  useEffect,
  useState,
} from 'react'
import { v4 as uuid } from 'uuid'

import { ProjectRow } from './project-row'
import { ProjectRowMobile } from './mbl-project-row'

import {
  label,
  projectList,
  mobileSelectShade,
} from '../../styles/home/02-project-list.module.scss'

export const ProjectList = ({ projects }) => {
  const [isMobile, setisMobile] = useState(false)
  const [selectedProject, setSelectedProject] = useState(0)

  const handleSelect = (idx) => {
    setSelectedProject(idx)
  }

  useEffect(() => {
    setisMobile(window.innerWidth <= 1024)
  }, [])

  return (
    <section
      className={`${projectList} project-list`}
      id='projects'
    >
      <h3 className={label}>
        Featured <br /> Projects
      </h3>
      {isMobile && (
        <div
          className={mobileSelectShade}
          style={{
            transform: `translateY(${
              selectedProject * 40
            }vh)`,
          }}
        />
      )}
      {projects.map((prj, idx) => {
        let pushed = idx % 2 === 0

        return (
          <Fragment key={uuid()}>
            {isMobile ? (
              <ProjectRowMobile
                prj={prj}
                select={() => handleSelect(idx)}
                selected={idx === selectedProject}
              />
            ) : (
              <ProjectRow
                prj={prj}
                pushed={pushed}
                index={idx}
              />
            )}
          </Fragment>
        )
      })}
    </section>
  )
}
