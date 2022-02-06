import React from "react";
import { Link } from "react-router-dom";
import DataContext from "../DataContext";
import ExpenseList from "../components/ExpenseList";

const Expenses = () => {
  const { expenses } = React.useContext(DataContext);
  return (
    <main className="main-container">
      <Link to="/expenses/new">
        <button className="btn">
          Add Expense
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
