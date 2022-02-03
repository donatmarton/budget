import React from 'react';
import {nanoid} from 'nanoid'
import {categoryData, spendingsData} from './data'
import DataContext from './DataContext';
import { Outlet } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import { parseDate } from './dates';
import './App.css'


function App() {
  const [categories, setCategories] = React.useState([]);
  const [expenses, setExpenses] = React.useState([]);

  React.useEffect(() => {
    // fetch category data ...
    setCategories(categoryData);
  }, [])
  
  React.useEffect(() => {
    // fetch expenses data ...
    const convertedData = spendingsData.map( spending => {
      return {
        ...spending,
        date: parseDate(spending.date),
      }
    })
    setExpenses(convertedData);
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

  const getCategoryNameFromId = (categoryId) => {
    const foundCategory = categories.find( category => {
      return category.id === categoryId;
    })
    return foundCategory?.name;
  }

  const addExpense = (expenseData) => {
    const { name, amount, categoryId, date } = expenseData;
    const newExpense = {
      name,
      amount,
      categoryId,
      date,
      id: nanoid(),
    }
    setExpenses( prevState => {
      return [
        ...prevState,
        newExpense
      ]
    })
  }

  return (
    <DataContext.Provider
      value={{
        categories, 
        expenses, 
        addCategory,
        getCategoryNameFromId,
        addExpense,
      }}
    >
      <div className="app">
        <Navbar />
        <Outlet />
      </div>
    </DataContext.Provider>
  );
}

export default App;
