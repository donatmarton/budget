import React from "react";
import ExpenseSum from "../components/ExpenseSum";
import CategorySums from "../components/CategorySums";
import MonthSelector from "../components/MonthSelector";
import "./Overview.css"


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
      <MonthSelector 
        notifyChange={updateFilter} 
        year={filterSelection.year}
        month={filterSelection.month}
      />
      <div className="snippet total-sum">
        <h3 className="total-sum__title">{"Total Spending: "}
        </h3>
          <ExpenseSum 
            beginDate={beginDate}
            endDate={endDate}
          />
      </div>
      <div className="snippet category-sum">
        <h3 className="category-sum__title">Spending by Categories </h3>
        <CategorySums 
          beginDate={beginDate}
          endDate={endDate}
        />
      </div>
    </main>
  )
}

export default Overview;
