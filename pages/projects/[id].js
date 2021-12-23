import React from 'react'
import { useRouter } from 'next/router'

import { server } from '../../config/index'

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/projects.json`)
  
//   if (res.status !== 200) {
//     console.log('res from GSP in [id]: ', res);
//     throw new Error(`There was an error! Status code is ${res.status}`)
//   }

//   const data = await res.json()

//   const projectPaths = data.map((prj) => {
//     return {
//       params: { id: prj.abbr },
//     }
//   })

//   return {
//     paths: projectPaths,
//   }
// }

// export const getStaticProps = async (context) => {
//   const { id } = context.params

//   const res = await fetch(`${server}/projects.json`)

//    if (res.status !== 200) {
//      throw new Error(
//        `There was an error! Status code is ${res.status}`
//      )
//    }

//   const data = await res.json()
//   const pageData = data.filter((d) => d.abbr === id)[0]

//   return {
//     props: { project: pageData },
//   }
// }

const Project = ({ project }) => {
  return (
    <div>
      {/* <h1>{project.name}</h1>
      <p>{project.desc}</p> */}
    </div>
  )
}

export default Project
