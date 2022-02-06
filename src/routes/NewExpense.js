import React from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../DataContext";
import ExpenseForm from "../components/ExpenseForm";


const NewExpense = () => {
  const { addExpense } = React.useContext(DataContext);
  
  const navivate = useNavigate();

  const handleCancel = () => {
    navivate("/expenses");
  }

  const handleSubmit = (expenseData) => {
    addExpense(expenseData);
    navivate("/expenses");
  }

  return (
    <main className="main-container">
      <h2>Add new expense</h2>
      <ExpenseForm 
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        populateData={null}
      />
    </main>
  )
}

export default NewExpense;
