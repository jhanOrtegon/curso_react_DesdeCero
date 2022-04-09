import React from 'react'

const TodoList = ({ desc, id, done }) => {
    return (
        <>
            <div className='d-flex mb-4 align-items-center w-75 justify-content-between m-auto'>
                <li>{desc}</li>
                <div className="acciones">
                    <button className='btn btn-danger'>eliminar</button>
                    <button className='btn btn-dark'>completar</button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default TodoList
