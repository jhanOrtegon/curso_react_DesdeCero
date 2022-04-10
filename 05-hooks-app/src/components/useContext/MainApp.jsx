import React, { useState } from 'react'
import { AppRoutes } from './AppRoutes'
import { UserContext } from './UserContext'

const MainApp = () => {

    const [value, setValue] = useState({})

    return (
        <UserContext.Provider value={{ value, setValue }} >
            <AppRoutes />
        </UserContext.Provider>
    )
}

export default MainApp
