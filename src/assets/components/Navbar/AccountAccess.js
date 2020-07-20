import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from "@blueprintjs/core";
import './index.css'

const AccountAccess = props => {
  const { isInClosedEnds } = props
  const loneLoginDivStyle = isInClosedEnds ? { width: "20vw" } : null
  // const loneLoginButtonStyle = isInClosedEnds ? { float: "right" } : null
  const loginLink = (
    isInClosedEnds ?
    <Link to='/funds/closed_ends/accounts'><span><Icon icon='lock' className='lock' iconSize={9} color='white'/>  &nbsp;LOG IN</span></Link>
    :
    <a href='https://www3.financialtrans.com/tf/FANWeb?tx=Disclaim&cz=3060001' ><span><Icon icon='lock' className='lock' iconSize={9} color='white'/>  &nbsp;LOG IN</span></a>
  )
  return (
    <div className="client-divs" style={loneLoginDivStyle}>
      <div className="existing-client">
        {loginLink}
      </div>
      {
        isInClosedEnds ?
        null :
        <div className="open-account">
          <a href='https://www3.financialtrans.com/tf/FANWeb?tx=Disclaim&cz=3060001'>OPEN ACCOUNT</a>
        </div>
      }
    </div>
  )
}

export default AccountAccess


// <div className="existing-client">
//   <a href='https://www3.financialtrans.com/tf/FANWeb?tx=Disclaim&cz=3060001' >LOG IN</a>
// </div>
// <div className="open-account">
//   <a href='https://www3.financialtrans.com/tf/FANWeb?tx=Disclaim&cz=3060001'>OPEN ACCOUNT</a>
// </div>


// <div className='log-in'>
//   <a href='https://www3.financialtrans.com/tf/FANWeb?tx=Disclaim&cz=3060001'><Icon icon='lock' color='#cdcdcf' iconSize={21}/> &nbsp; Access/Open Account</a>
// </div>
// <div className='log-in-mobile'>
//   <a href='https://www3.financialtrans.com/tf/FANWeb?tx=Disclaim&cz=3060001'><Icon icon='lock' color='#cdcdcf' iconSize={12}/> &nbsp; Access/Open Account</a>
// </div>
