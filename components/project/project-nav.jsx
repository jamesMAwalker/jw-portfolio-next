import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { gsap } from 'gsap'
import Draggable from 'react-draggable'

import {
  projectNav,
  nameContainer,
  numberContainer,
  dateContainer,
  backContainer,
  backBtn,
  allProjectsBtn,
  btnInnerText,
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
      <div className={nameContainer}>
        <span>James</span>
        <span>Walker</span>
      </div>
      <span className={numberContainer}>
        Project <br /> <span>{num}</span>
      </span>
      <span className={dateContainer}>
        {name} <br /> <span>{date}</span>
      </span>
      <div className={backContainer}>
        <span className={backBtn}>
          <button
            className='pill-btn'
            onClick={() => push(`/`)}
          >{`← Back to Home`}</button>
        </span>
      </div>
      <Draggable>
        <button
          className={`${allProjectsBtn} pill-btn`}
          onClick={toggleModal}
        >
          <div className={`${btnInnerText} btn-inner`}>
            <span className={closeText}>↘ Close</span>
            <span className={openText}>↖ All Projects</span>
          </div>
        </button>
      </Draggable>
    </div>
  )
}
