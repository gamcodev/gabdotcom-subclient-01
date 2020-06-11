import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from '@blueprintjs/core';
import { NavLink, withRouter } from 'react-router-dom';

class MenuContent extends Component {
  constructor (props){
    super(props)
    this.fundsLinks = [
      {label: 'Home', url: '/'},
      {label: 'Open Ends', url: '/funds/open_ends'},
      {label: 'Closed Ends', url: '/funds/closed_ends'},
      {label: 'UCITS (SICAV)', url: '/funds/sicavs'},
      {label: 'Money Market', url: '/funds/money_markets'},
      {label: 'Insights', url: '/funds/insights'},
      {label: 'Portfolio Managers', url: '/funds/portfolio_managers'},
      {label: 'Resources', url: '/funds/forms'}
    ]
    // this.globalLinks = [
    //   {label: 'Home', url: '/'},
    //   {label: 'Gabelli Funds', url: '/funds'},
    //   {label: 'GAMCO Asset Management', url: '/gamco'},
    //
    // ]
  }

  render(){
    const links = this.fundsLinks.map(link => {
      return (
        <NavLink  to={`${link.url}`}>
          <div key={link.url} className='nav-funds-item-responsive'>
            <div onClick={this.props.closeCallback}>
                {link.label}
                <span style={{'float': 'right'}}>
                  <Icon icon='caret-right' iconSize={10} color='#6dcff6'/>
                </span>
            </div>
          </div>
        </NavLink>
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
