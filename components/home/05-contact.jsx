import React from 'react'

import {
  contact,
  label,
  banners,
  line,
  lineOne,
  lineTwo,
  phrase,
  blurb,
  email,
} from '../../styles/home/05-contact.module.scss'

export const Contact = () => {
  return (
    <section className={contact}>
      <h3 className={label}>Contact</h3>
      <div className={banners}>
        <div className={`${line} ${lineOne}`}>
          <div>
            {Array.from({ length: 12 }).map((phrase) => (
              <span className={phrase}>
                Say Hello -&nbsp;
              </span>
            ))}
          </div>
          <div>
            {Array.from({ length: 12 }).map((phrase) => (
              <span className={phrase}>
                Say Hello -&nbsp;
              </span>
            ))}
          </div>
        </div>
        <div className={`${line} ${lineTwo}`}>
          <div>
            {Array.from({ length: 12 }).map((phrase) => (
              <span className={phrase}>
                Get in Touch -&nbsp;
              </span>
            ))}
          </div>
          <div>
            {Array.from({ length: 12 }).map((phrase) => (
              <span className={phrase}>
                Get in Touch -&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className={blurb}>
        <span>Currently available</span> for project work,
        but also seeking fulltime employment. Either way,
        let’s have a conversation.
      </p>
      <a href='mailto:me@jmswlkr.devg' className={email}>
        me@jmswlkr.dev
      </a>
    </section>
  )
}
