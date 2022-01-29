import React from "react";
import DataContext from "../DataContext";
import Expense from "./Expense";
import "./ExpenseList.css"

const ExpenseList = () => {
  const { expenses } = React.useContext(DataContext);
  const expenseItems = expenses.map( expense => {
    return (
      <Expense 
        key={expense.id}
        amount={expense.amount}
        name={expense.name}
        category={expense.category}
      />
    )
  })
  return (
    <ul className="expense-list">
      {expenseItems}
    </ul>
  )
}

export default ExpenseList;
