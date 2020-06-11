import React, { Component } from 'react';
import {Icon } from "@blueprintjs/core";
import './index.css'


class AccountAccessGamco extends Component {
  render() {
    return (
      <div className="login-div">
        <div className="gamco-login">
          <a href='https://www.aplnavigator.com/gabelli' ><span><Icon icon='lock' className='lock' iconSize={9} color='white'/>  &nbsp;LOG IN</span></a>
        </div>
      </div>
    )
  }
}

export default AccountAccessGamco


// <div className="login-div">
//   <div className="gamco-login">
//     <a href='https://www3.financialtrans.com/tf/FANWeb?tx=Disclaim&cz=3060001' >LOG IN</a>
//   </div>
// </div>


// <div className='log-in-gamco'>
//   <a href='https://www3.financialtrans.com/tf/FANWeb?tx=Disclaim&cz=3060001'><Icon icon='lock' color='#cdcdcf' iconSize={21}/> &nbsp; Access/Open Account</a>
// </div>
// <div className='log-in-gamco-mobile'>
//   <a href='https://www3.financialtrans.com/tf/FANWeb?tx=Disclaim&cz=3060001'><Icon icon='lock' color='#cdcdcf' iconSize={12}/> &nbsp; Access/Open Account</a>
// </div>
