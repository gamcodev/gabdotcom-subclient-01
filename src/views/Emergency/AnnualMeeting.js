import React from 'react'
import { Icon } from '@blueprintjs/core'

const AnnualMeeting = () => {
  return (
    <div id="ann-meeting-banner">
      <a href="https://gab-misc-pdfs.s3.us-east-2.amazonaws.com/Annual+Meeting+Webcast.pdf" target="_blank" rel="noreferrer noopener"><Icon icon='info-sign' iconSize={18} color='#fff' style={{marginRight: '10px'}} />GAMCO Annual Meeting Information</a>
    </div>
  )
}

export default AnnualMeeting
