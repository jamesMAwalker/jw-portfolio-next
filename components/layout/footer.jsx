import React from 'react'

import {
  footer,
  social,
  design,
  footerLink,
  linkout,
} from '../../styles/layout/layout.module.scss'

export const Footer = ({ isMobile }) => {
  return (
    <footer className={footer}>
      <div className={social}>
        <span className={`${footerLink} pill-btn`}>
          Github
        </span>
        <span className={`${footerLink} pill-btn`}>
          Codepen
        </span>
        <span className={`${footerLink} pill-btn`}>
          LinkedIn
        </span>
        <span className={`${footerLink} pill-btn`}>
          Strava
        </span>
      </div>
      <div className={design}>
        {isMobile && (
          <div>
            <span>Built by</span>
            <span className={linkout}>
              &nbsp; James Walker
            </span>
          </div>
        )}
        <div>
          <span>Design adapted from</span>
          <span className={linkout}>
            &nbsp; Isaac Fayemi
          </span>
        </div>
      </div>
    </footer>
  )
}
