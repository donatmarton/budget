import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/">
        <h2>💰 Budget 💰</h2>
      </Link>
      <div className="navbar__menu">
        <Link to="/">Overview</Link>
        <Link to="expenses/new">New Expense</Link>
        <Link to="expenses">Expenses</Link>
        <Link to="categories">Categories</Link>
      </div>
    </nav>
  )
}

export default Navbar;
