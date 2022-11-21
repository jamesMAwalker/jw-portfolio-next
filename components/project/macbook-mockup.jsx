import React from 'react'

import {
  laptopMockup,
  laptopShadow,
  laptopMockupContainer,
  laptopMockupContent,
} from '../../styles/project/mockups.module.scss'

import { baseGifUrl } from '../../utils/baseImgUrl'

export const MbpMockup = ({
  contentUrlFrag,
  mockupHeight = 50,
}) => {

  const mockupSize = (height) => {
    return {
      height: `${height * .50}vw`,
      width: `${height}vw`,
    }
  }

  const contentSize = (height) => {
    return {
      height: `${height * .437}vw`,
      width: `${height * .67}vw`,
    }
  }

  return (
    <div
      className={laptopMockupContainer}
      style={mockupSize(mockupHeight)}
    >
      <img
        className={laptopMockup}
        src='/mockups/macbook-pro__no-logo.png'
        alt='iphone 13 mockup'
        style={mockupSize(mockupHeight)}
      />
      <img
        className={laptopShadow}
        src='/mockups/mbp-shadow.png'
        alt='iphone 13 mockup'
        style={mockupSize(mockupHeight)}
      />
      <div
        style={contentSize(mockupHeight)}
        className={laptopMockupContent}
      >
        <img
          style={contentSize(mockupHeight)}
          src={baseGifUrl(contentUrlFrag)}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null // prevents looping
            currentTarget.src = baseGifUrl(contentUrlFrag)
          }}
          alt='laptop mockup'
        />
      </div>
    </div>
  )
}
