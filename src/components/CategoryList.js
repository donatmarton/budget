import React from "react";
import CategoryAdder from "./CategoryAdder";

const CategoryList = (props) => {
  const categoryItems = props.categories.map( category => {
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
      <CategoryAdder addCategory={props.addCategory}/>
    </div>
  )
}

export default CategoryList;
