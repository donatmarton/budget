import React from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../DataContext";
import { stringifyDate } from "../dates"
import "./NewExpense.css"


const NewExpense = () => {
  const DEFAULT_SELECT = 'default';
  const { categories, addExpense } = React.useContext(DataContext);
  const [expenseData, setExpenseData] = React.useState({
    name: '',
    amount: '',
    categoryId: DEFAULT_SELECT,
    date: stringifyDate(new Date()),
  });
  const navivate = useNavigate();

  const cancel = () => {
    navivate("/expenses");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (expenseData.categoryId === DEFAULT_SELECT) {
      console.log("TODO: error, no cat selected");
      return;
    }
    addExpense(expenseData);
    navivate("/expenses");
  }

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === "amount") {
      value = parseFloat(value);
    }
    setExpenseData( prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="new-expense">
      <h2>NewExpense</h2>
      <form onSubmit={handleSubmit} className="new-expense__form">
        <input 
          type="text"
          placeholder="Expense name"
          onChange={handleChange}
          name="name"
          value={expenseData.name}
          required
        />
        <input 
          type="number"
          placeholder="Amount"
          onChange={handleChange}
          name="amount"
          value={expenseData.amount}
          required
        />
        <select 
          value={expenseData.categoryId}
          onChange={handleChange}
          name="categoryId"
        >
          <option value={DEFAULT_SELECT} disabled>Pick a category</option>
          {categories.map(category => {
            return (
              <option 
                key={category.id} 
                value={category.id}
              >
                {category.name}
              </option>)
          })}
        </select>
        <input 
          type="date"
          onChange={handleChange}
          name="date"
          value={expenseData.date}
          required
        />
        <button type="submit">Save Expense</button>
        <button type="button" onClick={cancel}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default NewExpense;
