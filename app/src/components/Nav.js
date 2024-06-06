import React from 'react'
import logo from '../images/ray_gif_logo02.gif'

export const Nav = () => {
    return (
        <nav className='bg-gray-800'>
            <div>
                <div className='items-stretch'>
                    <div className='size-20 bg-gray-800 rflex flex-1'>
                        <img alt='logo' className='bg-gray-800' src={logo} />
                    </div>
                    <ul className='list-none flex space-x-4'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div> 
        </nav>
    )
}