import React, { useState } from 'react'

import {
  email,
  emailText,
  emailToolTip,
  toolTipSlider,
  off,
} from '../../styles/home/05-contact.module.scss'

export const EmailBtn = () => {
  // boolean for controlling tt slider position and therefore its content
  const [sliderOff, setSliderOff] = useState(true)

  const copyEmail = () => {
    navigator.clipboard.writeText('me@jmswlkr.dev')
    setSliderOff(false)
  }

  // TODO - Adapt tooltip for mobile.

  return (
    <div
      className={email}
      onClick={copyEmail}
      onMouseLeave={() => {
        setTimeout(() => {
          setSliderOff(true)
        }, 200)
      }}
    >
      <div className={emailText}>me@jmswlkr.dev</div>
      <div className={emailToolTip}>
        <div
          className={`${toolTipSlider} ${
            sliderOff ? off : null
          }`}
        >
          <span>click to copy</span>
          <span>copied!</span>
        </div>
      </div>
    </div>
  )
}
