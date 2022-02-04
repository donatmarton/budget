import React from "react";
import DataContext from "../DataContext";
import CategoryList from "../components/CategoryList";
import CategoryAdder from "../components/CategoryAdder";


const Categories = () => {
  const { addCategory } = React.useContext(DataContext)

  return (
    <main className="main-container">
      <CategoryList />
      <CategoryAdder addCategory={addCategory}/>
    </main>
  )
}

export default Categories;
