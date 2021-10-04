import React from 'react'

export const Victory = ({ points, attempt, fails }) => {
    return (
        <div className="victory">
            <h2 className="victory__title">GANASTE !!!!!</h2>
            <div className="victory__score">
                <h2 className="victory__score__msg">Felicidades!!!</h2>
                <div className="victory__score__group">
                    <h3 className="victory__score__group__data">Has logrado: <span>{points}</span> Puntos </h3>
                    <h3 className="victory__score__group__data">En <span>{attempt}</span> Intentos </h3>
                    <h3 className="victory__score__group__data">Y has tenido: <span>{fails}</span> Fallos </h3>
                </div>

            </div>
        </div>
    )
}
