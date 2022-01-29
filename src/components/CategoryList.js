import React from "react";
import DataContext from "../DataContext";
import CategoryAdder from "./CategoryAdder";

const CategoryList = () => {
  const { categories, addCategory } = React.useContext(DataContext)
  const categoryItems = categories.map( category => {
    return (
      <li key={category.id}>{category.name}</li>
    )
  });

  return (
    <div className="category-list">
      <p>Category List</p>
      <ul>
        {categoryItems}
      </ul>
      <CategoryAdder addCategory={addCategory}/>
    </div>
  )
}

export default CategoryList;
