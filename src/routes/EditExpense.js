import React from "react";
import DataContext from "../DataContext";
import { useNavigate, useParams } from "react-router-dom";
import ExpenseForm from "../components/ExpenseForm";


const EditExpense = () => {
  const { expenses, updateExpense } = React.useContext(DataContext);
  const { expenseId } = useParams();

  const navivate = useNavigate();

  const handleCancel = () => {
    navivate("/expenses");
  }

  const handleSubmit = (expenseData) => {
    updateExpense({
      ...expenseData,
      id: expenseId,
    });
    navivate("/expenses");
  }

  const editedExpense = expenses.find( expense => expense.id === expenseId )

  return (
    <main className="main-container">
      <h2>Edit expense</h2>
      <ExpenseForm 
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        populateData={editedExpense}
      />
    </main>
  )
}

export default EditExpense;
