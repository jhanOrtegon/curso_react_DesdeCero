import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginScreen from '../components/Login/LoginScreen'
import DashboardRouters from './DashboardRouters'
import { PrivateRouters } from './privateRouters'
import { PublicRouters } from './publicRouters'

const AppRouters = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={
                        <PublicRouters>
                            <LoginScreen />
                        </PublicRouters>
                    } exact />
                    <Route path='/*' element={
                        <PrivateRouters>
                            <DashboardRouters />
                        </PrivateRouters>
                    } exact />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouters
