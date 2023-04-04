import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { Container } from './container'

export const App = () => {
  return (
    <Provider store = { store }>
    <Container />
    </Provider>
  )
}

export default App
