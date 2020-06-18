import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@blueprintjs/core'
import '../Events/events.css'

const RoboBanner = () => {
  return (
    <div id="events-banner">
      <NavLink to='/robo'>
        <span id='events'>Go To Robo Advisor</span>
      <Icon icon='arrow-right' iconSize={30} color='#fff' style={{marginRight: '5px'}}/>
      <Icon icon='timeline-events' iconSize={30} color='#fff' />
      </NavLink>
    </div>
  )
}

export default RoboBanner
