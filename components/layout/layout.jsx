import React, {
  useContext,
  useEffect,
  useState,
} from 'react'
import { useInView } from 'react-intersection-observer'
import { AnimatePresence, motion } from 'framer-motion'
// TODO: Replace gsap animations with framer-motion keyframes
import { gsap } from 'gsap'

import { ProjectContext } from '../../context/project-context'

import { ProjectModal } from './project-modal'
import { ScrollProgressBar } from './scroll-progress'
import { ProjectsButton } from './projects-button'

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
  const {
    modalOpen,
    setModalOpen,
    buttonPushed,
    setButtonPushed,
  } = useContext(ProjectContext)
  // const [modalOpen, setModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { ref: bottomRef, inView: bottomInView } =
    useInView({
      threshold: 1,
    })

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])
  

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
  }, [modalOpen, isMobile])

  useEffect(() => {
    if (bottomInView) {
      setButtonPushed(true)
    } else {
      setButtonPushed(false)
    }
  }, [bottomInView])

  const handleToggleModal = () => {
    setModalOpen(!modalOpen)
  }

  // close modal with esc key
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handleToggleModal()
      }
    }
    window.addEventListener('keydown', close)
    return () =>
      window.removeEventListener('keydown', close)
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
        <div className='vp-marker' ref={bottomRef} />
      </motion.div>
      <ProjectModal isMobile={isMobile} />
      <AnimatePresence exitBeforeEnter>
        {['/', '/resume'].includes(route) !== true && (
          <ProjectsButton isMobile={isMobile} />
        )}
      </AnimatePresence>
      <ScrollProgressBar />
    </AnimatePresence>
  )
}
