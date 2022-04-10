import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'

const HomeScreen = () => {

    const { value } = useContext(UserContext);

    return (
        <>
            <h1>HomeScreen</h1>
            <hr />
            <h3>{JSON.stringify(value)}</h3>
        </>
    )
}

export default HomeScreen
