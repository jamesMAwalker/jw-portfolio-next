import React from 'react'
// import { Pixel, MacbookPro } from 'react-device-mockups'

import { IPhone13Blue } from './iphone13-mockup'

import {
  blockContainer,
  textElements,
  header,
  blurb as blurbStyle,
  mockup as mockupStyle,
} from '../../styles/project/description-block.module.scss'

import { MackBookPro } from './macbook-mockup'

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
          // <MacbookPro width={'40vw'}>
          //   <img src={baseGifUrl(mockup.url)} alt={title} />
          // </MacbookPro>
          <div className={mockupStyle}>
            <MackBookPro
              contentUrlFrag={mockup.url}
              mockupHeight={60}
            />
          </div>
        ) : (
          <div className={mockupStyle}>
            <IPhone13Blue
              contentUrlFrag={mockup.url}
              mockupHeight={35}
            />
          </div>
        )}
      </div>
    </div>
  )
}
