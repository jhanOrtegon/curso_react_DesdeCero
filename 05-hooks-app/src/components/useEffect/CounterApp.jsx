import React from 'react'
import useCounter from '../../hooks/useCounter'

const CounterApp = () => {

    const { handleAdd, handleDefault, handleSuprimir, stateCounter } = useCounter(10)

    return (
        <>
            <h1>Counter App</h1>
            <hr />
            <button
                className='btn btn-dark'
                onClick={handleAdd}
            >
                Sumar +1
            </button>

            <button
                className='btn btn-dark'
                onClick={handleDefault}
            >
                Default
            </button>

            <button
                className='btn btn-dark'
                onClick={handleSuprimir}
            >
                restar -1
            </button>

            <hr />

            <h1>{stateCounter}</h1>

        </>
    )
}

export default CounterApp
