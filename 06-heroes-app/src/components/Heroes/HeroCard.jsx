import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    const styled = {
        display: 'flex',
        justifyContent: 'center',
        height: '180px',
        flexDirection: 'column',
        alignItems: 'center'
    }

    return (
        <>
            <div className=" col-12 col-sm-6 col-md-4 animate__animated animate__fadeIn">
                <div className='card m-4'>
                    <img src={`/assets/${id}.jpg`} className="card-img-top" alt={superhero} />
                    <div className="card-body" style={styled}>
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        <p className="text-muted">{characters !== alter_ego && characters}</p>
                    </div>
                    <div className="card-footer p-0">
                        <Link to={`/hero/${id}`} className="btn btn-dark w-100 m-0 p-2">Mas Informacion..</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroCard
