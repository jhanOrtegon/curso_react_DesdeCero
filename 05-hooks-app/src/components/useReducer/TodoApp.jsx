import React, { useReducer } from 'react'
import useForm from '../../hooks/useForm'
import TodoList from './TodoList'
import { todoReducer } from './todoReducer'

const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        desc: 'Aprendiendo React',
        done: false
    }]

    const { handleChange, reset, valuesForm } = useForm({
        inputTodo: ''
    })

    const { inputTodo } = valuesForm

    const [todos, dispatch] = useReducer(todoReducer, initialState)
    console.log(todos);

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


            <ul>
                {
                    todos.map((e) => (
                        <TodoList key={e.id} {...e} />
                    ))

                }
            </ul>
        </>
    )
}

export default TodoApp
