import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from './UserContext';

export const NavBar = () => {
  
  const { user, setUser } = useContext( UserContext );
  const handleClick = () => {
    setUser({});
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="container">
                <Link className="navbar-brand" to="/">
                {/* <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"> */}
                </Link>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                  <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                  <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
                  <NavLink exact activeClassName="active" className="nav-link" to="/login">Logout</NavLink>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={ handleClick }
                  >
                    <NavLink exact activeClassName="active" className="nav-link" to="/login">Logout</NavLink>
                  </button>
              </div>
            </div>
        </div>
    </nav>
  )
}
