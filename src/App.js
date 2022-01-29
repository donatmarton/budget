import React from 'react';
import {nanoid} from 'nanoid'
import {categoryData, spendingsData} from './data'
import DataContext from './DataContext';
import { Outlet } from 'react-router-dom';
import Navbar from './components/nav/Navbar';

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
        <Navbar />
        <Outlet />
      </div>
    </DataContext.Provider>
  );
}

export default App;
