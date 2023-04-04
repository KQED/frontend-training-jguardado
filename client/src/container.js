
import { connect } from 'react-redux'
import { Component } from './component'

const mapStateToProps = state => {
  return {
    count: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () => dispatch({ type: 'INCREMENT', payload: 'Value of state increment by 1' }),
    handleDecrement: () => dispatch({ type: 'DECREMENT', payload: 'Value of state decrement by 1' })
  }
}
export const Container = connect(mapStateToProps, mapDispatchToProps)(Component)
