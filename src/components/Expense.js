import React from "react";
import './Expense.css'

const Expense = (props) => {
  const {amount, name, category} = props;
  return (
    <li className="expense">
      <span>€ {amount}</span>
      <span>{name}</span>
      <span>{category}</span>
    </li>
  )
}

export default Expense;
