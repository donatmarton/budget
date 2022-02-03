import React from "react";
import './Expense.css'

const Expense = (props) => {
  const {amount, name, category, date} = props;
  return (
    <li className="expense">
      <span>€ {amount}</span>
      <span>{name}</span>
      <span>{category}</span>
      <span>{date}</span>
    </li>
  )
}

export default Expense;
