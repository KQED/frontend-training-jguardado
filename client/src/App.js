import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { store } from './redux/store'
import Counter from './component/counter.js'
import Navbar from './component/nav.js'
import Home from '../routes/home.js'
import About from '../routes/about.js'
import Contact from '../routes/contact.js'

export const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/counter' element={<Counter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  )
}

export default App
