import React from 'react'
import { v4 as uuid } from 'uuid'
import Link from 'next/link'

import {
  hero,
  letter,
  lineOne,
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

export const Hero = () => {
  return (
    <section className={hero}>
      <div className={lineOne}>
        <span>
          {' '}
          {'Front'.split('').map((lett, idx) => (
            <span className={letter} key={uuid()}>
              {lett}
            </span>
          ))}
        </span>
        <div className={separator} />
        <span>
          {'End'.split('').map((lett) => (
            <span className={letter} key={uuid()}>
              {lett}
            </span>
          ))}
        </span>
      </div>
      <div className={lineTwo}>
        {'Developer'.split('').map((lett) => (
          <span className={letter} key={uuid()}>
            {lett}
          </span>
        ))}{' '}
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
          I specialize in using React and its associated
          frameworks to create seamless experiences for the
          web. Currently developing and designing work for
          Radiance Photography in Los Angeles, CA.
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
