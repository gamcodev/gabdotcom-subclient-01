import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from '@blueprintjs/core';
import { NavLink, withRouter } from 'react-router-dom';

class MenuContent extends Component {
  constructor (props){
    super(props)
    this.fundsLinks = [
      {label: 'Home', url: '/'},
      {label: 'Investor Relations', url: '/corporate/investor_relations'},
      {label: 'About', url: '/corporate/history_timeline'},
      {label: 'Locations', url: '/corporate/office_locations'},
      {label: 'Events', url: '/corporate/events'},
    ]
  }

  render(){
    const links = this.fundsLinks.map(link => {
      return (
        <div key={link.url} className='nav-funds-item-responsive'>
          <NavLink  to={`${link.url}`}><div onClick={this.props.closeCallback}>

              {link.label}
              <span style={{'float': 'right'}}>
                <Icon icon='caret-right' iconSize={10} color='#6dcff6'/>
              </span>

          </div></NavLink>
        </div>
      )
    })

    return(
      <div>
        {links}
      </div>
    )
  }
}

export default connect(null, null)(withRouter(MenuContent));
