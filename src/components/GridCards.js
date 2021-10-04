import React, { useEffect, useState } from 'react'
import { cards } from '../data/cards'
import { Cards } from './Cards'
import { Victory } from './Victory'

export const GridCards = () => {

    const [deck, setDeck] = useState([])
    const [cardSelectOne, setCardSelectOne] = useState([])
    const [cardSelectTwo, setCardSelectTwo] = useState([])
    const [unTurnCards, setUnTurnCards] = useState([])
    const [disabledCards, setDisabledCards] = useState([])
    const [ points, setPoints ] = useState(0)
    const [ fails, setFails ] = useState(0)
    const [ remains, setRemains ] = useState(20)
    const [ attempt, setAttempt ] = useState(0)




    const cardDeck = [...cards, ...cards]
    const shuffleDeck = cardDeck.sort( () => Math.random( )- 0.8)

    useEffect(() => {
        setDeck( shuffleDeck )
    }, [])

    useEffect( () => {
        checkForMatch()
    }, [cardSelectTwo])


    
    const spinCard = ( id, img, name ) => {

        if ( cardSelectOne.id === id && cardSelectOne.img === img && cardSelectOne.name === name  ) {
            // console.log(cardSelectOne)
            // console.log(cardSelectTwo)
            return 0
        }

        if ( !cardSelectOne.name ){
            setCardSelectOne({ id, img, name })
        } else if ( !cardSelectTwo.name ) {
            setCardSelectTwo({ id, img, name })
        }
        return 1
    }


    const checkForMatch = ( ) => {
        if ( cardSelectOne.name && cardSelectTwo.name) {
            const match = cardSelectOne.name === cardSelectTwo.name
            match ? disableCards() : unTurnCard()
            match ? setPoints( points + 10 ) : setPoints( points - 5 ) 
            match ? setFails( fails ) : setFails( fails + 1 ) 
            match ? setAttempt(attempt + 1) : setAttempt( attempt + 1)
            match ? setRemains( remains - 1 ) : setRemains( remains ) 

        }
    }

    

    const disableCards = ()=> {
        setDisabledCards([ cardSelectOne.id, cardSelectTwo.id ])
        resetCards()
    }



    const unTurnCard = ()=> {
        setUnTurnCards([ cardSelectOne.id, cardSelectTwo.id ])
        resetCards()
    }

    const resetCards = () => {
        setCardSelectOne([])
        setCardSelectTwo([])
    }
    

    const refresh = () => {
        window.location.reload(false);
    }


    return (

        <div className="container">
            <div className="title-group">
                <h1 className='title-group__title'>Emparejados</h1>
                <div className='title-group__game'>
                    <div className='title-group__game__mark'>
                        <p className='title-group__game__mark__text'>
                            <span>Puntos: </span> { points }
                        </p>
                    </div>
                    <div>
                        <p className='title-group__game__mark__text'>
                            <span>Intentos:</span> { attempt }
                        </p>
                    </div>
                    <div>
                        <p className='title-group__game__mark__text'><span>fallos:</span> { fails } </p>
                    </div>
                </div>
            </div>
            <div className="grid-game">

            {
                remains <= 0 
                    ? <Victory 
                        points={points}
                        attempt ={attempt}
                        fails = {fails}
                    /> 
                    : deck.map( (img, i) => (
                        <Cards 
                            key={ i }
                            id= { i }
                            img= { img.img }
                            name= { img.name }
                            spinCard= { spinCard }
                            unTurnCards= { unTurnCards }
                            disabledCards= { disabledCards } 
                        />
                ))
            }

        </div>
            <a href="#" className="btn" onClick={refresh}>Nueva partida</a>
        </div>
    )
}
