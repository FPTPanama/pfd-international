import React from 'react'
import dayjs from 'dayjs';

const Footer = () => {
  const currentYear = dayjs().year();
  return (
    <div id={'contact'} className='footerWrapper'>

      <div className='addBox'>

        <div className='titBox'>
          <p className='tit'>Our Address</p>
          <p>Calle 55, PH SFC. <br />Oficina 26D Obarrio, <br />Panama City, Panamá</p>
          <p className='email'>info@pfd-international.com</p>

        </div>

        <div className='telBox'>
            <p><a href="tel: +58 412 386 2080 ">+58 412 386 2080</a> <span> Venezuela</span></p>
            <p><a href="tel: +50 738 86 501">+50 738 86 501</a> <span> Panamá</span></p>
            <p><a href="tel: +1 919 902 8897">+1 919 902 8897</a> <span> United States</span></p>
            <p><a href="tel: +85 221 58 8688">+85 221 58 8688</a> <span> Hong Kong</span></p>
        </div>


      </div>

      <div className='rigBox'>
        <p><span>{`${currentYear} ©`}</span> All rights reserved.</p>
        <div className='box' />

      </div>
    </div>
  )
}

export default Footer