import React, { useState } from 'react'

const AddCategory = ({ setCategories }) => {

    const [stateInput, setStateInput] = useState({ inputCategory: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories((e) => [...e, stateInput.inputCategory])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) => setStateInput({ [e.target.name]: e.target.value })}
                type="text" name='inputCategory' />
        </form>
    )
}

export default AddCategory