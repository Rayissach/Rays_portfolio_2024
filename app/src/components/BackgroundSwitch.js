import React, {useEffect, useState} from 'react'

const gif1 = url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHhqbTA1dGQ4OWl5MXR1cjIzbHJ1ejZsMjZ5d3Yzd2o5bmltZGFxdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BHNfhgU63qrks/giphy.webp')

const gif2 = url('https://giphy.com/embed/3og0IvcD75ygoCTAs0')

export const BackgroundSwitch = ({visible, onClose}) => {
    
    useEffect = (() => {
        if (visivle) {
            const timer = setTimeout(() => {
                onClose()
            }, 3000)
            return () => clearTimeout(timer)
        }
    },[visible, onClose]);

    if (!visible) return null;

    return (
        <div className='background-gif'>
            <img src={gif1}/>
        </div>
    )
}