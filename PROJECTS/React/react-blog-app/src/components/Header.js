import React from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/auth'

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            Blogs
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/blogs">
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/myblogs">
                  My Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/create">
                  Create Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <button className="float-right btn btn-primary me-5" onClick={logout}>
          Logout
        </button>
      </nav>
    </header>
  )
}

export default Header
