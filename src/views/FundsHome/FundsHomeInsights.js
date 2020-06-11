import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FundsHomeInsightCard from './FundsHomeInsightCard';

class FundsHomeInsights extends Component {

  render(){
    const insights = this.props.insights
    .filter( insight => insight.display ? insight.display === "true" : true )
    .map( insight => {
      return (
        <FundsHomeInsightCard insight={insight} key={insight.id}/>
      )
    })

    return (
      <div>
        <div className='funds-home-insights'>
          <div className='funds-home-insights-header'>
            Insights
          </div>
          <div className='funds-home-insights-header-tagline'>
            Disciplined, fundamental research.
            <hr className='funds-home-insights-header-underline'/>
          </div>
          <div className='funds-home-insights-container'>
            {insights.slice(0, 3)}
          </div>
          <div>
            <Link to="/funds/insights"><div className='funds-home-more-insights'>See More Insights</div></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default FundsHomeInsights
