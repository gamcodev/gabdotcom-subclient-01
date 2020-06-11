import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@blueprintjs/core'
import './events.css'

const EventsBanner = () => {
  return (
    <div id="events-banner">
      <NavLink to='/events'>
        <span id='events'>View Upcoming Events</span>
      <Icon icon='arrow-right' iconSize={30} color='#fff' style={{marginRight: '5px'}}/>
      <Icon icon='timeline-events' iconSize={30} color='#fff' />
      </NavLink>
    </div>
  )
}

export default EventsBanner
