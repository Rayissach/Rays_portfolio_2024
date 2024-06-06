import React from 'react'
import logo from '../images/ray_gif_logo02.gif'

export const Nav = () => {
    return (
        <nav className='bg-gray-800'>
            <div>
                <div className='items-stretch'>
                    <div className='size-20'>
                        <img alt='logo' src={logo} />
                    </div>
                    <ul className='list-none'>
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