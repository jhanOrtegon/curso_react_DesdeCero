import React, { useReducer } from 'react'
import { useEffect } from 'react'
import useForm from '../../hooks/useForm'
import TodoList from './TodoList'
import { todoReducer } from './todoReducer'

const TodoApp = () => {

    const initialState = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const { handleChange, reset, valuesForm } = useForm({
        inputTodo: ''
    })

    const { inputTodo } = valuesForm

    const [todos, dispatch] = useReducer(todoReducer, [], initialState)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('se hizo el submit');

        dispatch({
            type: 'add',
            payload: {
                id: new Date().getTime(),
                desc: inputTodo,
                done: false
            }
        })
        reset();
    }

    const handleEliminar = (id) => {
        dispatch({
            type: 'remove',
            payload: {
                id: id
            }
        })
    }

    const handleCompletar = (id) => {
        dispatch({
            type: 'completed',
            payload: {
                id: id
            }
        })
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <>
            <h1 className='text-center'>Todo App</h1>
            <hr />

            <form className='mb-4' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='inputTodo'
                    value={inputTodo}
                    className='form-control w-75 mb-5 p-4 m-auto text-center'
                    onChange={handleChange}
                    placeholder='digita tu todo'
                />
            </form>

            {
                !todos.length &&
                <div className=' w-75 m-auto text-center alert alert-primary'>Digita un tudo</div>
            }

            <ul>
                {
                    todos.map((e) => (
                        <TodoList
                            key={e.id}
                            {...e}
                            handleEliminar={handleEliminar}
                            handleCompletar={handleCompletar}
                        />
                    ))

                }
            </ul>
        </>
    )
}

export default TodoApp
