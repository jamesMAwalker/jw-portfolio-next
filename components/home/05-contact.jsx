import React, { useState } from 'react'

import {
  contact,
  label,
  banners,
  line,
  lineOne,
  lineTwo,
  phrase as phraseStyle,
  blurb,
  email,
  emailText,
  emailToolTip,
  toolTipSlider,
  off
} from '../../styles/home/05-contact.module.scss'

export const Contact = () => {
  // boolean for controlling tt slider position and therefore its content
  const [sliderOff, setSliderOff] = useState(true)

  const copyEmail = () => {
    navigator.clipboard.writeText('me@jmswlkr.dev')
    setSliderOff(false)    
  }

  return (
    <section className={contact}>
      <h3 className={label}>Contact</h3>
      <div className={banners}>
        {['Get in Touch - ', 'Say Hello - '].map(
          (phrase, idx) => {
            const lineNum = idx === 0 ? lineOne : lineTwo

            return (
              <div className={`${line} ${lineNum}`}>
                <a href='mailto:me@jmswlkr.dev'>
                  {Array.from({ length: 24 }).map(
                    (phraseChunk) => (
                      <span className={phraseStyle}>
                        {phrase}
                      </span>
                    )
                  )}
                </a>
              </div>
            )
          }
        )}
      </div>
      <p className={blurb}>
        <span>Currently available</span> for project work,
        but also seeking fulltime employment. Either way,
        let’s have a conversation.
      </p>
      <div className={email} onClick={copyEmail} onMouseLeave={() => {
        setTimeout(() => {
          setSliderOff(true)
        }, 200);
      }}>
        <div className={emailText}>me@jmswlkr.dev</div>
        <div className={emailToolTip}>
          <div className={`${toolTipSlider} ${sliderOff ? off : null}`}>
            <span>click to copy</span>
            <span>copied!</span>
          </div>
        </div>
      </div>
    </section>
  )
}
