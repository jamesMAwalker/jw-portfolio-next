import React, { useState, useEffect } from 'react'

import {
  contact,
  label,
  banners,
  bannerLine,
  lineOne,
  lineTwo,
  phrase as phraseStyle,
  blurb,
} from '../../styles/home/05-contact.module.scss'
import { DoubleMarquee } from '../project/double-marquee'
import { EmailBtn } from './email-btn'

export const Contact = () => {
  // TODO - Fix email actions in mobile version.

  return (
    <section className={contact} id='contact'>
      <h3 className={label}>Contact</h3>
      <a href='mailto:me@jmswlkr.dev' className={banners}>
        <DoubleMarquee
          words={['Get in Touch', '- Say Hello']}
        />
      </a>
      <p className={blurb}>
        <span>Currently available</span> for project work,
        but also seeking fulltime employment. <br /> Either way,
        let’s have a conversation.
      </p>
      <EmailBtn />
    </section>
  )
}
