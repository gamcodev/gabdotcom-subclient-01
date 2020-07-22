import React, { Component } from 'react';
import { connect } from 'react-redux'
import{ withRouter } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import { Icon } from '@blueprintjs/core';

const carouselItems = [
  {
    key: 1,
    imagePath: "https://gab-image-links.s3.us-east-2.amazonaws.com/esg1a.png",
    link: "",
    header: "",
    caption: "",
    summary: "",
  },
  {
    key: 2,
    imagePath: "https://gab-image-links.s3.us-east-2.amazonaws.com/esg1b.png",
    link: "",
    header: "",
    caption: "",
    summary: "",
  },


]

class StatsCarousel extends Component {
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
    const parsedCarouselContent = carouselItems.map( (carouselItem) => {
      const key = carouselItem.key
      let textBoxClass = 'funds-home-carousel-text-box';
      let learnMoreButtonClass = 'learn-more-button';
      return (
        carouselItem.link.includes("s3") ?

            <Carousel.Item key={key}>
              <div className='funds-home-carousel-page' style={{'backgroundImage': `url('${carouselItem.imagePath}')`}}>
                <a href={carouselItem.link} target="_blank" rel="noopener noreferrer">
                  <div className={textBoxClass}>

                    <div className='learn-more'>
                    </div>
                  </div>
                </a>
              </div>
            </Carousel.Item>

          :
          <Carousel.Item key={key}>
            <div className='funds-home-carousel-page' style={{'backgroundImage': `url('${carouselItem.imagePath}')`, width: '50%', borderRadius: '50px', position: "relative", left: "0px", right: "0px" }}>

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


export default withRouter(connect(null, null )(StatsCarousel))
