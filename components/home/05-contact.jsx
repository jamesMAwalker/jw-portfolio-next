import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import {
  contact,
  label,
  banners,
  line,
  lineOne,
  lineTwo,
  phrase as phraseStyle,
  blurb,
} from '../../styles/home/05-contact.module.scss'
import { EmailBtn } from './email-btn'

export const Contact = () => {

  return (
    <section className={contact}>
      <h3 className={label}>Contact</h3>
      <div className={banners}>
        {['Get in Touch - ', 'Say Hello - '].map(
          (phrase, idx) => {
            const lineNum = idx === 0 ? lineOne : lineTwo

            return (
              <div
                className={`${line} ${lineNum}`}
                key={uuid()}
              >
                <a href='mailto:me@jmswlkr.dev'>
                  {Array.from({ length: 24 }).map(
                    () => (
                      <span
                        className={phraseStyle}
                        key={uuid()}
                      >
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
      <EmailBtn />
    </section>
  )
}
