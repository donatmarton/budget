import React from "react";

const CategoryAdder = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [categoryName, setCategoryName] = React.useState('');

  const close = () => {
    setIsOpen(false);
    setCategoryName('');
  }
  const open = () => {
    setIsOpen(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addCategory(categoryName);
    close();
  }
  const changeCategoryName = (event) => {
    const newCategoryName = event.target.value;
    setCategoryName(newCategoryName);
  }

  return (
    <div>
      {
        isOpen 
        ? 
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              placeholder="Category name"
              onChange={changeCategoryName}
              name="categoryName"
              value={categoryName}
              required
            />
            <button type="submit">Save</button>
            <button type="button" onClick={close}>
              Cancel
            </button>
          </form>
        :
          <button onClick={open}>
            Add Category
          </button>
      }
    </div>
  )
}

export default CategoryAdder;
