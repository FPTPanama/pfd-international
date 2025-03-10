
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ScrollLink from '../ScrollLink/scroll-link'

const Header = () => {

  return (
    <div className='mainHeader'>
      <div className='imgBox'>
        <Image width={70} height={70} alt='logo' src={'/img/home/pfd_logo_color.svg'} />
        <p className="title">PFD</p>
        <p>INTERNATIONAL GROUP</p>
      </div>

      <div className="butBox">

        <ScrollLink href={'#mision'} offset={200} children={'Mision'}/> 
        <ScrollLink href="#products" offset={200} children={'Products'}/>
        <ScrollLink href={'#contact'} offset={200} children={'Contact'}/> 
      </div>
  </div>
  )
}

export default Header