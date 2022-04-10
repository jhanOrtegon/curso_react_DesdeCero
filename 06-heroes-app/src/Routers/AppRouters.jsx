import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginScreen from '../components/Login/LoginScreen'
import DashboardRouters from './DashboardRouters'

const AppRouters = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<LoginScreen />} exact />
                    <Route path='/*' element={<DashboardRouters />} exact />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouters
