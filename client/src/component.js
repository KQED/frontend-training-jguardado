import React from 'react'

export const Component = ({ count, handleIncrement, handleDecrement }) => (
    <div>
    <h1>hello world via React and Redux {count}</h1>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleIncrement}>Increment</button>
    </div>
)
