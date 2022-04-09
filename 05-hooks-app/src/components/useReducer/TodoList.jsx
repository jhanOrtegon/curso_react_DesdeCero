import React from 'react'

const TodoList = ({ desc, id, done, handleEliminar, handleCompletar }) => {
    return (
        <>
            <div className='d-flex mb-4 align-items-center w-75 justify-content-between m-auto'>
                <li>{desc} <span className={done ? 'bg-success text-white p-1' : 'bg-danger text-white p-1'}>{done ? 'TERMINADO' : 'POR HACER'}</span></li>
                <div className="acciones">
                    <button onClick={() => handleEliminar(id)} className='btn btn-danger'>eliminar</button>
                    <button
                        className='btn btn-dark'
                        onClick={() => handleCompletar(id)}
                    >
                        {done ? 'Descompletar' : 'Completar'}
                    </button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default TodoList
