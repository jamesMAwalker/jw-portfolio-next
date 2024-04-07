import React from 'react'
import Link from 'next/link'

import {
  footer,
  social,
  design,
  footerLink,
  linkout
} from '../../styles/layout/layout.module.scss'

export const Footer = ({ isMobile }) => {
  return (
    <footer className={footer}>
      <div className={social}>
        <button className='pill-btn'>
          <Link href='https://github.com/JamesMAWalker'>
            Github
          </Link>
        </button>
        <button className='pill-btn'>
          <Link href='https://www.linkedin.com/in/james-walker-724136216/'>
            LinkedIn
          </Link>
        </button>
        <button className='pill-btn'>
          <Link href='https://www.strava.com/athletes/379856'>
            Strava
          </Link>
        </button>
      </div>
      <div className={design}>
        <div>
          <span>Design and build | </span>
          <span className={linkout}>&nbsp; James Walker</span>
        </div>
      </div>
    </footer>
  )
}
