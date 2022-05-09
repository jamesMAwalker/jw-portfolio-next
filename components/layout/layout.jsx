import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// TODO: Replace gsap animations with framer-motion keyframes
import { gsap } from 'gsap'

import { ProjectModal } from './project-modal'
import { ScrollProgressBar } from './scroll-progress'

import {
  blurFadeIn,
  fadeSlideUp,
} from '../../animation/fade'
import { phases } from '../../animation/transition'

import { layout } from '../../styles/layout/layout.module.scss'
import {
  allProjectsBtn,
  btnInnerText,
} from '../../styles/project/project-nav.module.scss'

export const Layout = ({ route, children }) => {
  useEffect(() => {}, [route])

  const [modalOpen, setModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // modal position animation
  useEffect(() => {
    if (modalOpen) {
      gsap.to('.modal-container', {
        y: 0,
      })
    } else {
      gsap.to('.modal-container', {
        y: '105vh',
      })
    }
  }, [modalOpen])

  // close modal with esc key
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setModalOpen(false)
      }
    }
    window.addEventListener('keydown', close)
    return () =>
      window.removeEventListener('keydown', close)
  }, [modalOpen])

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

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={layout}
        {...blurFadeIn}
        {...phases}
        key={route}
      >
        {children}
      </motion.div>
      <ProjectModal
        closeModal={() => setModalOpen(false)}
      />
      <AnimatePresence exitBeforeEnter>
        {route !== '/' && (
          <motion.button
            className={`${allProjectsBtn} pill-btn modal-btn`}
            key='projects-btn'
            onClick={() => setModalOpen(!modalOpen)}
            {...fadeSlideUp}
            {...phases}
          >
            <div className={`${btnInnerText} btn-inner`}>
              <span>↘ Close</span>
              <span>↖ All Projects</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
      <ScrollProgressBar />
    </AnimatePresence>
  )
}
