import React from "react";
import DataContext from "./DataContext";


function useFilteredExpenses(beginDate, endDate) {
  const { expenses } = React.useContext(DataContext);
  const [filteredExpenses, setFilteredExpenses] = React.useState([]);

  React.useEffect(() => {
    const filteredList = expenses.filter( expense => {
      return expense.date >= beginDate && expense.date <= endDate;
    });
    setFilteredExpenses(filteredList);
  }, [expenses, beginDate, endDate])

  return filteredExpenses;
}

export default useFilteredExpenses;
