import React from 'react'
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../helpers/getHeroById';

const Hero = () => {
    const { heroId } = useParams();
    const { id, superhero, publisher, alter_ego, first_appearance, characters } = useMemo(() => getHeroById(heroId), [heroId])
    const navigate = useNavigate();
    return (
        <>
            <div className="row mt-5 animate__animated animate__fadeIn">
                <div className="col-12 col-sm-6">
                    <img src={`/assets/${id}.jpg`} className="card-img-top im-respnsive " alt={superhero} height='700' />
                </div>
                <div className="col-12 col-sm-6 d-flex justify-content-center flex-column">
                    <div className="box">
                        <h1>{superhero}</h1>
                        <hr />
                        <h6>{publisher}</h6>
                        <hr />
                        <h6>{alter_ego}</h6>
                        <hr />
                        <h6>{first_appearance}</h6>
                        <hr />
                        <h6>{characters}</h6>
                        <hr />
                        <button className='btn btn-lg btn-dark' onClick={() => navigate(-1)}>Regresar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
