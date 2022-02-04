import React from 'react';
import {nanoid} from 'nanoid'
import DataContext from './DataContext';
import { Outlet } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import { defaultCategories } from "./data"
import './App.css'


function App() {
  const [categories, setCategories] = React.useState([]);
  const [expenses, setExpenses] = React.useState([]);

  React.useEffect(() => {
    const storedCategories = window.localStorage.getItem('categories');
    const parsedCategories = JSON.parse(storedCategories)
    if (parsedCategories) {
      setCategories(parsedCategories);
    } else {
      defaultCategories.forEach( category => addCategory(category))
    }
  }, [])
  React.useEffect(() => {
    window.localStorage.setItem('categories' ,JSON.stringify(categories))
  }, [categories])
  
  React.useEffect(() => {
    const storedExpenses = window.localStorage.getItem('expenses');
    const parsedExpenses = JSON.parse(storedExpenses)
    if (parsedExpenses) {
      const convertedData = parsedExpenses.map( spending => {
        return {
          ...spending,
          date: new Date(spending.date),
        }
      })
      setExpenses(convertedData);
    } else {
      console.log("no expenses")
    }
  }, [])
  React.useEffect(() => {
    window.localStorage.setItem('expenses' ,JSON.stringify(expenses))
  }, [expenses])

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
