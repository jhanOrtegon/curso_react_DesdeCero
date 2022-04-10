import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login', { replace: true })
    }

    return (
        <div >
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/marvel">Marvel</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/dc">Dc</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/search">Search</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className='text-white'>
                        <span className='mx-4'>jhan carlos</span>
                        <button onClick={handleLogout} className='btn btn-outline-danger'>Logout</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
