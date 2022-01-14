import React, { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { v4 as uuid } from 'uuid'

import { WritingCursor } from './writing-cursor'

import {
  writing,
  label,
  blurb,
  writingList,
  writingRow,
  writingImg,
  writingBtn,
  button,
  dot,
} from '../../styles/home/04-writing.module.scss'

const BASE_IMG_URL = `https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:eco/v1627636122`

const writings = [
  {
    title: `Making the Most of 15.6"`,
    slug: `giphy_hpbbwp`,
  },
  {
    title: `The ESM Revolution`,
    slug: `french-rev_peyiuz`,
  },
  {
    title: `SVG is Everything`,
    slug: `qZXmip97ej4JEZTWwRCyHZ-970-80_wjskwn`,
  },
  {
    title: `Why State Machines`,
    slug: `machine-head_yaxs00`,
  },
]

export const Writing = ({ isMobile }) => {
  const { ref: writingRef, inView: writingInView } =
    useInView()
  const [cursorVisible, setCursorVisible] = useState(false)

  // track which writing title is hovered
  const [cursorImg, setCursorImg] = useState(0)

  // cursorImg off logic
  const hideCursor = (wheeledClass) => {
    const showCursorElements = [
      writingList,
      writingRow,
      dot,
    ]

    if (!showCursorElements.includes(wheeledClass)) {
      setCursorVisible(false)
    }
  }

  useEffect(() => {
    if (writingInView) {
      window.addEventListener('wheel', (e) => {
        hideCursor(e.target.className)
      })
    } else {
      window.removeEventListener('wheel', (e) => {})
    }
  })

  return (
    <section
      className={writing}
      onMouseLeave={() => setCursorVisible(false)}
      onWheel={(e) => {
        hideCursor(e.target.className)
      }}
      ref={writingRef}
    >
      {!isMobile && (
        <WritingCursor
          cursorVisible={cursorVisible}
          imgList={writings}
          currImg={cursorImg}
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
            key={uuid()}
            onMouseEnter={() => {
              setCursorVisible(true)
              setCursorImg(idx)
            }}
          >
            {isMobile && (
              <div className={writingImg}>
                <img src={`${BASE_IMG_URL}/${wrtg.slug}`} alt={wrtg.title} />
              </div>
            )}
            {wrtg.title}
            {isMobile && (
              <button className={`pill-btn ${writingBtn}`}>...Read More</button>
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
