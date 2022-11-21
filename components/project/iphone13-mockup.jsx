import React from 'react'

import {
  phoneMockup,
  phoneMockupContainer,
  phoneMockupContent,
} from '../../styles/project/mockups.module.scss'

import { baseGifUrl } from '../../utils/baseImgUrl'

export const IP13Mockup = ({
  contentUrlFrag,
  mockupHeight = 40,
}) => {
  const mockupSize = (height) => {
    return {
      height: `${height}vw`,
      width: `${height / 2}vw`,
    }
  }

  const contentSize = (height) => {
    return {
      borderRadius: `${height}px`,
      height: `${height}vw`,
      width: `${height / 2}vw`,
    }
  }

  return (
    <div
      className={phoneMockupContainer}
      style={mockupSize(mockupHeight)}
    >
      <img
        className={phoneMockup}
        src='/mockups/iphone13-blue.png'
        alt='iphone 13 mockup'
        style={mockupSize(mockupHeight)}
      />
      <div
        style={contentSize(mockupHeight)}
        className={phoneMockupContent}
      >
        <img
          style={contentSize(mockupHeight)}
          src={baseGifUrl(contentUrlFrag)}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null // prevents looping
            currentTarget.src = baseGifUrl(contentUrlFrag)
          }}
          alt='phone mockup'
        />
      </div>
    </div>
  )
}
