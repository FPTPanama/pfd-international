import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <nav className='mainHeader'>
    <div className='imgBox'>
      <Image width={70} height={70} alt='logo' src={'/img/home/pfd_logo_color.svg'} />
      <p className="title">PFD</p>
      <p>INTERNATIONAL GROUP</p>
    </div>

    <div className="butBox">
      <button>Mision</button>
      <button>Our products</button>
      <button>Contact us</button>
    </div>
  </nav>
  )
}

export default Header