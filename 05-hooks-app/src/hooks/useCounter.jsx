import { useState } from 'react'

const useCounter = (initialValue = 10) => {

    const [stateCounter, setStateCounter] = useState(initialValue);

    const handleAdd = () => setStateCounter(stateCounter + 1);
    const handleDefault = () => setStateCounter(initialValue);
    const handleSuprimir = () => setStateCounter(stateCounter - 1);

    return { handleAdd, handleDefault, handleSuprimir, stateCounter }
}

export default useCounter
