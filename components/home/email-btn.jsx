import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useLongPress } from '../../hooks/useLongPress'

import {
  email,
  emailText,
  emailToolTip,
  toolTipSlider,
  off,
} from '../../styles/home/05-contact.module.scss'

export const EmailBtn = () => {
  // boolean for controlling tt slider position and therefore its content
  const [sliderOff, setSliderOff] = useState(
      // true
      false
    )
  const [isMobile, setIsMobile] = useState(false)
  const { actionState, handlers  } = useLongPress({ lpAction: copyEmail })

  function copyEmail() {
    alert('copy the email ya goof');
  }


  // Breakpoint for JS
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])


  const handleEmailClick = () => {
    if (isMobile) return
    /*
      if not mobile:
      # copy email on initial click (style changes with hover in css)
      # switch text to copied simultaneously with the click.
      # if user cursor leaves the element, set the text position back to start.
    */
    copyEmail()
    setSliderOff(false)
  }


  /*
    TODO:
    # Currently, the code functions as expected in a browser simulation of a mobile device, but it's not functioning on an actual mobile device.
   
  */

  return (
    <div
      className={email}
      {...handlers}
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
          <span>
            {isMobile ? 'touch & hold' : 'click'} to copy
          </span>
          <span>copied!</span>
        </div>
      </div>
    </div>
  )
}
