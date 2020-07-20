import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Collapse } from "@blueprintjs/core";
import { connect } from 'react-redux';
import './index.css'
import CollapseGlobalNav from './CollapseGlobalNav.js';

class Navbar extends Component {

  componentWillMount(){
    // this.props.latestInsightFetch()
  }

  reportsHandleMouseEnter = () => {
    document.getElementById("dropdown-container").style.display = "block"
  }

  reportsHandleMouseLeave = () => {
    document.getElementById("dropdown-container").style.display = "none"
  }

  handleHoverClick = (e) => {
    e.stopPropagation()
    document.getElementById("dropdown-container").style.display = "none"
  }

  handleAboutClick = () => {
    this.setState({ showAboutMenu: !this.state.showAboutMenu })
  }

  render() {
    return (
      <nav className='main-navbar'>
        <div className='fund-navbar-responsive'>
          <Collapse isOpen={this.props.isGlobalCollapseOpen}>
            <NavLink to='/'>
              <div className='fund-navbar-responsive-item' onClick={this.props.handleGlobalCollapse}>
                Home
              </div>
            </NavLink>
            <NavLink to='/'>
              <div className='fund-navbar-responsive-item' onClick={this.props.handleGlobalCollapse}>
                GAMCO Asset Management
              </div>
            </NavLink>
            <NavLink to='/'>
              <div className='fund-navbar-responsive-item' onClick={this.props.handleGlobalCollapse}>
                 Investor Relations
              </div>
            </NavLink>
            <NavLink to='/'>
              <div className='fund-navbar-responsive-item' onClick={this.props.handleGlobalCollapse}>
                 Our Team
              </div>
            </NavLink>
            <NavLink to='/'>
              <div className='fund-navbar-responsive-item' onClick={this.props.handleGlobalCollapse}>
                 Document Archive
              </div>
            </NavLink>
            <NavLink to='/'>
              <div className='fund-navbar-responsive-item' onClick={this.props.handleGlobalCollapse}>
                 Media
              </div>
            </NavLink>
            <NavLink to='/'>
              <div className='fund-navbar-responsive-item' onClick={this.props.handleGlobalCollapse}>
                 Insights
              </div>
            </NavLink>
            <NavLink to='/'>
              <div className='fund-navbar-responsive-item' onClick={this.props.handleGlobalCollapse}>
                 About Us
              </div>
            </NavLink>
              <div className='fund-navbar-responsive-item' onClick={this.props.handleGlobalCollapse}>
                <a href='https://www3.financialtrans.com/tf/FANWeb?tx=Disclaim&cz=3060001'> Account Access</a>
              </div>
          </Collapse>
        </div>
        <CollapseGlobalNav handleGlobalCollapse={this.props.handleGlobalCollapse} match={this.props.match} isGlobalCollapseOpen={this.props.isGlobalCollapseOpen}/>
      </nav>

    );

  }
}

// const mapStateToProps = (state) => ({
//   latestInsight: state.latestInsight
// })

export default Navbar
// export default connect(mapStateToProps)(withRouter(Navbar));


// <NavLink to='/gamco'>
//   <div className='fund-navbar-responsive-item' onClick={this.props.handleGlobalCollapse}>
//     GAMCO Asset Management
//   </div>
// </NavLink>
// <NavLink to='/corporate/investor_relations'>
//   <div className='fund-navbar-responsive-item' onClick={this.props.handleGlobalCollapse}>
//      Investor Relations
//   </div>
// </NavLink>
// <NavLink to='/funds/portfolio_managers'>
//   <div className='fund-navbar-responsive-item' onClick={this.props.handleGlobalCollapse}>
//      Our Team
//   </div>
// </NavLink>
// <NavLink to='/funds/archive'>
//   <div className='fund-navbar-responsive-item' onClick={this.props.handleGlobalCollapse}>
//      Document Archive
//   </div>
// </NavLink>
// <NavLink to='/media'>
//   <div className='fund-navbar-responsive-item' onClick={this.props.handleGlobalCollapse}>
//      Media
//   </div>
// </NavLink>
// <NavLink to='/funds/insights'>
//   <div className='fund-navbar-responsive-item' onClick={this.props.handleGlobalCollapse}>
//      Insights
//   </div>
// </NavLink>
// <NavLink to='/corporate/history_timeline'>
//   <div className='fund-navbar-responsive-item' onClick={this.props.handleGlobalCollapse}>
//      About Us
//   </div>
