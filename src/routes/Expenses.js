import React from "react";
import { Outlet } from "react-router-dom";
import DataContext from "../DataContext";
import ExpenseList from "../components/ExpenseList";

const Expenses = () => {
  const { expenses } = React.useContext(DataContext);
  return (
    <div>
      <h2>Expenses</h2>
      <ExpenseList expenses={expenses} />
      <Outlet />
    </div>
  )
}

export default Expenses;
