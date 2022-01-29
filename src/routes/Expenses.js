import React from "react";
import { Outlet } from "react-router-dom";
import ExpenseList from "../components/ExpenseList";

const Expenses = () => {
  return (
    <div>
      <h2>Expenses</h2>
      <ExpenseList />
      <Outlet />
    </div>
  )
}

export default Expenses;
