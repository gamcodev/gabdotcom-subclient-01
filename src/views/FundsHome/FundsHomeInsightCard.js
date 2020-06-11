import React from 'react'
import { Link } from 'react-router-dom'
import { parseFullDate } from '../TableTools'


const FundsHomeInsightCard = (props) => {
  const insight = props.insight
  return (
    <div className='funds-home-insight-card'>
      <Link to={"/funds/insights/" + insight.id}>
        <img className='funds-home-insight-image' src={`https://s3.us-east-2.amazonaws.com/gab-commentary-images/${insight.photo}`} alt="funds-home-insight"/>
      </Link>
      <Link to={"/funds/insights/" + insight.id}>
        <div className='funds-home-insight-title'>
          {insight.title}
        </div>
      </Link>
      <div className='funds-home-insight-date'>
        {parseFullDate(insight.date)}
      </div>
      <div className='funds-home-insight-description'>
        {insight.description}
      </div>
    </div>
  )
}

export default FundsHomeInsightCard
