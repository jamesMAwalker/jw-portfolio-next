import React from 'react'

import { Pixel, MacbookPro } from 'react-device-mockups'

import {
  blockContainer,
  textElements,
  header,
  blurb as blurbStyle,
  mockup as mockupStyle,
  mockupScreen,
} from '../../styles/project/description-block.module.scss'

import { baseGifUrl } from '../../utils/baseImgUrl'

export const DescriptionBlock = ({
  title,
  blurb,
  mockup,
}) => {
  return (
    <div className={blockContainer}>
      <div className={textElements}>
        <h5 className={header}>{title}</h5>
        <p className={blurbStyle}>
          {blurb.map((blrb, idx) => (
            <span key={idx}>{blrb}</span>
          ))}
        </p>
      </div>
      <div className={mockupStyle}>
        {mockup.device === 'MBP' ? (
          <MacbookPro width={'40vw'}>
            <img
              src={baseGifUrl(mockup.url)}
              alt={title}
            />
          </MacbookPro>
        ) : (
          <Pixel height={300}>
            <img
              src={baseGifUrl(mockup.url)}
              alt={title}
            />
          </Pixel>
        )}
      </div>
    </div>
  )
}
