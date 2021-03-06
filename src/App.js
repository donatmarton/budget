import React from 'react';
import {nanoid} from 'nanoid'
import DataContext from './DataContext';
import { Outlet } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Footer from './components/Footer';
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
  const updateCategory = (categoryId, categoryName) => {
    setCategories( prevState => {
      const newCategories = prevState.map( category => {
        if (category.id === categoryId) {
          return {
            ...category,
            name: categoryName,
          }
        } else {
          return category;
        }
      })
      return newCategories;
    })
  }
  const deleteCategory = (categoryId) => {
    if (expenses.some(expense => expense.categoryId === categoryId)) {
      alert("Can't delete category if it has expenses recorded with it. Remove expenses first.");
    } else {
      setCategories( prevState => {
        return prevState.filter(category => category.id !== categoryId);
      })
    }
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
  const updateExpense = (changedExpenseData) => {
    setExpenses( prevExpenses => {
      const newExpenses = prevExpenses.map( expense => {
        if (expense.id === changedExpenseData.id) {
          return changedExpenseData;
        } else {
          return expense;
        }
      })
      return newExpenses;
    })
  }
  const deleteExpense = (expenseId) => {
    setExpenses( prevExpenses => {
      return prevExpenses.filter(expense => expense.id !== expenseId);
    })
  }

  return (
    <DataContext.Provider
      value={{
        categories, 
        expenses, 
        addCategory,
        updateCategory,
        deleteCategory,
        getCategoryNameFromId,
        addExpense,
        updateExpense,
        deleteExpense,
      }}
    >
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </DataContext.Provider>
  );
}

export default App;
