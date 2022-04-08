import React, { useEffect, useState } from 'react'

import { letter } from '../../styles/home/01-hero.module.scss'

export const HeroLetter = ({ resetting, lett, idx }) => {
  const [isBlack, setIsBlack] = useState(true)


  // Reset letters to black when user clicks reset bar
  useEffect(() => {
    if (resetting) {
      setIsBlack(true)
    }
  }, [resetting])

  const toggleColor = () => {
    setIsBlack(!isBlack)
  }

  const randomBlue = () => {
    const blues = [
      `var(--soft-blue)`,
      `var(--ocean-blue)`,
      `var(--french-blue)`,
    ]

    return blues[
      Math.floor(Math.random() * blues.length - 1)
    ]
  }

  return (
    <span
      className={letter}
      key={`${lett}-${idx}`}
      onClick={toggleColor}
      style={{
        color: isBlack ? 'var(--text-color)' : randomBlue(),
      }}
    >
      {lett}
    </span>
  )
}
