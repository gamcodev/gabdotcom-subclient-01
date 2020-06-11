import React from 'react'
import { Icon } from '@blueprintjs/core'

const Events = () => {
  return (
    <div className="events-page">
      <div className="events-header">Upcoming Events</div>

      <div className="event-card">
        <span className='event-date'>Friday, May 15th, 2020</span> <br />
        <h4 className='event-name'>The 35th Annual GAMCO Client Symposium</h4>
        <p className='event-desc'><i>This year’s client symposium will be held via webcast.</i></p>
        <p className='register'>Email <span style={{color: '#4d545e'}}>info@gabelli.com</span> to request registration information.</p>
      </div>
      <div className="event-card">
        <span className='event-date'>Thursday, June 4th 2020</span> <br />
        <h4 className='event-name'>G.Research* 12th Annual Entertainment & Broadcasting Virtual Conference </h4>
        <p className='event-desc'><i>G.research will host its 12th Annual Entertainment & Broadcasting Conference in June. This research meeting will feature presentations by senior management of leading broadcasting and entertainment companies, with an emphasis on industry dynamics, new technologies, and company fundamentals. Investors should contact their salesperson, or CV McGinity at cmcginity@gabelli.com, for more information or to register. Presenting companies TBA.</i></p>
      </div>
      <br />
      <p>*G.research, LLC, an institutional research and brokerage firm and Member of FINRA and SIPC, is a wholly owned subsidiary of Morgan Group Holding Co. (OTC:MGHL). Gabelli Funds, LLC is a registered investment adviser with the Securities and Exchange Commission and is a wholly owned subsidiary of GAMCO Investors, Inc. (NYSE: GBL)</p>
    </div>
  )
}

export default Events


// <div className="event-card">
//   <span className='event-date'>Monday, May 11th, 2020</span> <br />
//   <h4 className='event-name'>Gabelli Closed End Funds' Annual Meetings</h4>
//
//   <p className='event-desc'><i>This year’s annual meeting will be held via webcast.</i></p>
//   <p className='register' id='pad12'>
//   <Icon icon='arrow-right' iconSize={20} color='#005b97' style={{marginRight: '7px'}}/>Register in advance
//   <a href="https://viewproxy.com/GabelliFunds/broadridgevsm/"  target="_blank" rel="noreferrer noopener" style ={{color: '#00aeef'}}> HERE</a> to participate.</p>
//   <div className='schedule' id='event-page'>
//     <div id='head' className='time-slot'>Time</div>
//     <div id='head' className='fund-presenting'>Fund</div>
//   </div>
//   {timeSlots.map(t => (
//     <div className='schedule' id='event-page'>
//       <div className='time-slot'>{t.time}</div>
//       <div className='fund-presenting'>{t.fund}</div>
//     </div>
//     ))
//   }
// </div>

// <div className="event-card">
//   <span className='event-date'>Friday, May 15th, 2020</span> <br />
//   <h4 className='event-name'>The 35th Annual GAMCO* Client Symposium</h4>
//   <p className='event-desc'><i>This year’s client symposium will be held via webcast.</i></p>
//   <p className='register'>
//   <Icon icon='arrow-right' iconSize={20} color='#005b97' style={{marginRight: '7px'}}/>Details
//   <a href="https://gab-misc-pdfs.s3.us-east-2.amazonaws.com/Annual+Meeting+Webcast.pdf"  target="_blank" rel="noreferrer noopener"> Here</a></p>
// </div>
