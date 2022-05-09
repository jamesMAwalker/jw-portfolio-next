import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import {
  projectBlurbHeader,
  headerText,
  visitBtn,
} from '../../styles/project/project-header.module.scss'

import { fadeSlideUpShort } from '../../animation/fade'
import {
  scrollPhases,
  smooth,
} from '../../animation/transition'

export const ProjectHeader = ({ text }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={projectBlurbHeader}
        {...fadeSlideUpShort}
        {...scrollPhases}
        transition={smooth(0.8, .5)}
      >
        <h2 className={headerText}>
          {text.map((ld, idx) => {
            return <span key={idx}>{ld}</span>
          })}
        </h2>
        <button className={`pill-btn ${visitBtn}`}>
          Visit Site ↗
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
