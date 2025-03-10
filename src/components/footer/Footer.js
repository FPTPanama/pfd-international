import React from 'react'
import dayjs from 'dayjs';

const Footer = () => {
  const currentYear = dayjs().year();
  return (
    <div className='footerWrapper'>

      <div className='addBox'>

      <p className='tit'>Our Address</p>
      <p>Calle 55, PH SFC. <br />Oficina 26D Obarrio, <br />Panama City, Panamá</p>
      <p className='email'>info@pfd-international.com</p>

      </div>

      <div className='rigBox'>
        <p><span>{`${currentYear} ©`}</span> All rights reserved.</p>
        <div className='box' />

      </div>
    </div>
  )
}

export default Footer