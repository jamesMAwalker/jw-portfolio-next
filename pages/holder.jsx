import React from 'react'

// import { server } from '../../config/index'

// import { ProjectNav } from '../../components/project/project-nav'

// import { basePngUrl } from '../../utils/baseImgUrl'
// import { layout } from '../../styles/layout/layout.module.scss'
// import {
//   projectHero,
//   lineOne,
//   letter,
//   projectImage,
//   lineTwo,
//   bannerLine,
//   bannerOne,
//   bannerTwo,
//   phrase as phraseStyle,
//   lineThree,
//   roles,
//   tech,
//   projectContent,
//   label,
// } from '../../styles/project/project-page.module.scss'
// import { ProjectHeader } from '../../components/project/header'
// import { DescriptionBlock } from '../../components/project/description-block'

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/projects.json`)

//   // if (res.status !== 200) {
//   //   console.log('res from GSP in [id]: ', res)
//   //   throw new Error(
//   //     `There was an error! Status code is ${res.status}`
//   //   )
//   // }

//   const data = await res.json()

//   const projectPaths = data.map((prj) => {
//     return {
//       params: { id: prj.abbr },
//     }
//   })

//   return {
//     paths: projectPaths,
//     fallback: false,
//   }
// }

// export const getStaticProps = async (context) => {
//   const { id } = context.params

//   const res = await fetch(`${server}/projects.json`)

//   // if (res.status !== 200) {
//   //   throw new Error(
//   //     `There was an error! Status code is ${res.status}`
//   //   )
//   // }

//   const data = await res.json()
//   const pageData = data.filter((d) => d.abbr === id)[0]

//   return {
//     props: { project: pageData },
//   }
// }

let project = {};

const Project = ({ project: prj }) => {
  return (
    // <div className={layout}>
    <div>
      {/* <ProjectNav
        name={prj.name[0].replace('-', '')}
        date={prj.date}
        num={prj.number}
      />
      <div className={projectHero}>
        <div className={lineOne}>
          <h1>
            {' '}
            {`${prj.abbr}`.split('').map((lett, idx) => (
              <span className={letter} key={idx}>
                {lett}
              </span>
            ))}
          </h1>
          <div className={projectImage}>
            <img
              src={basePngUrl(prj.previewImg.long)}
              alt={prj.abbr}
            />
          </div>
        </div>
        <div className={lineTwo}>
          {prj.name.map((phrase, idx) => {
            const lineNum =
              idx === 0 ? bannerOne : bannerTwo

            return (
              <div
                className={`${bannerLine} ${lineNum}`}
                key={idx}
              >
                <a href='mailto:me@jmswlkr.dev'>
                  {Array.from({ length: 24 }).map(
                    (_, idx) => (
                      <span
                        className={phraseStyle}
                        key={idx}
                      >
                        {prj.name[0]} {prj.name[1]} -{' '}
                      </span>
                    )
                  )}{' '}
                </a>
              </div>
            )
          })}
        </div>
        <div className={lineThree}>
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
        </div>
      </div>
      <section className={projectContent}>
        <h3 className={label}>
          <span>Development/Design</span>
          <span>Case Study</span>
        </h3>
        <ProjectHeader text={prj.lead} />
        <DescriptionBlock
          title={prj.block1.header}
          blurb={prj.block1.blocks}
          mockup={{
            url: prj.block1.mockupUrl,
            device: 'MBP',
          }}
        />
        <DescriptionBlock
          title={prj.block2.header}
          blurb={prj.block2.blocks}
          mockup={{
            url: prj.block2.mockupUrl,
            device: 'pixel',
          }}
        />
      </section> */}
    </div>
  )
}

export default Project
