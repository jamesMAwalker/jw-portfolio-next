import React from 'react'
import Link from 'next/link'

import {
  label,
  dividerVert,
  projectList,
  projectRow,
  projectRowSlide,
  projectPushed,
  projectName,
  projectAbbr,
  projectImg,
  small,
  large,
} from '../../styles/home/02-project-list.module.scss'

export const ProjectList = ({ projects }) => {
  return (
    <section className={projectList}>
      <h3 className={label}>
        Featured <br /> Projects
      </h3>
      {projects.map((prj, idx) => {
        let translate = projectPushed

        if (idx % 2 === 0) {
          translate = null
        }
        return (
          <>
            <Link
              href={`projects/${prj.abbr}`}
              key={prj.abbr}
              className={projectRowSlide}
            >
              <div
                className={`${projectRowSlide} ${translate}`}
              >
                <div className={projectRow}>
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
                <div className={projectRow}>
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
              </div>
            </Link>
          </>
        )
      })}
    </section>
  )
}
