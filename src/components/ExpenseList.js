import React from "react";
import DataContext from "../DataContext";
import Expense from "./Expense";
import "./ExpenseList.css"

const ExpenseList = () => {
  const { expenses, getCategoryNameFromId } = React.useContext(DataContext);
  const expenseItems = expenses.map( expense => {
    const categoryName = getCategoryNameFromId(expense.categoryId);
    return (
      <Expense 
        key={expense.id}
        amount={expense.amount}
        name={expense.name}
        category={categoryName}
        date={expense.date}
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
