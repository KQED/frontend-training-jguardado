import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Counter from './component/counter.js'

export const App = () => {
  return (
    <Provider store = { store }>
    <Counter />
    </Provider>
  )
}

export default App
