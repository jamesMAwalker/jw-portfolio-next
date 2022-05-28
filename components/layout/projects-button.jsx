import React, { useContext, useEffect } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'

import { ProjectContext } from '../../context/project-context'

import { fadeSlideUp } from '../../animation/fade'
import { phases } from '../../animation/transition'

import {
  allProjectsBtn,
  btnInnerText,
} from '../../styles/project/project-nav.module.scss'

export const ProjectsButton = ({ isMobile }) => {
  const {
    modalOpen,
    setModalOpen,
    buttonPushed,
    setButtonPushed,
  } = useContext(ProjectContext)

  // shift btn position with pagescroll and modal
  useEffect(() => {
    if (isMobile) return

    if (buttonPushed) {
      gsap.to('.modal-btn', {
        top: '41vh',
      })
    } else {
      gsap.to('.modal-btn', {
        top: '88vh',
      })
    }
  }, [buttonPushed, isMobile])

  // Change btn text with modal toggle
  useEffect(() => {
    if (modalOpen) {
      gsap.to('.btn-inner', {
        transform: 'translate(-50%, 3%)',
        ease: 'power2.inOut',
      })
    } else {
      gsap.to('.btn-inner', {
        transform: 'translate(-50%, -46%)',
        ease: 'power2.inOut',
      })
    }
  }, [modalOpen])

  const handleToggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <motion.button
      className={`${allProjectsBtn} pill-btn modal-btn`}
      key='projects-btn'
      data-testid='projects-btn'
      onClick={handleToggleModal}
      // onClick={() => setModalOpen(!modalOpen)}
      {...fadeSlideUp}
      {...phases}
    >
      <div className={`${btnInnerText} btn-inner`}>
        <span>↘ Close</span>
        <span>↖ All Projects</span>
      </div>
    </motion.button>
  )
}
