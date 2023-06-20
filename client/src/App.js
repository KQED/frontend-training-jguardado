import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Counter from './component/counter.js'
import Login from './component/userLogin'

export const App = () => {
  return (
    <Provider store = { store }>
      <Login />
    <Counter /> 
    </Provider>
  )
}

export default App
