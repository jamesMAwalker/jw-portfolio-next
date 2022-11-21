import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
  resumeLink,
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
        Developer Portfolio <br /> 2021 - 2022
      </span>
      <span className={rsme}>
        <button className='pill-btn'>
          <Link href={'/resume'} passHref>
            <a  className={resumeLink}  target='_blank' rel='noopener'>
              View Resume
            </a>
          </Link>
        </button>
      </span>
      <div className={avail}>
        <span className={availLabel}>
          Available From <br /> <b>{new Date().getMonth()}</b>
        </span>
      </div>
      <div className={contact}>
        <span className={contactBtn}>
          <button
            className='pill-btn filled'
            onClick={() => push('/#contact')}
          >{`Let's talk`}</button>
        </span>
      </div>
    </motion.div>
  )
}
