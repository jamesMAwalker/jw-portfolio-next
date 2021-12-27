import React, { useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { v4 as uuid } from 'uuid'

import {
  label,
  projectList,
  projectRow,
  projectRowSlide,
  projectPushed,
  notPushed,
  projectName,
  projectAbbr,
  projectImg,
  small,
  large,
} from '../../styles/home/02-project-list.module.scss'

export const ProjectList = ({ projects }) => {
  
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
      })
    })
  }, [])

  return (
    <section className={`${projectList} project-list`} id="projects">
      <h3 className={label}>
        Featured <br /> Projects
      </h3>
      {projects.map((prj, idx) => {
        let translate = projectPushed

        if (idx % 2 === 0) {
          translate = notPushed
        }
        return (
          <Link
            href={`projects/${prj.abbr}`}
            key={prj.abbr}
            className={`${projectRowSlide}`}
          >
            <div
              className={`${projectRowSlide} ${translate} row__${idx}`}
            >
              {Array.from({ length: 3 }).map((segment) => (
                <div className={projectRow} key={uuid()}>
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
                  <h4 className={projectAbbr}>
                    {prj.abbr}
                  </h4>
                </div>
              ))}
            </div>
          </Link>
        )
      })}
    </section>
  )
}
