import React from 'react'
import dayjs from 'dayjs';

const Footer = () => {
  const currentYear = dayjs().year();
  return (
    <div className='footerWrapper'>
        <p><span>{`${currentYear} ©`}</span> All rights reserved.</p>
    </div>
  )
}

export default Footer