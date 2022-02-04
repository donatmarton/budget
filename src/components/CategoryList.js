import React from "react";
import DataContext from "../DataContext";
import "./CategoryList.css"


const CategoryList = () => {
  const { categories, deleteCategory } = React.useContext(DataContext)
  const categoryItems = categories.map( category => {
    return (
      <li 
        className="list-item list-item--category" 
        key={category.id}
      >
        <h4 className="category-list__name">{category.name}</h4>
        <span title="Edit" className="button-icon">✏️</span>
        <span 
          title="Delete" 
          className="button-icon"
          onClick={() => deleteCategory(category.id)}
        >
          ❌
        </span>
      </li>
    )
  });

  return (
    categoryItems.length !== 0 ?
      <ul className="list list--category">
        {categoryItems}
      </ul>
      :
      <p>No categories found. Add some.</p>    
  )
}

export default CategoryList;
