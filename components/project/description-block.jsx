import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { IP13Mockup } from './iphone13-mockup'
import { MbpMockup } from './macbook-mockup'

import {
  blurFadeIn,
  fadeSlideRight,
  fadeSlideLeft,
  fadeSlideUpShort,
} from '../../animation/fade'
import {
  scrollPhases,
  smooth,
} from '../../animation/transition'

import {
  blockContainer,
  textElements,
  header,
  blurb as blurbStyle,
  mockup as mockupStyle,
} from '../../styles/project/description-block.module.scss'

export const DescriptionBlock = ({
  title = 'b',
  blurb = ['test', 'blurb'],
  mockup = { url: '', device: 'pixel' },
}) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  return (
    <motion.div className={blockContainer}>
      <motion.div
        className={textElements}
        key='textEl'
        {...fadeSlideUpShort}
        {...scrollPhases}
        transition={smooth(1, .5)}
        // viewport={{ margin: '-20%' }}
      >
        <h5 className={header}>{title}</h5>
        <p className={blurbStyle}>
          {blurb.map((blrb, idx) => (
            <span key={idx}>{blrb}</span>
          ))}
        </p>
      </motion.div>
      <div className={mockupStyle}>
        {mockup.device === 'MBP' ? (
          <motion.div
            className={mockupStyle}
            key='mockupMBP'
            {...fadeSlideRight}
            {...scrollPhases}
            transition={smooth(1, .5)}
          >
            <MbpMockup
              contentUrlFrag={mockup.url}
              mockupHeight={isMobile ? 90 : 60}
            />
          </motion.div>
        ) : (
          <motion.div
            className={mockupStyle}
            key='mockupIP13'
            {...fadeSlideLeft}
            {...scrollPhases}
            transition={smooth(1, .5)}
          >
            <IP13Mockup
              contentUrlFrag={mockup.url}
              mockupHeight={isMobile ? 120 : 35}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
