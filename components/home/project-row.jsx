import React, { useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import {
  projectRow,
  projectRowSlide,
  notPushed, 
  projectPushed, 
  projectName,
  projectAbbr,
  projectImg,
  small,
  large,
} from '../../styles/home/project-row.module.scss'

export const ProjectRow = ({ prj, pushed, index }) => {
  
  const isPushed = pushed ? projectPushed : notPushed;

  // Row sliding animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    Array.from({ length: 4 }).forEach((row, idx) => {
      let direction = '-120vw'
      if (idx % 2 === 0) {
        direction = '120vw'
      }

      gsap.to(`.row__${idx}`, {
        scrollTrigger: {
          trigger: '.project-list',
          scrub: true,
          start: 'top bottom',
        },
        x: direction,
        force3D: true,
      })
    })
  }, [])

  return (
    <Link
      href={`/projects/${prj.abbr}`}
      key={prj.abbr}
      className={`${projectRowSlide}`}
    >
      <a
        className={`${projectRowSlide} ${isPushed} row__${index}`}
      >
        {Array.from({ length: 3 }).map(() => (
          <div className={projectRow} key={prj.abbr}>
            <div className={`${projectImg} ${small}`}>
              <img
                src={`https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:good/v1639980948/Portfolio/${prj.previewImg.short}.png`}
                alt={prj.name}
              />
            </div>
            <h4 className={projectName}>
              {prj.name[0]} <br /> {prj.name[1]}
            </h4>
            <div className={`${projectImg} ${large}`}>
              <img
                src={`https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:good/v1639980948/Portfolio/${prj.previewImg.long}.png`}
                alt={prj.name}
              />
            </div>
            <h4 className={projectAbbr}>{prj.abbr}</h4>
          </div>
        ))}
      </a>
    </Link>
  )
}
