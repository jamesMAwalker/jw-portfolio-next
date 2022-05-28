import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { v4 as uuid } from 'uuid'
import { motion } from 'framer-motion';

import { WritingCursor } from './writing-cursor'

import {
  writing,
  label,
  blurb,
  writingList,
  writingRow,
  writingTitle,
  hovered,
  active,
  inactive,
  writingImg,
  writingBtn,
  button,
  dot,
} from '../../styles/home/04-writing.module.scss'
import { CustomCursor } from './custom-cursor'
import { phases } from '../../animation/transition'
import { blurFadeIn } from '../../animation/fade'

const BASE_IMG_URL = `https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:eco/v1627636122`

const writings = [
  {
    title: (
      <>
        <span>Making the </span>
        <span>Most of 15.6"</span>
      </>
    ),
    slug: `giphy_hpbbwp`,
  },
  {
    title: (
      <>
        <span>The ESM </span>
        <span>Revolution</span>
      </>
    ),
    slug: `french-rev_peyiuz`,
  },
  {
    title: (
      <>
        <span>SVG is </span>
        <span>Everything</span>
      </>
    ),
    slug: `qZXmip97ej4JEZTWwRCyHZ-970-80_wjskwn`,
  },
  {
    title: (
      <>
        <span>Why State </span>
        <span>Machines</span>
      </>
    ),
    slug: `machine-head_yaxs00`,
  },
]

export const Writing = ({ isMobile }) => {
  const { ref: writingRef, inView: writingInView } =
    useInView()
  const [cursorVisible, setCursorVisible] = useState(false)

  // track which writing title is hovered
  const [cursorImg, setCursorImg] = useState(-1)


  return (
    <section
      className={writing}
      ref={writingRef}
      onMouseEnter={() => {
        setCursorVisible(true)
      }}
      onMouseLeave={() => {
        setCursorImg(-1)
        setCursorVisible(false)
      }}
      >
      {cursorVisible && (
        <CustomCursor
          images={writings}
          currentImage={cursorImg}
        />
      )}
      <h3 className={label}>WRITING</h3>
      <p className={blurb}>
        I like to write about my experiences as a developer
        in order to understand my own thinking a bit better,
        as well as to share with and learn from others. Here
        are a few of the things I’ve been thinking about
        lately.{' '}
      </p>
      <ul className={writingList}>
        {writings.map((wrtg, idx) => (
          <li
            className={writingRow}
            key={wrtg.slug}
            onMouseEnter={() => {
              setCursorImg(idx)
            }}
          >
            {isMobile && (
              <div className={writingImg}>
                <img
                  src={`${BASE_IMG_URL}/${wrtg.slug}`}
                  alt={wrtg.title}
                />
              </div>
            )}
            <motion.div
              className={writingTitle}
            >
              {wrtg.title}
            </motion.div>
            {isMobile && (
              <button className={`pill-btn ${writingBtn}`}>
                ...Read More
              </button>
            )}
          </li>
        ))}
      </ul>
      <div
        className={button}
        onMouseOver={() => setCursorVisible(false)}
      >
        <button className='pill-btn emph'>
          MORE ON DEV.TO
        </button>
      </div>
    </section>
  )
}
