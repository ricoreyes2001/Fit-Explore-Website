import React from 'react'

const Navbar = () => {
  return (
    <div class='navbr'>
      <div className='tle'>
        Soulsync Fitness Web
      </div>
        <div class='navbr-links'>
          |<a href="/">Home</a> |
          <a href="/">About Us</a> |
          <a href="/">Programs</a> |
          <a href="/">Contact Us</a>
        </div>
      <div class='lbtn'>
        <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px', }}>
          Login
        </button>
      </div>
    </div>

  )
}

export default Navbar