import React from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { fadeSlideDown } from '../../animation/fade'
import { smooth } from '../../animation/transition'

import {
  topNav,
  name,
  label,
  rsme,
  avail,
  availLabel,
  contact,
  contactBtn,
} from '../../styles/layout/top-nav.module.scss'

export const TopNav = () => {
  const { push } = useRouter()

  return (
    <motion.div
      className={topNav}
      variants={fadeSlideDown}
      initial='hidden'
      animate='visible'
      exit='hidden'
      transition={smooth(1)}
    >
      <span className={name}>
        James <br /> Walker{' '}
      </span>
      <span className={label}>
        Developer Portfolio <br /> 2020 - 2021
      </span>
      <span className={rsme}>
        <button className='pill-btn'>View Resume </button>
      </span>
      <div className={avail}>
        <span className={availLabel}>
          Available From <br /> <b>November 2021</b>
        </span>
      </div>
      <div className={contact}>
        <span className={contactBtn}>
          <button
            className='pill-btn'
            onClick={() => push('/#contact')}
          >{`Let's talk`}</button>
        </span>
      </div>
    </motion.div>
  )
}
