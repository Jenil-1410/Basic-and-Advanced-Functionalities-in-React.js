import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Error from './pages/Error';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
import Product from './pages/Product';
import Todo from './pages/Todo';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TodoUsingContext from './pages/TodoUsingContext';

function App() {
  return (
      <BrowserRouter>
        <h1 className='text-3xl text-center bg-red-600'>Router DOM</h1>
        <nav className='bg-red-400'>
          <ul className='flex mx-1 justify-around'>
            <li className='px-1'><Link className='focus:font-bold' to="/">Home</Link></li>
            <li className='px-1'><Link className='focus:font-bold' to="/todosUsingContext">TodosContext</Link></li>
            <li className='px-1'><Link className='focus:font-bold' to="/todos">Todos</Link></li>
            <li className='px-1'><Link className='focus:font-bold' to="/about">About</Link></li>
            <li className='px-1'><Link className='focus:font-bold' to="/service">Service</Link></li>
            <li className='px-1'><Link className='focus:font-bold' to="/signup">Sign Up</Link></li>
            <li className='px-1'><Link className='focus:font-bold' to="/products">Products</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todosUsingContext' element={<TodoUsingContext />} />
          <Route path='/todos' element={<Provider store={store}><Todo /></Provider>} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<Product />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
