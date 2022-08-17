import React from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/auth'

const Header = () => {
  const style = {
    marginRight: '1rem',
    fontWeight: 'bold',
  }
  return (
    <header>
      <h1>Blog App</h1>
      <NavLink style={style} to="/" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink style={style} to="/blogs" activeClassName="active">
        Blogs
      </NavLink>
      <NavLink style={style} to="/create" activeClassName="active">
        Create Blog
      </NavLink>
      <NavLink style={style} to="/contact" activeClassName="active">
        contact
      </NavLink>
      <button onClick={logout}>Logout</button>
    </header>
  )
}

export default Header
