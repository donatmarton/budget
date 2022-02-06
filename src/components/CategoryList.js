import React from "react";
import DataContext from "../DataContext";
import "./CategoryList.css"


const CategoryList = () => {
  const { categories, updateCategory, deleteCategory } = React.useContext(DataContext)
  const [editedCategory, setEditedCategory] = React.useState(null)
  const categoryItems = categories.map( category => {
    return (
      <li 
        className="list-item list-item--category" 
        key={category.id}
      >
        {editedCategory?.id === category.id ?
          <>
          <input 
            className="input-form__input input-form__input--inline "
            type="text"
            placeholder="Category name"
            onChange={(e) => setEditedCategory(prevState => ({...prevState, name: e.target.value}))}
            value={editedCategory.name}
            required
            autoFocus
          />
          <span 
            title="Save" 
            className="button-icon button-icon--not-hidden"
            onClick={() => {
              updateCategory(category.id, editedCategory.name);
              setEditedCategory(null);
            }}
          >
            Save
          </span>
          <span 
            title="Cancel" 
            className="button-icon button-icon--not-hidden"
            onClick={() => setEditedCategory(null)}
          >
            Cancel
          </span>
          </>
        :
          <>
          <h4 className="category-list__name">{category.name}</h4>
          <span 
            title="Edit" 
            className="button-icon"
            onClick={() => setEditedCategory({id: category.id, name: category.name})}
          >
            ✏️
          </span>
          <span 
            title="Delete" 
            className="button-icon"
            onClick={() => deleteCategory(category.id)}
          >
            ❌
          </span>
          </>
        }
    
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
