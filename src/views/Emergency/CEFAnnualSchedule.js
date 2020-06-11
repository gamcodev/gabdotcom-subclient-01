import React from 'react'
import { Icon } from '@blueprintjs/core'

const timeSlots = [
  {time: '8:00 AM', fund: 'Gabelli Global Small and Mid Cap Value Trust (GGZ)'},
  {time: '8:30 AM',	fund: 'Gabelli Dividend & Income Trust (GDV)'},
  {time: '8:40 AM',	fund: 'Bancroft Fund (BCV)'},
  {time: '8:50 AM',	fund: 'Ellsworth Growth & Income Fund (ECF)'},
  {time: '9:00 AM',	fund: 'Gabelli Convertible and Income Securities Fund (GCV)'},
  {time: '9:10 AM',	fund: 'Gabelli Utility Trust (GUT)'},
  {time: '9:20 AM',	fund: 'Gabelli Multimedia Trust (GGT)'},
  {time: '9:30 AM',	fund: 'Gabelli Healthcare & WellnessRx Trust (GRX)'},
  {time: '9:40 AM',	fund: 'Gabelli Equity Trust (GAB)'},
  {time: '10:00 AM', fund: 'Gabelli Global Utility & Income Trust (GLU)'},
  {time: '10:10 AM', fund: 'GAMCO Global Gold, Natural Resources & Income Trust (GGN)'},
  {time: '10:20 AM', fund: 'GAMCO Natural Resources, Gold & Income Trust (GNT)'},
  {time: '10:30 AM', fund: 'Gabelli Go Anywhere Trust (GGO)'}
]

const CEFAnnualSchedule = () => {
  return (
    <div className="events-page">
      <div className="events-header"></div>

      <div className="event-card" style={{textAlign: 'center'}}>
        <span className='event-date'>Monday, May 11th, 2020</span> <br />
        <h4 className='event-name'>Gabelli Closed End Funds' Annual Meetings</h4>

        <p className='event-desc'><i>This year’s annual meeting will be held via webcast.</i></p>
        <p className='register' id='pad12'>
        <Icon icon='arrow-right' iconSize={20} color='#005b97' style={{marginRight: '7px'}}/>Register in advance
        <a href="https://viewproxy.com/GabelliFunds/broadridgevsm/"  target="_blank" rel="noreferrer noopener" style ={{color: '#00aeef'}}> HERE</a> to participate.</p>
        <div className='schedule' id='cef-page'>
          <div id='head' className='time-slot'>Time</div>
          <div id='head' className='fund-presenting'>Fund</div>
        </div>
        {timeSlots.map(t => (
          <div className='schedule' id='cef-page'>
            <div className='time-slot'>{t.time}</div>
            <div className='fund-presenting'>{t.fund}</div>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default CEFAnnualSchedule
