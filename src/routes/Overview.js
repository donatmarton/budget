import React from "react";
import DataContext from "../DataContext";
import ExpenseList from "../components/ExpenseList";
import ExpenseSum from "../components/ExpenseSum";
import MonthSelector from "../components/MonthSelector";


const Overview = () => {
  const { expenses } = React.useContext(DataContext);

  const [filterSelection, setFilterSelection] = React.useState({
    month: 0,
    year: (new Date().getFullYear()),
  })
  const beginDate = new Date(filterSelection.year, filterSelection.month, 1);
  const endDate = new Date(filterSelection.year, filterSelection.month, 31);

  const updateFilter = (label, newValue) => {
    setFilterSelection( prevState => {
      return {
        ...prevState,
        [label]: newValue,
      }
    })
  }
  return (
    <div>
      <h2>Overview</h2>
      <h3>Sum</h3>
      <MonthSelector 
        notifyChange={updateFilter} 
        year={filterSelection.year}
        month={filterSelection.month}
      />
      <ExpenseSum 
        beginDate={beginDate}
        endDate={endDate}
      />
      <h3>Expenses</h3>
      <ExpenseList expenses={expenses} />
    </div>
  )
}

export default Overview;
