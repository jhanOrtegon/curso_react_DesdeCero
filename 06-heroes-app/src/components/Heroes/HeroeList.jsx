import React from 'react'
import { useMemo } from 'react';
import { getHeroByPublisher } from '../../helpers/getHeroByPublisher';
import HeroCard from './HeroCard';

const HeroeList = ({ publisher }) => {

    const listHeroe = useMemo(() => getHeroByPublisher(publisher), [publisher])

    return (
        <>
            <h1>Heroe List</h1>
            <hr />
            <div className='row'>
                {
                    listHeroe.map((heroe) => (
                        <HeroCard key={heroe.id} {...heroe} />
                    ))
                }

            </div>
        </>
    )
}

export default HeroeList
