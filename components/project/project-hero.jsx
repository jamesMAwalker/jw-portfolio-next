import React from 'react'
import Marquee from 'react-fast-marquee'

import { basePngUrl } from '../../utils/baseImgUrl'

import {
  projectHero,
  projectBanner,
  heroTitle,
  heroLetter,
  heroImage,
  projectMarqueeContainer,
  projectSkills,
  roles,
  tech,
  mobileSubtitle,
} from '../../styles/project/project-components.module.scss'
import { DoubleMarquee } from './double-marquee'

export const ProjectHero = ({ prj, isMobile }) => {
  /*
    * Project Hero: Refactor Notes *
    
    # Streamline mobile version
    # Improve classNamess
    # Replace banner marquee animation with react-fast-marquee
    # Replace nested elements with props
  */

  return (
    <div className={`${projectHero}`}>
      <div className={`${projectBanner}`}>
        <h4 className={mobileSubtitle}>
          {prj.name.map((subt, idx) => {
            return <span key={idx}>{subt}</span>
          })}
        </h4>
        <h1 className={heroTitle}>
          {`${prj.abbr}`.split('').map((lett, idx) => (
            <span className={heroLetter} key={idx}>
              {lett}
            </span>
          ))}
        </h1>
        <div className={heroImage}>
          <img
            src={basePngUrl(prj.previewImg.long)}
            alt={prj.abbr}
          />
        </div>
      </div>
      <div className={projectMarqueeContainer}>
        <DoubleMarquee words={prj.name} />
      </div>
      <div className={`${projectSkills}`}>
        {isMobile ? (
          <Marquee gradient={false} play={isMobile && true} speed={70}>
            <div className={roles}>
              {prj.roles.map((rl) => (
                <span key={rl}>{rl}</span>
              ))}
            </div>
            <div className={tech}>
              {prj.tech.map((tch) => (
                <span key={tch}>{tch}</span>
              ))}
            </div>
          </Marquee>
        ) : (
          <>
            <div className={roles}>
              {prj.roles.map((rl) => (
                <span key={rl}>{rl}</span>
              ))}
            </div>
            <div className={tech}>
              {prj.tech.map((rl) => (
                <span key={rl}>{rl}</span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
