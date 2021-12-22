import React from 'react'

import {
  tech,
  label,
  blurb,
  techList,
  techRow,
  buttons,
} from '../../styles/home/03-tech-stack.module.scss'

export const TechStack = () => {
  return (
    <section className={tech}>
      <h3 className={label}>
        TECH <br /> STACK
      </h3>
      <p className={blurb}>
        Over the past 3 years, I’ve become familiar with a
        lot of the awesome tools and technologies in use
        today. <wbr /> Here’s a short list of my favorites
        and most frequently used.
      </p>
      <ul className={techList}>
        <li className={techRow}>
          Javascript (ES6+) • Typescript
        </li>
        <li className={techRow}>React • Gatsby • NextJS</li>
        <li className={techRow}>
          SCSS • CSS-in-JS • Styled Components
        </li>
        <li className={techRow}>
          GSAP • Framer Motion • AnimeJS
        </li>
        <li className={techRow}>PHP • WordPress</li>
      </ul>
      <div className={buttons}>
        <button className='pill-btn emph'>GITHUB</button>
        <button className='pill-btn emph'>CODEPEN</button>
      </div>
    </section>
  )
}
