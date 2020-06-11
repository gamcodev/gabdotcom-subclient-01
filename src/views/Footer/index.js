import React, { Component } from 'react'
import LightBlueTop from './LightBlueTop'
import BlueLinksMiddle from './BlueLinksMiddle'
import BlueLogoBottom from './BlueLogoBottom'
import './index.css'

class Footer extends Component {

  render(){
    return(
      <div id="main-footer">
        <LightBlueTop />
        <BlueLinksMiddle />
        <BlueLogoBottom />
      </div>
    )
  }
}

export default Footer
