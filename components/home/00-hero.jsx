import React, { useState } from 'react'
import Link from 'next/link'

import { HeroLetter } from './hero-letter'
import { DownArrow } from '../svg/down-arr'

import {
  heroContainer,
  title,
  front,
  end,
  developer,
  separator,
  heroPic,
  subHero,
  about,
  scrollInd,
  scrollLabel,
  scrollWindow,
  arrow,
  arrowOne,
  arrowTwo,
} from '../../styles/home/00-hero.module.scss'

export const HeroAlt = () => {
  const [letterResetActive, setLetterResetActive] = useState(false)

  // Reset letters to black when user clicks reset bar
  const resetLetterColor = () => {
    setLetterResetActive(true)
    setTimeout(() => {
      setLetterResetActive(false)
    }, 500)
  }

  const genLetters = (str) => {
    return [...str].map((l, idx) => (
      <HeroLetter key={idx} lett={l} resetting={letterResetActive} />
    ))
  }

  return (
    <div className={heroContainer}>
      <h1 className={title}>
        <div className={front}>{genLetters('Front')}</div>
        <div className={separator} onClick={resetLetterColor} />
        <div className={end}>{genLetters('End')}</div>
        <div className={developer}>{genLetters('Developer')}</div>
        <div className={heroPic}>
          <img
            src='https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:good/v1638765972/Portfolio/is-ME_3_nznliw.jpg'
            alt='james the developer'
          />
        </div>
      </h1>
      <div className={subHero}>
        <p className={about}>
          <span className='emph'>Hi! </span>I’m James. I’m a frontend developer
          based out of Santa Monica, CA.
          <br />
          <br /> I specialize in using React and its associated frameworks to
          create seamless experiences for the web. Currently developing and
          designing work for Radiance Photography in Los Angeles, CA.
        </p>
        <Link href='/#projects'>
          <a className={scrollInd}>
            <span className={scrollLabel}>scroll for more </span>
            <span className={scrollWindow}>
              <span className={`${arrowOne} ${arrow}`}>
                <DownArrow />
              </span>
              <span className={`${arrowTwo} ${arrow}`}>
                <DownArrow />
              </span>
            </span>
          </a>
        </Link>
      </div>
    </div>
  )
}
