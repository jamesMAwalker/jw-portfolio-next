import React from 'react'
import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
  const res = await fetch(
    `${process.env.DATA_URL}/projects.json`
  )
  const data = await res.json()

  const projectPaths = data.map((prj) => {
    return {
      params: { id: prj.abbr },
    }
  })

  return {
    paths: projectPaths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params

  const res = await fetch(
    `${process.env.DATA_URL}/projects.json`
  )
  const data = await res.json()
  const pageData = data.filter((d) => d.abbr === id)[0]

  return {
    props: { project: pageData },
  }
}

const Project = ({ project }) => {
  const router = useRouter()

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.desc}</p>
    </div>
  )
}

export default Project
