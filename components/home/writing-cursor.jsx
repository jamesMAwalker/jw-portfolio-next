import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

import {
  cursorImg,
  cursorPointer,
  cursorGif,
  text,
  dot,
  visible
} from '../../styles/home/04-writng.module.scss'

export const WritingCursor = ({ cursorVisible, imgList, currImg }) => {
  const cursorRef = useRef(null)
  const cursorTextRef = useRef(null)

  // cursor exit/enter animation
  useEffect(() => {
    const cursorTL = gsap.timeline({ ease: "Power2.inOut" })
    if (cursorVisible) {
      cursorTL
        .to('.cursorImg, .cursorPointer', {
          display: 'flex',
        })
        .to('.cursorImg, .cursorPointer', {
          opacity: 1,
        })
    } else {
      cursorTL
        .to('.cursorImg, .cursorPointer', {
          opacity: 0,
        })
        .to('.cursorImg, .cursorPointer', {
          display: 'none',
        })
    }
  }, [cursorVisible])

  // Set custom cursor location 
  useEffect(() => {
    const onMouse = (e) => {
      const { clientX, clientY } = e
      const mouseX = clientX - cursorRef.current.clientWidth
      const mouseY =
        clientY - cursorRef.current.clientHeight
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      cursorTextRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }

    document.addEventListener('mousemove', onMouse)
    return () => {
      document.removeEventListener('mousemove', onMouse)
    }
  }, [cursorRef])

  return (
    <>
      <div
        className={`${cursorImg} cursorImg`}
        ref={cursorRef}
      >
        {imgList.map((image, idx) => (
          <img
            src={`https://res.cloudinary.com/jameswalker-work/image/upload/f_auto,q_auto:eco/v1627636122/${image.slug}.gif`}
            alt='writing'
            className={`${cursorGif} ${currImg === idx ? visible : null}`}
          />
        ))}
      </div>
      <span
        className={`${cursorPointer} cursorPointer`}
        ref={cursorTextRef}
      >
        <span className={dot}></span>
        <span className={text}>Read More</span>
      </span>
    </>
  )
}
