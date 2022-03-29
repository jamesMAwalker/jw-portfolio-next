import React from 'react'
import { useRouter } from 'next/router';
;


import {
  projectNav,
  name as nameStyle,
  date as dateStyle,
  back,
  backBtn,
  projectsBtn
} from '../../styles/project/project-nav.module.scss'



export const ProjectNav = ({ name, date, num }) => {
  const { push } = useRouter()

  return (
    <div className={projectNav}>
      <span className={nameStyle}>
        Project <br /> <span>{num}</span>{' '}
      </span>
      <span className={dateStyle}>
        {name} <br /> <span>{date}</span>
      </span>
      <div className={back}>
        <span className={backBtn}>
          <button
            className='pill-btn'
            onClick={() => push(`/`)}
          >{`← Back to Home`}</button>
        </span>
      </div>
      <button className={`${projectsBtn} pill-btn`}>
        <span>{true ? `↖` : `↘`} All Projects</span>
      </button>
    </div>
  )
}
