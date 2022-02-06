import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Overview from './routes/Overview'
import Categories from './routes/Categories'
import Category from './routes/Category'
import Expenses from './routes/Expenses'
import NewExpense from './routes/NewExpense'
import NotFound from './routes/NotFound'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Overview />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:categoryId" element={<Category />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="expenses/new" element={<NewExpense />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
