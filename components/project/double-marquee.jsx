import React from 'react'
import Marquee from 'react-fast-marquee'

import {
  projectMarquee,
  marqueeLine,
  outlineText,
  linkable,
  brightBG
} from '../../styles/project/project-components.module.scss'

export const DoubleMarquee = ({ words, speed="100", separateLines, pauseHover=false }) => {

  return (
    <section className={`${projectMarquee} ${separateLines ? brightBG : ''}`}>
      {Array.from({ length: 2 }).map((_, index) => {
        return (
          <div className={marqueeLine} key={index}>
            <Marquee
              gradient={false}
              speed={speed}
              pauseOnHover={pauseHover}
              direction={`${index === 0 ? 'right' : 'left'}`}
            >
              {Array.from({ length: 20 }).map((_, idx) => {
                return (
                  <span key={idx}>
                    {separateLines ? (
                      <>
                        {index == 0 ? (
                          <span
                            className={`${linkable} ${outlineText}`}
                          >
                            &nbsp;{words[0]} <span>→</span>&nbsp;
                            {words[0]}
                            &nbsp;<span>→</span>
                          </span>
                        ) : (
                          <span className={linkable}>
                            &nbsp;{words[1]}&nbsp;- {words[1]}
                            &nbsp;-
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        &nbsp;{words[0]}&nbsp;{words[1]}
                        &nbsp;-
                      </>
                    )}
                  </span>
                )
              })}
            </Marquee>
          </div>
        )
      })}
    </section>
  )
}
