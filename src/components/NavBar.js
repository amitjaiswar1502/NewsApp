import React from 'react';

import { Link } from 'react-router-dom'



const NavBar = (props) => {

    const handleHideMenu = () =>{
        document.getElementById('burger').click();
    }


    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid " >
                    <Link className="navbar-brand" to="/">NewsJunk</Link>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode === 'light' ? "Light Mode Enabled" : "Dark Mode Enabled"}`}</label>
                    </div>
                    <button className="navbar-toggler" id='burger' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item"><a className="nav-link" aria-current="page" to="/About">About</a></li> */}

                            <li className="nav-item" onClick={handleHideMenu} ><Link className="nav-link" aria-current="page" to="/Business">Business</Link></li>
                            <li className="nav-item" onClick={handleHideMenu}><Link className="nav-link" aria-current="page" to="/Entertainment">Entertainment</Link></li>
                            {/* <li className="nav-item"><Link className="nav-link" aria-current="page" to="/General">General</Link></li> */}
                            <li className="nav-item" onClick={handleHideMenu}><Link className="nav-link" aria-current="page" to="/Health">Health</Link></li>
                            <li className="nav-item" onClick={handleHideMenu}><Link className="nav-link" aria-current="page" to="/Science">Science</Link></li>
                            <li className="nav-item" onClick={handleHideMenu}><Link className="nav-link" aria-current="page" to="/Sports">Sports</Link></li>
                            <li className="nav-item" onClick={handleHideMenu}><Link className="nav-link" aria-current="page" to="/Technology">Technology</Link></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
