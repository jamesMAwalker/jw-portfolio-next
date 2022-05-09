import React from 'react'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'

import { basePngUrl } from '../../utils/baseImgUrl'
import { blurFadeIn } from '../../animation/fade'

import { DoubleMarquee } from './double-marquee'

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
import { smooth } from '../../animation/transition'

export const ProjectHero = ({ prj, isMobile }) => {
  return (
    <motion.div
      className={projectHero}
      key='heroContainer  '
      {...blurFadeIn}
      transition={smooth(1.5)}
    >
      <div className={`${projectBanner}`}>
        <h4 className={mobileSubtitle}>
          {prj.name.map((subt, idx) => {
            return <span key={idx}>{subt}</span>
          })}
        </h4>
        <h1 className={heroTitle}>
          {`${prj.abbr}`.split('').map((lett, idx) => {
            const rDelay = Math.floor(Math.random() * 1)
            return (
              <motion.span
                className={heroLetter}
                key={idx}
                {...blurFadeIn}
                transition={{ delay: idx * 0.2 }}
              >
                {lett}
              </motion.span>
            )
          })}
        </h1>
        <motion.div
          className={heroImage}
          {...blurFadeIn}
          transition={smooth(1.5)}
        >
          <img
            src={basePngUrl(prj.previewImg.long)}
            alt={prj.abbr}
          />
        </motion.div>
      </div>
      <div className={projectMarqueeContainer}>
        <DoubleMarquee words={prj.name} />
      </div>
      <div className={`${projectSkills}`}>
        {isMobile ? (
          <Marquee
            gradient={false}
            play={isMobile && true}
            speed={70}
          >
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
    </motion.div>
  )
}
