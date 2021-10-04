import React, { useEffect, useState } from 'react'
import "animate.css"

export const Cards = ({ id, img, name, spinCard, unTurnCards, disabledCards }) => {

    const [turnCard, setTurnCard] = useState( false )
    const [hasEvent, setHasEvent] = useState( true )

    useEffect(() => {
        if ( unTurnCards.includes( id ) ) {
            setTimeout( () => {
                setTurnCard( false )
            }, 1000)
        }
    }, [ unTurnCards ])

    useEffect(() => {
        if ( disabledCards.includes( id ) ){
            setHasEvent(false)
        }
    }, [ disabledCards ])


    const handleClick = () => {
        
        const value = spinCard( id, img, name )
        if ( value !== 0 ) {
            setTurnCard(!turnCard)
            
        }
    }

    return (
        <>
        {
            turnCard 
                ? <img 
                    onClick={hasEvent ? handleClick: null} 
                    className='cards disabled'  
                    src={`./assets/images/${img}`} 
                    alt={ id }
                    id={ id } 
                
                />
                : <img 
                    onClick={hasEvent ? handleClick: null} 
                    className='cards'  
                    src={`./assets/images/back.png`} 
                    alt={ id }
                    id={ id } 
                
                />
        }
        </>
    )
}
