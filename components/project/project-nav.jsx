import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { gsap } from 'gsap'

import {
  projectNav,
  name as nameStyle,
  date as dateStyle,
  back,
  backBtn,
  projectsBtn,
  closeText,
  openText
} from '../../styles/project/project-nav.module.scss'



export const ProjectNav = ({ name, date, num, toggleModal, modalOpen }) => {
  const { push } = useRouter()

  // Change btn text with modal toggle
  useEffect(() => {
    if (modalOpen) {
      gsap.to('.btn-inner', {
        transform: 'translate(-50%, 3%)',
        ease: 'power2.inOut'
      })
    } else {
      gsap.to('.btn-inner', {
         transform: 'translate(-50%, -46%)',
         ease: 'power2.inOut',
       })
    }
  }, [modalOpen])
  

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
      <button
        className={`${projectsBtn} pill-btn`}
        onClick={toggleModal}
      >
        {/* <span>
          {modalOpen ? `↘` : `↖`}{' '}
          {modalOpen ? 'Close' : 'All Projects'}
        </span> */}
        <div className='btn-inner'>
          <span className={closeText}>↘ Close</span>
          <span className={openText}>↖ All Projects</span>
        </div>
      </button>
    </div>
  )
}
