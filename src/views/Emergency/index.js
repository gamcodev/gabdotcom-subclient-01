import React from 'react'

const Emergency = () => {

  return (
    <div className='emergency-page'>
      <h2>Emergency Information</h2>
      <p>In the event of an emergency, please contact your respective department head for further instructions.</p>
      <div className='emergency-section'>
        <p>For VPN instructions for Windows users click <a style={{color: 'blue'}} target="_blank" rel="noopener noreferrer" href='https://gab-misc-pdfs.s3.us-east-2.amazonaws.com/VPN_Instructions_Windows.pdf'>here</a>.</p>
        <p>For VPN instructions for Mac users click <a style={{color: 'blue'}} target="_blank" rel="noopener noreferrer" href='https://gab-misc-pdfs.s3.us-east-2.amazonaws.com/VPN_Instructions_Mac.pdf'>here</a>.</p>
      </div>
      <div className='emergency-section'>
        <p>For instructions on how to add email to your personal device click <a style={{color: 'blue'}} target="_blank" rel="noopener noreferrer" href='https://gab-misc-pdfs.s3.us-east-2.amazonaws.com/Maas360_iOSDevice_Enrollment_v2.pdf'>here</a>.</p>
      </div>
      <div className='emergency-section'>
        <p>Matthew Adelhardt, CTO</p>
        <p>O-(914) 921 5297</p>
        <p>C-(914) 310 0716</p>
        <p>madelhardt@gabelli.com</p>
      </div>
    </div>
  )

}

export default Emergency
