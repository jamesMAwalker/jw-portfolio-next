import React, { Fragment } from 'react'

import {
  tech,
  label,
  blurb,
  techList,
  techRow,
  main,
  outline,
  secondary,
  bullet,
  buttons,
} from '../../styles/home/03-tech-stack.module.scss'

const techItems = [
  {
    id: 'js',
    main: `Javascript (ES6+)`,
    secondary: [`Typescript`],
  },
  {
    id: 'react',
    main: `React`,
    secondary: [`NextJS`, `Gatsby`],
  },
  {
    id: 'css',
    main: `CSS3`,
    secondary: [`SCSS`, `CSS-in-JS`, `Styled Components`],
  },
  {
    id: 'animation',
    main: `Animation`,
    secondary: [`GSAP`, `Framer Motion`, `AnimeJS`],
  },
  {
    id: 'php',
    main: `PHP`,
    secondary: [`WordPress`],
  },
]

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
        {techItems.map(tch => {
          return (
            <li className={techRow} key={tch.id}>
              <span className={`${main}`}>{tch.main}</span>
              <div className={secondary}>{tch.secondary.map((st) => {
                return (
                  <Fragment key={st}>
                    <span className={bullet}>•</span>
                    <span>{st}</span>
                  </Fragment>
                )
              })}</div>
            </li>
          )
        })}
        {/* <li className={techRow}>
          Javascript (ES6+) • Typescript
        </li>
        <li className={techRow}>React • Gatsby • NextJS</li>
        <li className={techRow}>
          SCSS • CSS-in-JS • Styled Components
        </li>
        <li className={techRow}>
          GSAP • Framer Motion • AnimeJS
        </li>
        <li className={techRow}>PHP • WordPress</li> */}
      </ul>
      <div className={buttons}>
        <button className='pill-btn emph'>GITHUB</button>
        <button className='pill-btn emph'>CODEPEN</button>
      </div>
    </section>
  )
}
