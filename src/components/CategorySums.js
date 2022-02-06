import React from "react";
import DataContext from "../DataContext"
import useFilteredExpenses from "../useFilteredExpenses";


const CategorySums = ({ beginDate, endDate }) => {
  const { categories, getCategoryNameFromId } = React.useContext(DataContext);
  const expenses = useFilteredExpenses(beginDate, endDate);
  const [categorySums, setCategorySums] = React.useState(new Map())

  React.useEffect( () => {
    const newSums = new Map();
    categories.forEach( category => {
      newSums.set(category.id, 0);
    })
    expenses.forEach( expense => {
      const { categoryId, amount } = expense;
      const cumulatedSum = newSums.get(categoryId) + amount;
      newSums.set(categoryId, cumulatedSum);
    })
    setCategorySums(newSums);
  }, [expenses, categories])

  let categorySumElements = [];
  for (const [categoryId, sum] of categorySums) {
    const category = getCategoryNameFromId(categoryId);
    categorySumElements.push(
      <div key={categoryId} className="category-sum__item">
        <h4 className="category-sum__category">{category}</h4>
        <span className="category-sum__number">€ {sum.toFixed(2)}</span>
      </div>
    )
  }

  return (
    <div>
      {categorySumElements}
    </div>
  )
}

export default CategorySums;
