import React from 'react'
// import { Pixel, MacbookPro } from 'react-device-mockups'

import { IP13Mockup } from './iphone13-mockup'

import {
  blockContainer,
  textElements,
  header,
  blurb as blurbStyle,
  mockup as mockupStyle,
} from '../../styles/project/description-block.module.scss'

import { MbpMockup } from './macbook-mockup'

export const DescriptionBlock = ({
  title,
  blurb,
  mockup={url: ''},
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
          <div className={mockupStyle}>
            <MbpMockup
              contentUrlFrag={mockup.url}
              mockupHeight={60}
            />
          </div>
        ) : (
          <div className={mockupStyle}>
            <IP13Mockup
              contentUrlFrag={mockup.url}
              mockupHeight={35}
            />
          </div>
        )}
      </div>
    </div>
  )
}
