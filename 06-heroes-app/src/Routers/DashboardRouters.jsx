import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DcScreen from '../components/Dc/DcScreen'
import Hero from '../components/Heroes/Hero'
import MarvelScreen from '../components/Marvel/MarvelScreen'
import SearchScreen from '../components/Search/SearchScreen'
import Navbar from '../components/Ui/Navbar'

const DashboardRouters = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='/marvel' element={<MarvelScreen />} exact />
                    <Route path='/dc' element={<DcScreen />} exact />
                    <Route path='/search' element={<SearchScreen />} exact />
                    <Route path='/hero/:heroId' element={<Hero />} exact />
                    <Route path='/' element={<MarvelScreen />} exact />
                </Routes>
            </div>
        </>
    )
}

export default DashboardRouters
