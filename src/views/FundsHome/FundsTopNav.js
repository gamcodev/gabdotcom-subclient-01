import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import { connect } from 'react-redux';
import MenuContent from './menuContent';
// import AnnualMeeting from '../Emergency/AnnualMeeting'
// import CEFAnnualMeeting from '../Emergency/CEFAnnualMeeting'
// import CovidUpdate from '../Emergency/CovidUpdate'
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import ReactDOM from 'react-dom'
import './index.css'

class FundsTopNav extends Component {
  constructor(){
    super()
    this.state = {
      menuOpen: false,
      isIE: false,
      offset: 0
    }
    this.fundsNavRef = React.createRef()
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
    let n = ReactDOM.findDOMNode(this);
    this.setState({
      offset: n.offsetTop
    })
    this.checkIfIE()
  }


  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  checkIfIE = () => {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./)) {
      this.setState({
        isIE: true
      })
      console.log('Using Internet Explorer')
    }
    else {
      this.setState({
        isIE: false
      })
      console.log('Not using Internet Explorer')
    }
  }

  handleScroll = (e) => {
    const navbar = this.fundsNavRef.current
    const sticky = navbar.offsetTop
    if(window.pageYOffset > sticky){
      navbar.style.top = 0
      navbar.style.position = "fixed"
    } else {
      navbar.style.top = null
      navbar.style.position = "relative"
    }
  }


  checkOffset(component){
    let n = ReactDOM.findDOMNode(component);
    this.setState({
      offset: n.offsetTop
    })
  }

  openMenu(){
    this.setState({ menuOpen: true})
  }

  closeMenu(){
    this.setState({ menuOpen: false})
  }

  render(){
    return (
      <div className="nav-container" style={{ backgroundColor: 'white' }}>
        <CheeseburgerMenu
          isOpen={this.state.menuOpen}
          width={375}
          noShadow={true}
          closeCallback={this.closeMenu.bind(this)}
        >
          <MenuContent closeCallback={this.closeMenu.bind(this)}/>
        </CheeseburgerMenu>
        <div className='nav-funds-mini'>
          <div className='nav-funds-menu-icon' onClick={() => this.checkOffset(this)}>
            <HamburgerMenu
              isOpen={this.state.menuOpen}
              menuClicked={this.state.menuOpen ? this.closeMenu.bind(this) : this.openMenu.bind(this)}
              width={28}
              height={18}
              strokeWidth={2}
              rotate={0}
              color='grey'
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
          <NavLink to='/'>
           <div className='nav-funds-logo-mini-container'>
            <img alt='header-logo' className='nav-funds-logo-mini' src='https://s3.us-east-2.amazonaws.com/gab-images/gabelli_funds_hor_positive_rgb.jpg' />
           </div>
          </NavLink>
          <div id="mobile-search-link-container"><NavLink to="/funds/search"><Icon icon="search" color="grey" iconSize={25} className="mobile-search-link"/></NavLink></div>
        </div>
        {
          this.state.isIE ?
          <div className='nav-funds-ie' id='funds-navbar' ref={this.fundsNavRef}>
            <div className='nav-funds-item-1'>
              <NavLink to='/'>
                <img alt='header-logo' className='nav-funds-logo' src='https://s3.us-east-2.amazonaws.com/gab-images/gabelli_funds_hor_positive_rgb.jpg' />
              </NavLink>
            </div>
            <div className='nav-funds-item nav-funds-item-3' style={{'borderTopColor': '#6dcff6'}}>
              <NavLink to='/'>
                Mutual Funds
              </NavLink>
            </div>
            <div className='nav-funds-item nav-funds-item-5' style={{'borderTopColor': '#00aeef'}}>
              <NavLink to='/'>
                Closed Ends
              </NavLink>
            </div>
            <div className='nav-funds-item nav-funds-item-7' style={{'borderTopColor': '#005b97'}}>
              <NavLink to='/'>
                UCITS (SICAV)
              </NavLink>
            </div>
            <div className='nav-funds-item nav-funds-item-9' style={{'borderTopColor': 'darkslategrey'}}>
              <NavLink to='/'>
                Money Market
              </NavLink>
            </div>
            <div className='nav-funds-item nav-funds-item-11' style={{'borderTopColor': 'black'}}>
              <NavLink to=''>
                Insights
              </NavLink>
            </div>
            <div className='nav-funds-item nav-funds-item-13' style={{'borderTopColor': 'grey'}}>
              <NavLink to=''>
                Our Team
              </NavLink>
            </div>
            <div className='nav-funds-item nav-funds-item-15' style={{'borderTopColor': 'lightgrey'}}>
              <NavLink to=''>
                Forms
              </NavLink>
            </div>
          </div>
        :
          <div className='nav-funds' id='funds-navbar' ref={this.fundsNavRef}>
            <NavLink  to='/'>
             <div className='nav-funds-item-1'>
               <img alt='header-logo' className='nav-funds-logo' src='https://s3.us-east-2.amazonaws.com/gab-images/gabelli_funds_hor_positive_rgb.jpg' />
             </div>
            </NavLink>
            <NavLink to='/'>
             <div className='nav-funds-item nav-funds-item-3' style={{'borderTopColor': '#6dcff6'}}>
              Mutual Funds
             </div>
            </NavLink>
            <NavLink to='/'>
             <div className='nav-funds-item nav-funds-item-5' style={{'borderTopColor': '#00aeef'}}>
               Closed Ends
             </div>
            </NavLink>
            <NavLink to=''>
             <div className='nav-funds-item nav-funds-item-7' style={{'borderTopColor': '#005b97'}}>
              UCITS (SICAV)
             </div>
            </NavLink>
            <NavLink to=''>
             <div className='nav-funds-item nav-funds-item-9' style={{'borderTopColor': 'darkslategrey'}}>
              Money Market
             </div>
            </NavLink>
            <NavLink to=''>
              <div className='nav-funds-item nav-funds-item-11' style={{'borderTopColor': 'black'}}>
               Insights
              </div>
            </NavLink>
            <NavLink to='/s'>
              <div className='nav-funds-item nav-funds-item-13' style={{'borderTopColor': 'grey'}}>
               Our Team
              </div>
            </NavLink>
            <NavLink to='/'>
              <div className='nav-funds-item nav-funds-item-15' style={{'borderTopColor': 'lightgrey'}}>
               Forms
              </div>
            </NavLink>
          </div>
        }
      </div>
    )
  }
}

export default FundsTopNav
// export default connect(null, null)(withRouter(FundsTopNav));

// <CovidUpdate />

// <img alt='search' className='nav-funds-search-icon' src={searchIcon}/>
// <div className='nav-funds-search-icon-container'>
//   <div id="wrap">
//     <form action="" autoComplete="on">
//       <input className='nav-funds-search-animated' id="search" name="search" type="text" placeholder="What're we looking for ?"/><input className='nav-funds-search-animated' id="search_submit"  type="submit"/>
//     </form>
//   </div>
// </div>
