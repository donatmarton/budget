import React from "react";
import { Link } from "react-router-dom";
import DataContext from "../DataContext";
import CategoryAdder from "./CategoryAdder";

const CategoryList = () => {
  const { categories, addCategory } = React.useContext(DataContext)
  const categoryItems = categories.map( category => {
    return (
      <Link to={`categories/${category.id}`}>
        <li key={category.id}>{category.name}</li>
      </Link>
    )
  });

  return (
    <div className="category-list">
      <ul>
        {categoryItems}
      </ul>
      <CategoryAdder addCategory={addCategory}/>
    </div>
  )
}

export default CategoryList;
