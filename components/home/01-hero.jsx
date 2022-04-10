import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Link from 'next/link'

import {
  hero,
  letter,
  lineOne,
  segOne,
  segTwo,
  lineTwo,
  lineThree,
  separator,
  aboutImg,
  about,
  scrollInd,
  scrollLabel,
  scrollWindow,
  arrow,
  arrowOne,
  arrowTwo,
} from '../../styles/home/01-hero.module.scss'

import { DownArrow } from '../svg/down-arr'
import { HeroLetter } from './hero-letter'
import { Fragment } from 'react/cjs/react.production.min'

export const Hero = () => {
  const [letterResetActive, setLetterResetActive] =
    useState(false)

  // Reset letters to black when user clicks reset bar
  const resetLetterColor = () => {
    setLetterResetActive(true)
    setTimeout(() => {
      setLetterResetActive(false)
    }, 500)
  }

  return (
    <section className={hero}>
      <div className={lineOne}>
        <span className={segOne}>
          {' '}
          {'Front'.split('').map((lett, idx) => (
            <Fragment key={`${lett}-${idx}`}>
              <HeroLetter
                resetting={letterResetActive}
                lett={lett}
              />
            </Fragment>
          ))}
        </span>
        <span className={segTwo}>
          <div
            className={separator}
            onClick={resetLetterColor}
          />
          <span>
            {'End'.split('').map((lett, idx) => (
              <Fragment key={`${lett}-${idx}`}>
                <HeroLetter
                  resetting={letterResetActive}
                  lett={lett}
                />
              </Fragment>
            ))}
          </span>
        </span>
      </div>
      <div className={lineTwo}>
        <div className={segOne}>
          {'Deve'.split('').map((lett, idx) => (
            <Fragment key={`${lett}-${idx}`}>
              <HeroLetter
                resetting={letterResetActive}
                lett={lett}
              />
            </Fragment>
          ))}
        </div>
        <div className={segTwo}>
          {'loper'.split('').map((lett, idx) => (
            <Fragment key={`${lett}-${idx}`}>
              <HeroLetter
                resetting={letterResetActive}
                lett={lett}
              />
            </Fragment>
          ))}
        </div>
        <span className={aboutImg}>
          <img
            src='https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:good/v1638765972/Portfolio/is-ME_3_nznliw.jpg'
            alt='james the developer'
          />
        </span>
      </div>
      <div className={lineThree}>
        <p className={about}>
          <span className='emph'>Hi! </span>I’m James. I’m a
          frontend developer based out of Santa Monica, CA.
          <br />
          <br />I specialize in using React and its
          associated frameworks to create seamless
          experiences for the web. Currently developing and
          designing work for Radiance Photography in Los
          Angeles, CA.
        </p>
        <Link href='/#projects'>
          <a className={scrollInd}>
            <span className={scrollLabel}>
              scroll for more{' '}
            </span>
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
    </section>
  )
}
