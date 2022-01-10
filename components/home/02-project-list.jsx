import React, { Fragment, useEffect, useState } from 'react'

import { ProjectRow } from './project-row'
import { ProjectRowMobile } from './mbl-project-row'

import {
  label,
  projectList,
  mobileSelectShade,
} from '../../styles/home/02-project-list.module.scss'

export const ProjectList = ({ projects, isMobile }) => {
  const [selectedProject, setSelectedProject] = useState(0)

  const handleSelect = (idx) => {
    setSelectedProject(idx)
  }

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
          <Fragment key={prj.abbr}>
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
