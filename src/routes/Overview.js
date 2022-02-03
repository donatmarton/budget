import React from "react";
import DataContext from "../DataContext";
import ExpenseList from "../components/ExpenseList";
import ExpenseSum from "../components/ExpenseSum";


const Overview = () => {
  const { expenses } = React.useContext(DataContext);
  return (
    <div>
      <h2>Overview</h2>
      <h3>Sum</h3>
      <ExpenseSum 
        beginDate={new Date(2022, 0, 1)}
        endDate={new Date(2022, 0, 17)}
      />
      <h3>Expenses</h3>
      <ExpenseList expenses={expenses} />
    </div>
  )
}

export default Overview;
