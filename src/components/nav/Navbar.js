import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Navbar</h2>
      <Link to="/">Overview</Link> |{" "}
      <Link to="expenses/new">New Expense</Link> |{" "}
      <Link to="expenses">Expenses</Link> |{" "}
      <Link to="categories">Categories</Link>
    </nav>
  )
}

export default Navbar;
