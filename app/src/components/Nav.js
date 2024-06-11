import React from 'react'
import logo from '../images/gif_logo_4.gif'

export const Nav = () => {
    return (
        <header>
            <nav className='w-screen'>
                <div className='logo float-left'>
                    <img src={logo} alt='Rays Logo'/>
                </div>
                <div >
                    <ul className='flex items-center justify-center py-3'>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}