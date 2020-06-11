import React, { Component } from 'react';
import { connect } from 'react-redux'
import{ withRouter } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import { Icon } from '@blueprintjs/core';

const carouselItems = [
  {
    key: 1,
    imagePath: "https://gab-images.s3.us-east-2.amazonaws.com/skyline-covid.jpg",
    link: "https://gab-misc-pdfs.s3.us-east-2.amazonaws.com/COVID_19_Update.pdf",
    header: "COVID-19 Update",
    caption: "A Letter From Our Investment Team",
    summary: "Perspectives on Recent Market Volatility, Capital Preservation and Values of our Firm",
  },
  {
    key: 2,
    imagePath: "https://s3.us-east-2.amazonaws.com/gab-images/nyc1.jpg",
    link: "funds/open_ends/405",
    header: "Private Market Value with a Catalyst",
    caption: "Excellence in Value Investing",
    summary: "Identifying undervalued stocks that have a reasonable probability of realizing their estimated PMV over time.",
  },
  {
    key: 3,
    imagePath: "https://s3.us-east-2.amazonaws.com/gab-images/wind-energy-esg-1.jpg",
    link: "funds/open_ends/1794",
    header: "The Gabelli ESG Fund",
    caption: "Sustainable Investing for a Better Future",
    summary: "A Mutual Fund Adhering to a Broad Base of Responsible Environmental, Social & Governance Criteria",
  },
  {
    key: 4,
    imagePath: "https://s3.us-east-2.amazonaws.com/gab-images/pet-parents-1.jpg",
    link: "funds/open_ends/2994",
    header: "The Gabelli Pet Parents Fund",
    caption: "Services Aligned to your Financial Goals",
    summary: "Investing in the Pet Industry",
  },
  {
    key: 5,
    imagePath: "https://gab-images.s3.us-east-2.amazonaws.com/city-building-2.jpg",
    link: "funds/open_ends/3630",
    header: "The Gabelli Global Financial Services Fund",
    caption: "The Opportunity In Financial Services",
    summary: "Investing in Financial Services",
  }
]

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
                    <div className='funds-home-carousel-header'>
                      <h1 className='large-text'>
                        {carouselItem.header.includes('Catalyst') ? <span>{carouselItem.header}<span>&trade;</span></span> : carouselItem.header}
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
                    {carouselItem.header.includes('Catalyst') ? <span>{carouselItem.header}<span>&trade;</span></span> : carouselItem.header}
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
