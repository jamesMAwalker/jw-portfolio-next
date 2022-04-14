import React, { useEffect, useState } from 'react'
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
  title = 'title',
  blurb = ['test', 'blurb'],
  mockup = { url: '', device: 'pixel' },
}) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])
  

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
              mockupHeight={isMobile ? 90 : 60}
            />
          </div>
        ) : (
          <div className={mockupStyle}>
            <IP13Mockup
              contentUrlFrag={mockup.url}
              mockupHeight={isMobile ? 120 : 35}
            />
          </div>
        )}
      </div>
    </div>
  )
}
