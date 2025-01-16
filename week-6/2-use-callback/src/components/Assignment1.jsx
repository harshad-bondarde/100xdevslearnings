import { useCallback } from "react";
import { useEffect } from "react";
import { useState,memo } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const handleIncrement=useCallback(()=> { //by using the usecallback this function does not create again on every rerender
        setCount(count=>count+1)
    },[])

    const handleDecrement=useCallback(()=> {
        setCount(count=>count-1)
    },[])
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};
                                                               //usecallback insures that handleinc handledec are same across the rerenders
const CounterButtons = memo(({ onIncrement, onDecrement }) => ( //rerender this only when props change 
    <div>                                                       
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));