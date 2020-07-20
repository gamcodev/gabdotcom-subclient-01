import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Icon, Menu, Dialog, Classes, Popover, PopoverInteractionKind } from "@blueprintjs/core";
import { withRouter } from 'react-router';
// import { fetchSearchResults } from '../../redux/modules/Search/actions';
import ReactCountryFlag from 'react-country-flag';
import AccountAccess from './AccountAccess';
import AccountAccessGamco from './AccountAccessGamco';

// import ReactDOM from 'react-dom'


class CollapseGlobalNav extends Component {

  state = {
    isOpen: false
  }

  handleKeyDown = (e) => {
    if(e.key === "Enter"){
      console.log(e)

      // const { value } = e.target
      // this.props.fetchSearchResults(value)
      // e.target.value = ""
      // this.props.history.push("/funds/search")
    }
  }

  checkIfIE = () => {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./)) {
      return true
    }
  }

  handlePopover = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  setCountry = (country) => {
    if (country === 'japan'){
      this.setState({
        country,
        name: 'Gabelli Japan, K.K.',
        siteLink: 'http://gabelli.jp/firm/corpphilosophy.aspx',
        exitToUKSiteModal: true,
        isOpen: !this.state.isOpen
      })
    } else if ('uk') {
      this.setState({
        country,
        name: 'GAMCO Asset Management (UK) Limited',
        siteLink: 'https://gabelli.co.uk',
        exitToUKSiteModal: true,
        isOpen: !this.state.isOpen
      })
    }
  }

  closeExitToUKSiteModal = () => {
    this.setState({
      exitToUKSiteModal: false
    })
  }

  render(){

    // const items = {[{href: 'https://www.gabelli.co.uk', icon: 'folder-open', text: 'United Kingdom'}, {href: 'https://www.gabelli.jp/firm/corpphilosophy.aspx', icon: 'folder-open', text: 'Japan'}]}
    const siteOptions = (
      <Menu>
        <p className='site-options' onClick={() => this.setCountry('uk')}><ReactCountryFlag code='gb' svg /> &nbsp; UK &nbsp;<Icon icon='caret-right' style={{float: 'right'}} iconSize={14} color='grey'/></p>
        <p className='site-options' onClick={() => this.setCountry('japan')}><ReactCountryFlag code='jp' svg /> &nbsp; JAPAN &nbsp;<Icon icon='caret-right' style={{float: 'right'}} iconSize={14} color='grey'/></p>
      </Menu>
    )
    const onLandingPage = window.location.href.includes('gamco_investors')
    const { checkIfIE } = this
    return (
      <div style={{'backgroundColor': onLandingPage ? 'black' : 'white'}} className='fund-navbar-open-collapse-container'>
        <div className='fund-navbar-open-collapse' style={{'backgroundImage': window.location.href.includes('gamco') ? 'none' : "url('https://s3.us-east-2.amazonaws.com/gab-images/top_funds.gif')", 'height': window.location.href.includes('gamco') ? '2px' : '4px'}}>
          &nbsp;
        </div>
        <div className='fund-navbar-open-collapse-text' >
          <div onClick={this.props.handleGlobalCollapse} id="our-company-sites"><Icon icon={this.props.isGlobalCollapseOpen ? 'caret-up' : 'caret-down'} color='#00aeef' iconSize={17}/>  Our Company & Sites</div>
          {
            !window.location.href.includes('gamco') ?
              <div className={'fund-navbar-open-collapse-search' + ( checkIfIE() ? ' ie-search-bar' : '')}>
                <div className='collapse-search' id="wrap">
                  <form action="" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                    <input className='fund-navbar-search-animated' onKeyDown={(e) => this.handleKeyDown(e)} aria-label="search-bar" id="search" name="search" type="text" placeholder="What can we help you find?"/><input className='fund-navbar-search-animated' id="search_submit"  type="submit"/>
                  </form>
                </div>
              </div>
            :
              null
          }
          <div className='country-container'>
            <Popover content={siteOptions}
              isOpen={this.state.isOpen ? true : false}
              minimal={true}
              InteractionKind={PopoverInteractionKind.CLICK}
              canEscapeKeyClose={true}
              shouldDismissPopover={true}
            >
              <span onClick={this.handlePopover}><span><Icon icon='caret-down' color='grey' iconSize={17}/>&nbsp;</span><ReactCountryFlag code='us' svg/> &nbsp;<span className='country-name'>United States</span></span>
            </Popover>
            <Dialog
              onClose={this.closeExitToUKSiteModal}
              usePortal={true}
              autoFocus={true}
              canEscapeKeyClose={true}
              canOutsideClickClose={true}
              enforceFocus={true}
              transitionDuration={1}
              icon="link"
              title={this.state.name}
              isOpen={this.state.exitToUKSiteModal}>
              <div className={Classes.DIALOG_BODY} style={{'height': '100px', 'overflowY': 'auto'}}>
                <div className='exit-to-uk-dialog-body'>
                <p>GAMCO's non-U.S. affiliate {`${this.state.name}`} provides products and services designed specifically for overseas investors. GAMCO does not offer these products or services outside their intended countries or regions, and purchase orders from U.S. investors will not be accepted, subject to limited exceptions.</p>
                <br></br>
                <p>
                  The information available through accessing {`${this.state.name}`} has been prepared and is maintained by non-U.S. affiliates of GAMCO Investors, Inc. Access to this material by U.S. residents is for informational purposes only and should not be construed as an offer to sell, a solicitation of an offer to buy, or a recommendation for any security under U.S. law. All content contained therein should be considered, and is subject to, the specific regulatory requirements under which {`${this.state.name}`} operates.
                </p>
                <br></br>
                <p>
                  To reach the web site of a non-U.S. affiliate of GAMCO Investors, Inc., please <span style={{'color': '#00aeef'}}><a href={`${this.state.siteLink}`} target="_blank" rel="noopener noreferrer">click here</a></span>.
                </p>
                </div>
              </div>
              <div className={Classes.DIALOG_FOOTER}>
                <div className='column column-8'>
                    &nbsp;
                </div>
                <div className='column column-4'>
                    <img className='modal-perf-calc-logo' alt='' src={"https://s3.us-east-2.amazonaws.com/gab-images/gabellifundsskybluehorizontal.jpg"} width={'60%'}/>
                </div>
              </div>
            </Dialog>
          </div>

          {
            window.location.href.includes('funds') || this.props.location.pathname === "/" || window.location.href.includes('/SICAV') || window.location.href.includes('/sicav') ?
                <AccountAccess isInClosedEnds={window.location.href.includes("closed")}/>

          :
              null
          }
          {
            window.location.href.includes('gamco')  ?
                <AccountAccessGamco />
          :
              null
          }
        </div>
      </div>
    )
  }
}
export default withRouter(connect(() => ({}), { })(CollapseGlobalNav))

// export default withRouter(connect(() => ({}), { fetchSearchResults })(CollapseGlobalNav))


          // {
          //   !window.location.href.includes('gamco') ?
          //     <div className='fund-navbar-open-collapse-search'>
          //       <div id="wrap">
          //         <form action="" autoComplete="off">
          //           <input className='fund-navbar-search-animated' id="search" name="search" type="text" placeholder="What can we help you find?"/><input className='fund-navbar-search-animated' id="search_submit"  type="submit"/>
          //         </form>
          //       </div>
          //     </div>
          //   :
          //     null
          // }
