import React, { Component, Suspense } from 'react';
import { Spinner } from '@blueprintjs/core'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { Icon } from '@blueprintjs/core';
import MenuContent from '../FundsHome/menuContent';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import FundsTopNav from '../../assets/components/Navbar';
import Footer from '../Footer/index'
import FundsHome from '../FundsHome'
import Navbar from '../../assets/components/Navbar'
import { ScrollContext } from 'react-router-scroll-4';
import GamcoInvestorsHome from '../GamcoInvestorsHome'
import '../GamcoInvestorsHome/home-theme.css';
const ESGCarousel = React.lazy(() => import ('./esgcarouselstatic'))
const StatsCarousel = React.lazy(() => import ('./statscarouselstatic'))
const EsgLanding = () => {
  return


}
class ESGHome extends Component  {
    constructor(){
      super()
      this.state = {
        menuOpen: false,
        isIE: false,
        offset: 0
      }
      this.fundsNavRef = React.createRef()
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
    openMenu(){
      this.setState({ menuOpen: true})
    }

    closeMenu(){
      this.setState({ menuOpen: false})
    }


  // componentDidMount(){
  //   this.props.fetchFundsHomeInsights();
  // }

  render(){
    return(
      <div>

        <Suspense fallback={<Spinner size={100} className="funds-spinner"/>}>
          <header>
          </header>
          <main>

              {/* insights section removed for this repo */}

          </main>
        </Suspense>

            <head>
            <link rel="stylesheet" type="text/css" href="mystyle.css"></link>

         </head>

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
                 <NavLink to='/funds/open_ends'>
                   Mutual Funds
                 </NavLink>
               </div>
               <div className='nav-funds-item nav-funds-item-5' style={{'borderTopColor': '#00aeef'}}>
                 <NavLink to='/funds/closed_ends'>
                   Closed Ends
                 </NavLink>
               </div>
               <div className='nav-funds-item nav-funds-item-7' style={{'borderTopColor': '#005b97'}}>
                 <NavLink to='/funds/sicavs'>
                   UCITS (SICAV)
                 </NavLink>
               </div>
               <div className='nav-funds-item nav-funds-item-9' style={{'borderTopColor': 'darkslategrey'}}>
                 <NavLink to='/funds/money_markets'>
                   Money Market
                 </NavLink>
               </div>
               <div className='nav-funds-item nav-funds-item-11' style={{'borderTopColor': 'black'}}>
                 <NavLink to='/funds/insights'>
                   Insights
                 </NavLink>
               </div>
               <div className='nav-funds-item nav-funds-item-13' style={{'borderTopColor': 'grey'}}>
                 <NavLink to='/funds/portfolio_managers'>
                   Our Team
                 </NavLink>
               </div>
               <div className='nav-funds-item nav-funds-item-15' style={{'borderTopColor': 'lightgrey'}}>
                 <NavLink to='/funds/forms'>
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
               <NavLink to='/funds/open_ends'>
                <div className='nav-funds-item nav-funds-item-3' style={{'borderTopColor': '#6dcff6'}}>
                 Mutual Funds
                </div>
               </NavLink>
               <NavLink to='/funds/closed_ends'>
                <div className='nav-funds-item nav-funds-item-5' style={{'borderTopColor': '#00aeef'}}>
                  Closed Ends
                </div>
               </NavLink>
               <NavLink to='/funds/sicavs'>
                <div className='nav-funds-item nav-funds-item-7' style={{'borderTopColor': '#005b97'}}>
                 UCITS (SICAV)
                </div>
               </NavLink>
               <NavLink to='/funds/money_markets'>
                <div className='nav-funds-item nav-funds-item-9' style={{'borderTopColor': 'darkslategrey'}}>
                 Money Market
                </div>
               </NavLink>
               <NavLink to='/funds/insights'>
                 <div className='nav-funds-item nav-funds-item-11' style={{'borderTopColor': 'black'}}>
                  Insights
                 </div>
               </NavLink>
               <NavLink to='/funds/portfolio_managers'>
                 <div className='nav-funds-item nav-funds-item-13' style={{'borderTopColor': 'grey'}}>
                  Our Team
                 </div>
               </NavLink>
               <NavLink to='/funds/forms'>
                 <div className='nav-funds-item nav-funds-item-15' style={{'borderTopColor': 'lightgrey'}}>
                  Forms
                 </div>
               </NavLink>
             </div>
           }
         </div>
         <Suspense fallback={<Spinner size={100} className="funds-spinner"/>}><ESGCarousel /></Suspense>

         <div class="carousel-container" style={{textAlign:"center"}}></div>
            <h2 className='h2' style={{textAlign:"left", color: '#00ffff', marginTop: "7px", fontFamily: "Gothic Light", fontSize: "40px"}}>Human Capital. Water Stress. Business Ethics.</h2>
            <h1 className='h1' style={{textAlign:"left", color: '#00008b', marginTop: "7px", fontFamily: "Gothic Medium", fontSize: "50px"}}>The Gabelli ESG Fund</h1>
            <div id="bar" style={{backgroundColor: "blue"}}></div>
            <h1 className='h1' style={{textAlign:"left", color: '#00008b', marginTop: "7px", fontFamily: "Gothic Medium", fontSize: "40px"}}>Our Committment to Ethical Investing</h1>
            <h2 className='h2' style={{textAlign:"left", color: '#00ffff', marginTop: "7px", fontFamily: "Gothic Light", fontSize: "30px"}}>The Gabelli ESG Fund uses our firm's expertise to evaluate the social responsibility of various asset investments. Let us use our holistic ESG (Environment, Social, Governance) analysis process to identify companies trading below their true value were they made public. Companies making over 5% of their revenue from alcohol, tobacco, defense, fossil fuels and gaming are automatically excluded. Make returns on your portfolio while also helping to make a difference in the world with the Gabelli ESG Fund.</h2>
            <div class="w3-bar-item"></div>
            <h1 className='h1' style={{textAlign:"left", color: '#00008b', marginTop: "7px", fontFamily: "Gothic Medium", fontSize: "40px"}}>Socially Responsible Investments</h1>
            <Suspense fallback={<Spinner size={100} className="funds-spinner"/>}><StatsCarousel /></Suspense>
            <h2 className='h2' style={{textAlign:"left", color: '#00ffff', marginTop: "7px", fontFamily: "Gothic Light", fontSize: "30px"}}>80% of the fund's investments must meet our firm's social responsibility guidelines.</h2>
            <h1 className='h1' style={{textAlign:"left", color: '#00008b', marginTop: "7px", fontFamily: "Gothic Medium", fontSize: "50px"}}>Feel Good Returns.</h1>
            <Footer />
            )
        }
      </div>
    )
  }

}


export default ESGHome
// const mapStateToProps = (state) => ({
//   insights: state.insights.fundsHomeInsights || [],
// })
//
// export default connect(mapStateToProps, { fetchFundsHomeInsights })(FundsHome)


// <section>
// { this.props.insights.length > 0 ?
//   <FundsHomeInsights insights={this.props.insights}/>
//   :
//   <div>
//     <Spinner size={100} className="funds-spinner"/>
//   </div>
// }
// </section>
