import React, { Component } from 'react';
import { connect } from 'react-redux'
import{ withRouter } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import { Icon } from '@blueprintjs/core';

class FundsHomeCarousel extends Component {
  handleClick = (link) => {
    if(!!link){
      this.props.history.push(link)
    }
  }

  addTradeMark = str => {
    const needsTrademark = str.includes('Catalyst')
    if (needsTrademark) {
      const htmlString = str.split(" ").map( word => {
        if (word === "Catalyst"){
          return <span>Catalyst&trade;&nbsp;</span>
        } else {
          return <span>{word}&nbsp;</span>
        }
      })
      return htmlString
    } else {
      return str
    }
  }

  render(){
    if(!this.props.carousel.length) { return null }
    const parsedCarouselContent = this.props.carousel.map( (page) => {
      const key = Object.keys(page)[0]
      const carouselItem = page[key]
      let textBoxClass = 'funds-home-carousel-text-box';
      let learnMoreButtonClass = 'learn-more-button';
      return (
        carouselItem.link.includes("s3") ?

            <Carousel.Item key={key}>
              <div className='funds-home-carousel-page' style={{'backgroundImage': `url('${carouselItem.imagePath}')`}}>
                <a href={carouselItem.link} target="_blank" rel="noopener noreferrer">
                  <div className={textBoxClass}>
                    <div className='funds-home-carousel-header'>
                      <h1 className='large-text'>
                        {carouselItem.header.includes('Catalyst') ? <span>{carouselItem.header}<span>&trade;</span></span> : page[key].header}
                      </h1>
                      <div className='medium-text'>
                        {this.addTradeMark(carouselItem.caption)}
                      </div>
                      <div className='regular-text'>
                        {carouselItem.summary}
                      </div>
                    </div>
                    <div className='learn-more'>
                      <button className={learnMoreButtonClass}><Icon icon='arrow-right' color='white' iconSize='12'/></button>
                    </div>
                  </div>
                </a>
              </div>
            </Carousel.Item>

          :
          <Carousel.Item key={key}>
            <div className='funds-home-carousel-page' style={{'backgroundImage': `url('${carouselItem.imagePath}')`}}>
              <div className={textBoxClass} onClick={ () => this.handleClick(carouselItem.link) }>
                <div className='funds-home-carousel-header'>
                  <h1 className='large-text'>
                    {carouselItem.header.includes('Catalyst') ? <span>{carouselItem.header}<span>&trade;</span></span> : page[key].header}
                  </h1>
                  <div className='medium-text'>
                    {this.addTradeMark(carouselItem.caption)}
                  </div>
                  <div className='regular-text'>
                    {carouselItem.summary}
                  </div>
                </div>
                <div className='learn-more'>
                  <button className={learnMoreButtonClass}><Icon icon='arrow-right' color='white' iconSize='12'/></button>
                </div>
              </div>
            </div>
          </Carousel.Item>
      )
    })
    return (
      <div>
        <Carousel>
          {parsedCarouselContent}
        </Carousel>
      </div>
    )
  }
}


export default withRouter(connect(null, null )(FundsHomeCarousel))
