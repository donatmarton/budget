import React from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../DataContext";
import { stringifyDate, parseDate } from "../dates"


const NewExpense = () => {
  const DEFAULT_SELECT = 'default';
  const { categories, addExpense } = React.useContext(DataContext);
  const [expenseData, setExpenseData] = React.useState({
    name: '',
    amount: '',
    categoryId: DEFAULT_SELECT,
    date: new Date(),
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
    } else if (name === "date") {
      value = parseDate(value);
    }
    setExpenseData( prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="new-expense">
      <form onSubmit={handleSubmit} className="input-form">
        <input 
          className="input-form__input"
          type="text"
          placeholder="Expense name"
          onChange={handleChange}
          name="name"
          value={expenseData.name}
          required
        />
        <input 
          className="input-form__input"
          type="number"
          placeholder="Amount"
          onChange={handleChange}
          name="amount"
          value={expenseData.amount}
          required
        />
        <select 
          className="input-form__select"
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
          className="input-form__input"
          type="date"
          onChange={handleChange}
          name="date"
          value={stringifyDate(expenseData.date)}
          required
        />
        <div className="input-form__row">
          <button type="submit" className="btn">Save Expense</button>
          <button type="button" onClick={cancel} className="btn btn--inverse">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewExpense;
