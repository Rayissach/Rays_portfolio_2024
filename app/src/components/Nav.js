import React from 'react'
import logo from '../images/gif_logo_4.gif'

export const Nav = () => {
    return (
        <header>
      <nav>
        <div className='logo'>
            <img src={logo} alt='Rays Logo'/>
        </div>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
        </header>
    )
}