import React from 'react'

import {
  writing,
  label,
  blurb,
  writingList,
  writingRow,
  cursorImg,
  cursorPointer,
  button,
} from '../../styles/home/04-writng.module.scss'

export const Writing = () => {
  return (
    <section className={writing}>
      <h3 className={label}>WRITING</h3>
      <p className={blurb}>
        I like to write about my experiences as a developer
        in order to understand my own thinking a bit better,
        as well as to share with and learn from others. Here
        are a few of the things I’ve been thinking about
        lately.{' '}
      </p>
      <ul className={writingList}>
        <li className={writingRow}>
          Making the Most of 15.6”
        </li>
        <li className={writingRow}>Why State Machines</li>
        <li className={writingRow}>The ESM Revolution</li>
        <li className={writingRow}>SVG is Everything</li>
      </ul>
      <div className={button}>
        <button className='pill-btn emph'>
          MORE ON DEV.TO
        </button>
      </div>
    </section>
  )
}
