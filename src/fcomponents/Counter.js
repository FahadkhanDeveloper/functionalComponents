// useState is use for state  import at in curly braces because it is not default import it is named import
import React, {useState} from 'react'
const Counter = () => {
    // count is variale means state and setCount is function using for change state (count)
    // useState is also a function in which we pass argument to state
    const [count, setCount] = useState(0)
    const plus = () => {
        setCount(count+1)
    }
    const minus = () => {
        setCount(count-1)
    }
    const reset = () => {
         setCount(0)
    }
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter