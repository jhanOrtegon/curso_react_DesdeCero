import React, { useReducer } from 'react'
import { useEffect } from 'react'
import { AuthContext } from './Auth/authContext'
import { authReducer } from './Auth/authReducer'
import AppRouters from './Routers/AppRouters'

export const App = () => {

    const initialState = () => {
        return JSON.parse(localStorage.getItem('user')) || { logged: false }
    }

    const [user, dispatch] = useReducer(authReducer, {}, initialState)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouters />
        </AuthContext.Provider>
    )
}
