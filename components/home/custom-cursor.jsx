import React, { useEffect, useRef } from 'react'

import {
  cursorContainer,
  cursorImageContainer,
  cursorText
} from '../../styles/home/04-writing.module.scss'



export const CustomCursor = ({ images, currentImage }) => {
  const cursorRef = useRef(null)

  // TODO: Refactor this to have functionality site wide.

  useEffect(() => {
    const onMouse = (e) => {
      const { pageX, pageY } = e
      const mouseX =
        pageX - cursorRef?.current?.clientWidth
      const mouseY =
        pageY - cursorRef?.current?.clientHeight

        if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${mouseX}px, ${mouseY}px, 0)` || null
      }
    }

    document.addEventListener('mousemove', onMouse)
    return () => {
      document.removeEventListener('mousemove', onMouse)
    }
  }, [cursorRef])

  return (
    <div className={cursorContainer} ref={cursorRef}>
      <div className={cursorImageContainer}>
        {images.map((im, idx) => {
          return (
            <img
              src={`https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:eco/v1627636122/${im.slug}.gif`}
              alt='image indicative of title'
              style={{
                opacity: `${currentImage === idx ? 1 : 0}`,
              }}
            />
          )
        })}
      </div>
      <p className={cursorText}>● Read More →</p>
    </div>
  )
}
