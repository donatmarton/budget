import React from "react";
import DataContext from "../DataContext";
import ExpenseList from "../components/ExpenseList";

const Overview = () => {
  const { expenses } = React.useContext(DataContext);
  return (
    <div>
      <h2>Overview</h2>
      <h3>Expenses</h3>
      <ExpenseList expenses={expenses} />
    </div>
  )
}

export default Overview;
