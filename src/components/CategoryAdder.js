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
    isOpen 
    ? 
      <form onSubmit={handleSubmit} className="input-form">
        <input 
          className="input-form__input"
          type="text"
          placeholder="Category name"
          onChange={changeCategoryName}
          name="categoryName"
          value={categoryName}
          required
          autoFocus
        />
        <div className="input-form__row">
          <button className="btn" type="submit">Save</button>
          <button 
            className="btn btn--inverse"
            type="button"
            onClick={close}
          >
            Cancel
          </button>
        </div>
      </form>
    :
      <button className="btn" onClick={open}>
        Add Category
      </button>
  )
}

export default CategoryAdder;
