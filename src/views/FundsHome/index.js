import React, { Component, Suspense } from 'react';
import EventsBanner from '../Events/EventsBanner'
import { Spinner } from '@blueprintjs/core'
import { connect } from 'react-redux';
// import { fetchFundsHomeInsights } from '../../redux/modules/Insights/actions';
const FundsHomeCarousel = React.lazy(() => import ('./FundsHomeCarouselStatic'))
// const FundsHomeInsights = React.lazy(() => import('./FundsHomeInsights'))
const FeaturedFunds = React.lazy(() => import('../FeaturedFunds'))

class FundsHome extends Component  {

  // componentDidMount(){
  //   this.props.fetchFundsHomeInsights();
  // }

  render(){
    return(
      <div>
        <Suspense fallback={<Spinner size={100} className="funds-spinner"/>}>
          <header>
            <FundsHomeCarousel />
          </header>
          <EventsBanner />
          <main>
            <div id="home-ff-container">
              <div className='funds-home-featured-funds-header'>
                Featured
              </div>
              <section>
                <div className='funds-home-featured-funds-header-tagline'>
                  Mutual Funds
                  <hr className='funds-home-featured-funds-header-underline'/>
                </div>
                <FeaturedFunds fundType="open_end"/>
              </section>
              <section>
                <div className='funds-home-featured-funds-header-tagline'>
                  Closed Ends
                  <hr className='funds-home-featured-funds-header-underline'/>
                </div>
                <FeaturedFunds fundType="closed_end"/>
              </section>
              {/* insights section removed for this repo */}
            </div>
          </main>
        </Suspense>
      </div>
    )
  }
}

export default FundsHome
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
