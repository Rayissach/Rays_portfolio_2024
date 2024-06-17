import React from 'react'
import logo from '../images/gif_logo_4.gif'

export const Nav = () => {
    return (
        <header>
            <nav className='w-screen flex items-center justify-center px-4'>
                <div className='logo'>
                    <img src={logo} alt='Rays Logo' className='h-12'/>
                </div>
                <div className='border-2 border-slate-500 flex-grow flex justify-center rounded-full bg-transparent text-xs '>
                    <ul className='flex items-center space-x-8 py-3 px-5'>
                        <li className=' hover:text-base hover:px-0 hover:py-0 '><a className='hover:no-underline' href="#hero">Home</a></li>
                        <li className='hover:text-base hover:px-0 hover:py-0 '><a className='hover:no-underline' href="#about">About</a></li>
                        <li className='hover:text-base hover:px-0 hover:py-0 '><a className='hover:no-underline' href="#projects">Portfolio</a></li>
                        <li className='hover:text-base hover:px-0 hover:py-0 '><a className='hover:no-underline' href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}