import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import { Icon } from '@blueprintjs/core';
import { connect } from 'react-redux';
import MenuContent from './menuContent';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import ReactDOM from 'react-dom'
// import AnnualMeeting from '../Emergency/AnnualMeeting'
import CEFAnnualMeeting from '../Emergency/CEFAnnualMeeting'
import CovidUpdate from '../Emergency/CovidUpdate'
import '../GamcoAssetHome/index.css'

class FundsTopNav extends Component {
  constructor(){
    super()
    this.state = {
      menuOpen: false,
      isIE: false,
      offset: 0,
      showSolutionList: false,
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
      navbar.style.position = "fixed"
      navbar.style.top = 0
    } else {
      navbar.style.position = "relative"
      navbar.style.top = null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.showSolutionList !== this.state.showSolutionList){
      console.log(this.state.showSolutionList)
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
    // let clientWidth = document.documentElement.clientWidth
    return (
      <div >
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
          <NavLink to='/'><div className='nav-funds-logo-mini-container'>
            <img alt='header-logo' className='nav-funds-logo-mini' src='https://s3.us-east-2.amazonaws.com/gab-images/gamco_inv_hor_positive_rgb.jpg' />
          </div></NavLink>
        </div>
        <div className={this.state.isIE ? 'nav-funds-ie' : 'nav-gamco'} id="funds-navbar" ref={this.fundsNavRef}>
          <div className='nav-gamco-item-1'>
            <NavLink to='/'>
              <img alt='header-logo' className='nav-gamco-logo' src='https://s3.us-east-2.amazonaws.com/gab-images/gamco_inv_hor_positive_rgb.jpg'/>
            </NavLink>
          </div>
          <div className='nav-gamco-item-3'></div>
          <div className='nav-gamco-item nav-gamco-item-5' style={{'borderTopColor': '#6dcff6'}}><NavLink  to='/'>Home</NavLink></div>
          <div className='nav-gamco-item nav-gamco-item-7' style={{'borderTopColor': '#00aeef'}}><NavLink to='/corporate/investor_relations'>Investor Relations</NavLink></div>

          <div className='nav-gamco-item nav-gamco-item-9' style={{'borderTopColor': '#005b97'}}><NavLink  to='/corporate/history_timeline'>About</NavLink></div>
          <div className='nav-gamco-item nav-gamco-item-11' style={{'borderTopColor': 'darkslategrey'}}><NavLink  to='/corporate/office_locations'>Locations</NavLink></div>
          <div className='nav-gamco-item nav-gamco-item-13' style={{'borderTopColor': 'slategrey'}}><NavLink  to='/corporate/events'>Events</NavLink></div>

        </div>
        <CEFAnnualMeeting />
        <CovidUpdate />
      </div>
    )
  }
}

export default connect(null, null)(withRouter(FundsTopNav));

// <img alt='search' className='nav-funds-search-icon' src={searchIcon}/>

// Old search bar (isn't connected to backend)
// <div className='nav-funds-search-icon-container'>
//   <div id="wrap">
//     <form action="" autoComplete="on">
//       <input className='nav-funds-search-animated' id="search" name="search" type="text" placeholder="What're we looking for ?"/><input className='nav-funds-search-animated' id="search_submit"  type="submit"/>
//     </form>
//   </div>
// </div>
