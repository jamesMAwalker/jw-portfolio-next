import React from 'react'

import { projectBlurbHeader, headerText, visitBtn } from '../../styles/project/project-header.module.scss'


export const ProjectHeader = ({ text }) => {
  return (
    <div className={projectBlurbHeader}>
      <h2 className={headerText}>
        {text.map((ld, idx) => {
          return <span key={idx}>{ld}</span>
        })}
      </h2>
      <button className={`pill-btn ${visitBtn}`}>
        Visit Site ↗
      </button>
    </div>
  )
}
