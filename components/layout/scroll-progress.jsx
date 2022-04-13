import React, { useEffect, useState } from 'react'

import { progressBar } from '../../styles/layout/layout.module.scss'

export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [realHeight, setRealHeight] = useState(0)
  
  useEffect(() => {
    setTimeout(() => {
      setRealHeight(window.document.body.offsetHeight)
    }, 500)
  })

  // scroll progress functionality
  useEffect(() => {

    // * only set scrollProgress on desktop
    if (window.innerWidth <= 1024) return

    const maxScroll = realHeight - window.innerHeight

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY

      setScrollProgress((currentScroll / maxScroll) * 100)
    })
    return () => {
      window.removeEventListener('scroll', () => {
        setScrollProgress(0)
      })
    }
  }, [realHeight])

  return (
    <div
      className={progressBar}
      style={{ width: `${scrollProgress}vw` }}
    />
  )
}
  