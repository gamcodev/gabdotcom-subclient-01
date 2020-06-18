import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { withCookies } from 'react-cookie'
import Navbar from '../components/Navbar'
import { ScrollContext } from 'react-router-scroll-4';
import FundsHome from '../views/FundsHome'
import FundsTopNav from '../views/FundsHome/FundsTopNav'
import Footer from '../views/Footer/index'
import Events from '../views/Events'
import Robo from '../views/RoboFeature'

import GamcoInvestorsHome from '../views/GamcoInvestorsHome'

import './App.css';

class App extends Component {
  state = {
    isGlobalCollapseOpen: false
  }

  handleGlobalCollapse = (e) => {
    if (e.target.id !== "search" && e.target.id !== "search_submit"){
      this.setState({
        isGlobalCollapseOpen: !this.state.isGlobalCollapseOpen
      })
    }
  }
  render() {
    return (
      <Router>
        <ScrollContext>
          <div>
            <Route path='/' render={ (props) => <Navbar isGlobalCollapseOpen={this.state.isGlobalCollapseOpen} handleGlobalCollapse={this.handleGlobalCollapse} match={props.match}/> } />
            <Route exact path='/' render={ () => <FundsTopNav isGlobalCollapseOpen={this.state.isGlobalCollapseOpen}/>} />

            <Route path='/' exact component={ FundsHome } />
            <Route path='/events' exact component={ Events }/>
            <Route path='/robo' exact component={ Robo }/>


          </div>
        </ScrollContext>
      </Router>

    )

  }
}

export default App;
