import React from "react";
import DataContext from "../DataContext";
import Expense from "./Expense";
import "./ExpenseList.css"

const ExpenseList = ({ expenses }) => {
  const { getCategoryNameFromId } = React.useContext(DataContext);
  const expenseItems = expenses.map( expense => {
    const categoryName = getCategoryNameFromId(expense.categoryId);
    const dateString = expense.date.toLocaleDateString();
    return (
      <Expense
        key={expense.id}
        id={expense.id}
        amount={expense.amount}
        name={expense.name}
        category={categoryName}
        date={dateString}
      />
    )
  })
  return (
    <ul className="list list--expense">
      {expenseItems}
    </ul>
  )
}

export default ExpenseList;
