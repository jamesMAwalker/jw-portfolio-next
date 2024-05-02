import React from 'react'
import { useRouter } from 'next/router'

import { resumeContainer, pdfObject } from './resume.module.scss';

const Resume = () => {
  const { push } = useRouter()

  const handleBackBtn = (params) => {
    push('/')
  }

  return (
    <div className={resumeContainer}>
      <object
        className={pdfObject}
        data='/Resume_d6.pdf#view=FitV'
        role='document'
        type='application/pdf'
      />
    </div>
  )
}

export default Resume