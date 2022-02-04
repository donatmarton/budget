import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  const createNavLinkClassName = ({ isActive }) => {
    let className = "nav-link "
    if (isActive) {
      className += "nav-link--active";
    }
    return className;
  }
  return (
    <nav className="navbar">
      <NavLink className="navbar__logo" to="/">
        <h2>💰 Budget 💰</h2>
      </NavLink>
      <div className="navbar__menu">
        <NavLink to="/" className={createNavLinkClassName}>Overview</NavLink>
        <NavLink to="expenses" className={createNavLinkClassName}>Expenses</NavLink>
        <NavLink to="categories" className={createNavLinkClassName}>Categories</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
