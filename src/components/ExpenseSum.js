import React from "react";
import useFilteredExpenses from "../useFilteredExpenses";


const ExpenseSum = ({ beginDate, endDate}) => {
  const [sum, setSum] = React.useState(0);
  const filteredExpenses = useFilteredExpenses(beginDate, endDate);

  React.useEffect(() => {
    const summedAmounts = filteredExpenses.reduce((currentSum, expense) => {
      return currentSum + expense.amount;
    }, 0);
    setSum(summedAmounts)
  }, [filteredExpenses])
  return (
    <span className="total-sum__number">€ {sum.toFixed(2)}</span>
  )
}

export default ExpenseSum;
