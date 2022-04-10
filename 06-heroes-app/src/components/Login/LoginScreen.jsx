import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {

    const initialState = {
        username: '',
        password: ''
    }

    const [valuesForm, setValuesForm] = useState(initialState)
    const [error, setError] = useState({ error: false, message: false })

    const { username, password } = valuesForm
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim().length < 3 || password.trim().length < 3) {
            setError({ error: true, message: 'EL usuario o Contraseña Minimo Debe tener 4 Caracteres' })
            return
        }
        setError({ error: false, message: false });
        navigate('/', { replace: true   })
    }

    const handleChange = (e) => {
        setValuesForm({ ...valuesForm, [e.target.name]: e.target.value });
    }

    return (
        <div className='container w-25 m-auto mt-5'>
            <h1>Login</h1>
            <hr />
            <form onSubmit={handleSubmit} className='mb-4'>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" name='username' placeholder='username' onChange={handleChange} autoComplete='off' />
                </div>

                <div className="input-group mb-3">
                    <input type="password" className="form-control" name='password' placeholder='password' onChange={handleChange} autoComplete='off' />
                </div>

                <button className='btn btn-lg w-100 btn-dark'>Login</button>
            </form>

            {
                error.error &&
                <div className='alert alert-danger text-center'>
                    {error.message}
                </div>
            }
        </div>
    )
}

export default LoginScreen
