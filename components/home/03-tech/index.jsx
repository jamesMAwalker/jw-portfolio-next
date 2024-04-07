import React, { Fragment } from 'react'

import { techItems } from './data'

import {
  tech,
  label,
  blurb,
  techList,
  techRow,
  category as categoryStyle,
  outline,
  secondary,
  bullet,
  buttons
} from './style.module.scss'


export const TechStack = () => {
  /*
    TODO:
    
    + Create fn to periodically animate the 3 animation library list items
    - uses setInterval
    - cycles through different animation functions based on idx
    
    + Create fn to animate list items on hover with their respective libraries
    
  */

  return (
    <section className={tech}>
      <h3 className={label}>
        TECH <br /> STACK
      </h3>
      <p className={blurb}>
        Over the past 3 years, I’ve become familiar with a lot of the awesome
        tools and technologies in use today. <wbr /> Here’s a short list of my
        favorites and most frequently used.
      </p>
      <ul className={techList}>
        {techItems.map((techItem) => {
          return (
            <li className={techRow} key={techItem.id}>
              <span className={`${categoryStyle}`}>{techItem.category}</span>
              <div className={secondary}>
                {techItem.items.map((item) => {
                  return (
                    <Fragment key={item}>
                      <span className={bullet}>•</span>
                      <span>{item}</span>
                    </Fragment>
                  )
                })}
              </div>
            </li>
          )
        })}
      </ul>
      <div className={buttons}>
        <button className='pill-btn emph'>
          <a href='https://github.com/JamesMAWalker'>GITHUB</a>
        </button>
      </div>
    </section>
  )
}
