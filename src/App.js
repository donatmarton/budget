import React from 'react';
import {nanoid} from 'nanoid'
import CategoryList from './components/CategoryList';
import ExpenseList from './components/ExpenseList';
import {categoryData, spendingsData} from './data'
import DataContext from './DataContext';

function App() {
  const [categories, setCategories] = React.useState([]);
  const [expenses, setExpenses] = React.useState([]);
  React.useEffect(() => {
    // fetch category data ...
    setCategories(categoryData);
  }, [])
  React.useEffect(() => {
    // fetch expenses data ...
    setExpenses(spendingsData);
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
    <DataContext.Provider
      value={{categories, expenses, addCategory}}
    >
      <div className="app">
        <p>
          Hello
        </p>
        <CategoryList />
        <h2>something something</h2>
        <ExpenseList />
      </div>
    </DataContext.Provider>
  );
}

export default App;
