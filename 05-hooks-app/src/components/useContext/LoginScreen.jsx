import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { UserContext } from './UserContext'

const LoginScreen = () => {
    const navigate = useNavigate()
    const { setValue } = useContext(UserContext);
    const { handleChange, valuesForm } = useForm({ user: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
        setValue(valuesForm)
    }
    return (
        <>
            <h1>LoginScreen</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} className='form-control mb-2' name='user' placeholder='user' />
                <input type="password" onChange={handleChange} className='form-control mb-2' name='password' placeholder='password' />
                <button type='submit' className='btn btn-dark w-100 p-2'>Login</button>
            </form>
        </>
    )
}

export default LoginScreen
