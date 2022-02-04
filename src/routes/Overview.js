import React from "react";
import ExpenseSum from "../components/ExpenseSum";
import MonthSelector from "../components/MonthSelector";


const Overview = () => {
  const [filterSelection, setFilterSelection] = React.useState({
    month: (new Date().getMonth()),
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
    <main className="main-container">
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
    </main>
  )
}

export default Overview;
