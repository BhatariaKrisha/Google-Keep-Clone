import React from 'react'
import './index.css'

export default function Header() {
    const logo = (
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="logo"
        />
      );
  return (
    <div className='header' >
      {logo}
      <h3> Keep</h3>
    </div>
  )
}
