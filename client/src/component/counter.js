import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement} from '../redux/counterSlice'
import React, { useEffect } from 'react'

const Counter = () => {
  
  const count = useSelector(state => state.countRed.count)
  const message = useSelector(state => state.countRed.message)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('useEffect has been Triggered!')
  }, [count])

  console.log('props: ', count, message)
  return (
      <>
      <div>
       <h1>hello world via React and Redux</h1>
       <h1>Count: { count }</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <h1> { message } </h1>
    </div>
    </>
  )
}

export default Counter
