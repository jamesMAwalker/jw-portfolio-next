import React, { useState, useEffect, useRef } from 'react'

import { DoubleMarquee } from '../project/double-marquee'
import { EmailBtn, LPEmailBtn } from './email-btn'

import {
  contact,
  label,
  banners,
  blurb,
} from '../../styles/home/05-contact.module.scss'

export const Contact = () => {
  // TODO - Fix email actions in mobile version.
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  return (
    <section className={contact} id='contact'>
      <h3 className={label}>Contact</h3>
      <a href='mailto:me@jameswalker.dev' className={banners}>
        <DoubleMarquee words={['Get in Touch', '- Say Hello']} />
      </a>
      <p className={blurb}>
        <span>Currently available</span> for project work, but also seeking
        fulltime employment. <br /> Either way, let’s have a conversation.
      </p>
      {isMobile ? <LPEmailBtn /> : <EmailBtn />}
    </section>
  )
}
