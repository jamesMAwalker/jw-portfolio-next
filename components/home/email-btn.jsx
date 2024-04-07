import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLongPress, useClickAway } from 'react-use'

import { blurFadeIn } from '../../animation/fade'
import { phases } from '../../animation/transition'

import {
  email,
  emailText,
  emailToolTip,
  toolTipSlider,
  off,
  lpBtn,
  lpEmail,
  lpBase,
  lpSlider,
  shift,
} from '../../styles/home/05-contact.module.scss'

function copyEmail() {
  navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
    if (result.state === 'granted' || result.state === 'prompt') {
      navigator.clipboard.writeText('me@jameswalker.dev')
    }
  })
}

export const EmailBtn = () => {
  const [sliderVisible, setSliderVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  const handleEmailClick = () => {
    copyEmail()
    setSliderVisible(false)
    setTimeout(() => {
      setSliderVisible(true)
    }, 1000)
  }

  return (
    <div className={email} onClick={handleEmailClick}>
      <div className={emailText}>me@jameswalker.dev</div>
      <div className={emailToolTip}>
        <div className={`${toolTipSlider} ${sliderVisible ? off : null}`}>
          <span>{isMobile ? 'touch' : 'click'} to copy</span>
          <span>copied!</span>
        </div>
      </div>
    </div>
  )
}

export const LPEmailBtn = () => {
  const [sliderVisible, setSliderVisible] = useState(false)
  const [shifted, setShifted] = useState(false)
  const btnRef = useRef(null)

  useClickAway(btnRef, () => setSliderVisible(false))

  const lpAction = () => {
    copyEmail()

    setShifted(true)
    setTimeout(() => {
      setSliderVisible(false)
      setShifted(false)
    }, 1000)
  }

  const lpEvent = useLongPress(lpAction, { delay: 300 })

  return (
    <div
      className={lpBtn}
      onTouchStart={() => setSliderVisible(true)}
      ref={btnRef}
    >
      <div className={lpEmail}>me@jameswalker.dev</div>
      <AnimatePresence exitBeforeEnter>
        {sliderVisible && (
          <motion.div {...blurFadeIn} {...phases} className={lpBase}>
            <div className={`${lpSlider} ${shifted ? shift : ''}`}>
              <span {...lpEvent}>touch & hold to copy</span>
              <span>copied!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
