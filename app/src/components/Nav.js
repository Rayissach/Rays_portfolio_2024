import React from 'react'
import logo from '../images/gif_logo_4.gif'

export const Nav = () => {
    return (
        <header>
            <nav className='w-screen flex items-center justify-center px-4'>
                <div className='logo'>
                    <img src={logo} alt='Rays Logo' className='h-12'/>
                </div>
                <div className='border-2 flex-grow flex justify-center'>
                    <ul className='flex items-center space-x-8 py-3'>
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