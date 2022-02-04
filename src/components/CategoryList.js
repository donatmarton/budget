import React from "react";
import DataContext from "../DataContext";
import "./CategoryList.css"


const CategoryList = () => {
  const { categories } = React.useContext(DataContext)
  const categoryItems = categories.map( category => {
    return (
      <li 
        className="category-list__list-item" 
        key={category.id}
      >
        <h4 className="category-list__name">{category.name}</h4>
        <span title="Edit" className="category-list__button-icon">✏️</span>
        <span title="Delete" className="category-list__button-icon">❌</span>
      </li>
    )
  });

  return (
    <ul className="category-list">
      {categoryItems}
    </ul>
  )
}

export default CategoryList;
