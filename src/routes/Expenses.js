import React from "react";
import { Link, Outlet } from "react-router-dom";
import DataContext from "../DataContext";
import ExpenseList from "../components/ExpenseList";

const Expenses = () => {
  const { expenses } = React.useContext(DataContext);
  return (
    <main className="main-container">
      <Outlet />
      <Link to="/expenses/new">
        <button className="btn">
          New Expense
        </button>
      </Link>
      {expenses.length !== 0 ?
        <ExpenseList expenses={expenses} />
        :
        <p>No expenses recorded. Add some.</p>
      }
    </main>
  )
}

export default Expenses;
