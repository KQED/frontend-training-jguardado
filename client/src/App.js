import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Counter from './component/counter.js'
import Navbar from './component/nav.js'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from '../routes/home.js'
import Blog from '../routes/blog.js'

export const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/counter" element={<Counter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  )
}

export default App
