import React from "react";
import { Link } from "react-router-dom";
import DataContext from "../DataContext";


const CategoryList = () => {
  const { categories } = React.useContext(DataContext)
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
    </div>
  )
}

export default CategoryList;
