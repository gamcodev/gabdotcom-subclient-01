import React, { Component } from 'react';
import { connect } from 'react-redux'
import{ withRouter } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import { Icon } from '@blueprintjs/core';

const carouselItems = [
  {
    key: 1,
    imagePath: "https://cdn.pixabay.com/photo/2019/03/05/12/52/plant-4036130_960_720.jpg",
    link: "",
    header: "",
    caption: "",
    summary: "",
  },
  {
    key: 2,
    imagePath: "https://p0.pxfuel.com/preview/311/933/291/gravel-bike-gravel-pathway-dirt-road.jpg",
    link: "",
    header: "",
    caption: "",
    summary: "",
  },
  {
    key: 3,
    imagePath: "https://p0.pxfuel.com/preview/753/761/251/people-babies-baby-child.jpg",
    link: "",
    header: "",
    caption: "",
    summary: "",
  },

]

class ESGCarousel extends Component {
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
            <div className='funds-home-carousel-page' style={{'backgroundImage': `url('${carouselItem.imagePath}')`, width: '66%', borderRadius: "50px"}}>

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


export default withRouter(connect(null, null )(ESGCarousel))
