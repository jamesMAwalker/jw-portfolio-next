import React, { useEffect, useState } from 'react'

import { WritingCursor } from './writing-cursor'

import {
  writing,
  label,
  blurb,
  writingList,
  writingRow,
  button,
} from '../../styles/home/04-writng.module.scss'

const writings = [
  {
    title: `Making the Most of 15.6"`,
    slug: `giphy_hpbbwp`,
  },
  {
    title: `The ESM Revolution`,
    slug: `image-shootout_nx51uw`,
  },
  {
    title: `SVG is Everything`,
    slug: `qZXmip97ej4JEZTWwRCyHZ-970-80_wjskwn`,
  },
  {
    title: `Why State Machines`,
    slug: `giphy_tip2fy`,
  },
]

export const Writing = () => {
  const [cursorVisible, setCursorVisible] = useState(false)

  // track which writing title is hovered
  const [cursorImg, setCursorImg] = useState(0)

  return (
    <section
      className={writing}
      onMouseLeave={() => setCursorVisible(false)}
    >
      <WritingCursor
        cursorVisible={cursorVisible}
        imgList={writings}
        currImg={cursorImg}
      />
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
            onMouseEnter={() => {
              setCursorVisible(true)
              setCursorImg(idx)
            }}
          >
            {wrtg.title}
          </li>
        ))}
      </ul>
      <div className={button}>
        <button className='pill-btn emph'>
          MORE ON DEV.TO
        </button>
      </div>
    </section>
  )
}
