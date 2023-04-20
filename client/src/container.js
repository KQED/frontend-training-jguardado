
import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './redux/slice'

const mapStateToProps = state => {
  return {
    count: state.count,
    message: state.payload
  }
}

function mapDispatchToProps (dispatch) {
  return {
    incrementCounter: (message) => dispatch(increment(message)),
    decrementCounter: (message) => dispatch(decrement(message))
  }
}

const Counter = (props) => {
  console.log('props', props)
  return (
    <>
    <div>
     <h1>hello world via React and Redux { props.count }</h1>
    <button onClick={() => props.incrementCounter('Incremented!')}>Increment</button>
    <button onClick={() => props.decrementCounter('Decremented!')}>Decrement</button>
    <h1> { props.message } </h1>
  </div>
  </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
