import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DcScreen from '../Dc/DcScreen'
import LoginScreen from '../Login/LoginScreen'
import MarvelScreen from '../Marvel/MarvelScreen'
import SearchScreen from '../Search/SearchScreen'
import Navbar from '../Ui/Navbar'

const AppRouters = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path='/login' element={<LoginScreen />} exact />
                        <Route path='/marvel' element={<MarvelScreen />} exact />
                        <Route path='/dc' element={<DcScreen />} exact />
                        <Route path='/search' element={<SearchScreen />} exact />
                        <Route path='/' element={<MarvelScreen />} exact />
                        <Route path='/*' element={<MarvelScreen />} exact />
                    </Routes>
                </div>

            </BrowserRouter>
        </>
    )
}

export default AppRouters
