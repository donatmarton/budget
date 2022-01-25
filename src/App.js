import React from 'react';
import {nanoid} from 'nanoid'
import CategoryList from './components/CategoryList';
import {categoryData} from './data'

function App() {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    // fetch category data ...
    setCategories(categoryData);
  }, [])
  const addCategory = (categoryName) => {
    const newCategory = {
      id: nanoid(),
      name: categoryName,
    }
    setCategories( prevState => {
      return [
        ...prevState,
        newCategory
      ]
    })
  }

  return (
    <div className="app">
      <p>
        Hello
      </p>
      <CategoryList categories={categories} addCategory={addCategory}/>
    </div>
  );
}

export default App;
