import React from 'react'
import Link from 'next/link'

export const ProjectList = ({ projects }) => {
  return (
    <div>
      <p>Featured Work</p>
      {projects.map((prj) => (
        <h2 key={prj.abbr}>
          <Link href={`projects/${prj.abbr}`}>{prj.name}</Link>
        </h2>
      ))}
    </div>
  )
}

