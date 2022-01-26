import React from "react";
import Expense from "./Expense";
import "./ExpenseList.css"

const ExpenseList = (props) => {
  const expenseItems = props.expenses.map( expense => {
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
