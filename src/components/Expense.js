import React from "react";
import './Expense.css'

const Expense = (props) => {
  const {amount, name, category, date} = props;
  return (
    <li className="list-item list-item--expense">
      <span className="expense__datafield">{name}</span>
      <span className="expense__datafield">€ {amount}</span>
      <span className="expense__datafield">{category}</span>
      <span className="expense__datafield">{date}</span>
      <span className="expense__buttonfield">
        <span title="Edit" className="button-icon">✏️</span>
        <span title="Delete" className="button-icon">❌</span>
      </span>
    </li>
  )
}

export default Expense;
