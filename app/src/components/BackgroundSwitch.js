import React, {useEffect, useState} from 'react'

export const BackgroundSwitch = ({visible, onClose}) => {

    const [background, setBackground] = useState('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2JoanVzdWt0cXMzbDVwMnB2NzVoZDIyejltOTFiaTF6MGQ0dTRiMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3og0IvcD75ygoCTAs0/giphy.webp')   
    
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                onClose()
            }, 3000)
            return () => clearTimeout(timer)
        }
    },[visible, onClose]);

    if (!visible) return null;

    return (
        <div className=''>
            <img src={background} alt='star-gaze'/>
        </div>
    )
}