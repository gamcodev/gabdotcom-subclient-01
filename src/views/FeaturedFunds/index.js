import React, { Component } from 'react'
import { Spinner } from '@blueprintjs/core'
import { withRouter } from 'react-router-dom'
import {featuredFunds} from './FeaturedFundsStatic'
import FFCard from './card'
import './index.css'

class FeaturedFunds extends Component {



  render(){
    console.log(featuredFunds)
    const { fundType } = this.props
    const cards = featuredFunds ? featuredFunds[fundType].map( ff => <FFCard key={ff.fund_code} ff={ff} handleClick={this.handleClick} /> ) : null
    return(
      <div id="ff-card-wrapper">
        { featuredFunds ? cards : <h5><Spinner size={100} className="funds-spinner"/>&nbsp;</h5> }
      </div>
    )

  }
}


export default FeaturedFunds
