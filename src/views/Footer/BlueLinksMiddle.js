import React from 'react'
import { Link } from 'react-router-dom'
import LinkedIn from '../../assets/images/social-media-logos/linkedin-logo.svg';
import Facebook from '../../assets/images/social-media-logos/facebook-letter-logo.svg';
import Twitter from '../../assets/images/social-media-logos/twitter-logo.svg';
import YouTube from '../../assets/images/social-media-logos/youtube-logo.svg';
import Instagram from '../../assets/images/social-media-logos/instagram.svg';

const BlueLinksMiddle = () => {
  return(
    <div className='footer-table-funds'>
        <div className=' first-column'>
          The Gabelli Mutual Funds are distributed by G.distributors, LLC., a registered broker-dealer and member of <span><a href='http://www.finra.org/'>FINRA.</a></span>
          <br></br>
          <br></br>
          Check the background of this firm or one of its investment professionals on <span><a href='https://brokercheck.finra.org/' >FINRA's BrokerCheck.</a></span>
          <br></br>
          <br></br>
          <span style={{'fontSize': '10px'}}>&copy; 2020 GAMCO Investors, Inc. All rights reserved.</span>
          <br></br>
          <br></br>
          <div className='bottom-links-funds'>
            <span><Link to='/corporate/privacy'> Privacy & Security</Link></span> |  <span><a href="https://gab-misc-pdfs.s3.us-east-2.amazonaws.com/GDPR_Privacy.pdf" target="_blank" rel="noreferrer noopener"> GDPR Privacy Policy</a></span>
          </div>
          <div className=' social-media-links'>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/company/investgabelli"><img alt='LinkedIn' src={LinkedIn} width={'50%'} /></a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/InvestGabelli"><img alt='Facebook' src={Facebook} width={'50%'}/></a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/InvestGabelli"><img alt='Twitter' src={Twitter} width={'50%'}/></a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/channel/UCNH08mPtOgsRq3kXWS4UMdA"><img alt='YouTube' src={YouTube} width={'50%'}/></a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/investgabelli"><img alt='Instagram' src={Instagram} width={'50%'}/></a>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className=' footer-header'>
            Our Company
          </div>
          <div className=' footer-item-funds'>
            <Link to="/corporate/careers">Careers</Link>
          </div>
          <div className=' footer-item-funds'>
            <Link to="/media">Media</Link>
          </div>
          <div className=' footer-item-funds'>
            <Link to="/corporate/history_timeline">History</Link>
          </div>
          <div className=' footer-item-funds'>
            <Link to='/funds/archive'>Document Archive</Link>
          </div>
          <div className=' footer-item-funds'>
            <Link to="/corporate/investor_relations">Press Releases</Link>
          </div>
        </div>
        <div className="footer-section">
          <div className=' footer-header'>
            Ways To Invest
          </div>
          <div className=' footer-item-funds'>
            <Link to="/gamco" >Separate Accounts</Link>
          </div>
          <div className=' footer-item-funds'>
            <Link to="/funds/open_ends" >Mutual Funds </Link>
          </div>
          <div className=' footer-item-funds'>
            <Link to="/funds/closed_ends" >Closed-End Funds </Link>
          </div>
          <div className=' footer-item-funds'>
            <Link to="/funds/money_markets" >Money Market Fund </Link>
          </div>
          <div className=' footer-item-funds'>
            <Link to="/funds/sicavs" >UCITS (SICAV)</Link>
          </div>
        </div>
        <div className="footer-section">
          <div className=' footer-header'>
            Contact Us
          </div>
          <div className=' footer-item-funds'>
            <Link to="/funds/contact">Contact Information</Link>
          </div>
          <div className=' footer-item-funds'>
            <Link to="/corporate/office_locations">Locations</Link>
          </div>
          <div className=' footer-item-funds'>
            <Link to="/funds/portfolio_managers">Our Teams</Link>
          </div>
          <div className=' footer-item-funds'>
           <Link to="/funds/forms">Forms</Link>
         </div>
        </div>
      </div>
  )
}

export default BlueLinksMiddle


// <div className='bottom-links-funds'>
//  Site Map | Our Services | <span><Link to='/corporate/privacy'> Privacy & Security</Link></span> |  <span><a href="https://gab-misc-pdfs.s3.us-east-2.amazonaws.com/GDPR_Privacy.pdf" target="_blank" rel="noreferrer noopener"> GDPR Privacy Policy</a></span> | Feedback
// </div>
