import React from 'react'
import { withRouter } from 'react-router-dom'
import { Icon } from '@blueprintjs/core'

const CEFAnnualMeeting = () => {
  return (
    <div id="cef-meeting-banner">

      <div>
        <a href="https://gab-misc-pdfs.s3.us-east-2.amazonaws.com/2020_GDL_Annual_Meeting.pdf" target="_blank" rel="noreferrer noopener"><Icon icon='info-sign' iconSize={18} color='#4d545e' style={{marginRight: '10px'}} />GDL Annual Meeting Information</a>
      </div>
    </div>
  )
}

export default withRouter(CEFAnnualMeeting)

// <div>
//
// // <a href="https://gab-misc-pdfs.s3.us-east-2.amazonaws.com/2020_GGZ_Annual_Meeting.pdf" target="_blank" rel="noreferrer noopener"><Icon icon='info-sign' iconSize={18} color='#4d545e' style={{marginRight: '10px'}} />GGZ Annual Meeting Info</a>
// // </div>
// <div>
// <a href="https://gab-misc-pdfs.s3.us-east-2.amazonaws.com/2020_CEF_Annual_Meeting.pdf" target="_blank" rel="noreferrer noopener"><Icon icon='info-sign' iconSize={18} color='#4d545e' style={{marginRight: '10px'}} />Closed End Funds Meeting Announcement</a>
// </div>
// <div>
// <NavLink to="/funds/cef_annual_meeting"><Icon icon='timeline-events' iconSize={18} color='#4d545e' style={{marginRight: '10px'}} />Closed End Funds Meeting Agenda & Registration</NavLink>
// </div>
