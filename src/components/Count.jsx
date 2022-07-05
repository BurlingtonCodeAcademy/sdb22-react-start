import React, { useState } from "react"
import "./count.css"

const Counter = (props) => {

    const [count, setCount] = useState(0)

    function decrementCount() {
        console.log(count)
        setCount(count - 1)
    }
    function incrementCount() {
        setCount(count + 1)
    }
    
    return (
        <div className="counter-container">x
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default Counter