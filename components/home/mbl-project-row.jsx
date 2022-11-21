import React, { useEffect, useRef, memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// import {
//   projectBlock,
//   lineOne,
//   lineTwo,
//   projectAbbr,
//   projectImg,
//   selectedStyle,
// } from '../../styles/home/mbl-project-row.module.scss'
import {
  projectBlock,
  text,
  fullName,
  abbreviation,
  image,
} from '../../styles/home/mbl-project-row--alt.module.scss'

const BASE_IMG_URL = `https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:eco/v1639982324/Portfolio`

export const ProjectRowMobile = ({ prj, select, selected }) => {
  const { push } = useRouter()

  const handleSelect = (href) => {
    if (selected) {
      push(`/projects/${href}`)
    } else {
      select()
    }
  }

  return (
    <div className={projectBlock} onClick={() => handleSelect(prj.abbr)}>
      <h4 className={text}>
        <div className={fullName}>
          <span>{prj.name[0]}</span>
          <span>{prj.name[1]}</span>
        </div>
        <div className={abbreviation}>
          <span>{prj.abbr}</span>
          <Link href={`/#projects`}>
            <a>
              <button className={`pill-btn`}>Visit ↗</button>
            </a>
          </Link>
        </div>
      </h4>
      <div className={image}>
        <img
          src={`${BASE_IMG_URL}/${prj.previewImg.long}.png`}
          alt={prj.abbr}
        />
      </div>
    </div>
  )
}
// export const ProjectRowMobile = ({
//   prj,
//   select,
//   selected,
// }) => {
//   const { push } = useRouter()

//   const handleSelect = (href) => {
//     if (selected) {
//       push(`/projects/${href}`)
//     } else {
//       select()
//     }
//   }

//   return (
//     <div
//       className={projectBlock}
//       onClick={() => handleSelect(prj.abbr)}
//     >
//       <div className={lineOne}>
//         <h4>
//           <span>{prj.name[0]}</span>
//           <span>{prj.name[1]}</span>
//         </h4>
//       </div>
//       <div className={lineTwo}>
//         <h4 className={projectAbbr}>{prj.abbr}</h4>
//         <div className={projectImg}>
//           <img
//             src={`${BASE_IMG_URL}/${prj.previewImg.long}.png`}
//             alt={prj.abbr}
//           />
//         </div>
//       </div>
//       <Link href={`/#projects`}>
//         <a>
//           <button className={`pill-btn`}>Visit ↗</button>
//         </a>
//       </Link>
//     </div>
//   )
// }
