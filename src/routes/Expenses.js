import React from "react";
import { Outlet } from "react-router-dom";
import DataContext from "../DataContext";
import ExpenseList from "../components/ExpenseList";

const Expenses = () => {
  const { expenses } = React.useContext(DataContext);
  return (
    <div>
      <Outlet />
      <ExpenseList expenses={expenses} />
    </div>
  )
}

export default Expenses;
