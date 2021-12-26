import React from 'react'

import {
  topNav,
  name,
  label,
  rsme,
  avail,
  availLabel,
  availBtn,
} from '../../styles/layout/top-nav.module.scss'

export const TopNav = () => {
  return (
    <div className={topNav}>
      <span className={name}>
        James <br /> Walker{' '}
      </span>
      <span className={label}>
        Developer Portfolio <br /> 2020 - 2021
      </span>
      <span className={rsme}>
        <button className='pill-btn'>
          View Resume{' '}
        </button>
      </span>
      <div className={avail}>
        <span className={availLabel}>
          Available From <br /> <b>November 2021</b>
        </span>
        <span className={availBtn}>
          <button className='pill-btn'>{`Let's talk`}</button>
        </span>
      </div>
    </div>
  )
}
