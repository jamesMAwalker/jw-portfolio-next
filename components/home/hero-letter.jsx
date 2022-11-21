import React, { useEffect, useState } from 'react'

// import { letter } from '../../styles/home/01-hero.module.scss'
import { letter } from '../../styles/home/00-hero.module.scss'

export const HeroLetter = ({ resetting, lett }) => {
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
    
    let rIdx = Math.floor(Math.random() * blues.length)

    return blues[rIdx]
  }

  return (
    <span
      className={letter}
      onClick={toggleColor}
      style={{
        color: isBlack ? 'var(--text-color)' : randomBlue(),
      }}
    >
      {lett}
    </span>
  )
}
