import React from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

import {
  blurFadeIn,
  fadeSlideDown,
} from '../../animation/fade'

import {
  projectNav,
  nameContainer,
  numberContainer,
  dateContainer,
  backContainer,
  backBtn,
} from '../../styles/project/project-nav.module.scss'

export const ProjectNav = ({
  name,
  date,
  num,
  toggleModal,
  modalOpen,
}) => {
  const { push } = useRouter()

  return (
    <motion.div className={projectNav} {...fadeSlideDown}>
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
        <AnimatePresence exitBeforeEnter>
          {!modalOpen && (
            <Link href="/">
              <motion.a className={backBtn} {...blurFadeIn}>
                <button
                  className='pill-btn'
                  onClick={toggleModal}
                >{`← Back to Home`}</button>
              </motion.a>
            </Link>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
