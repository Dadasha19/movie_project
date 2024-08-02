import React, {useState, useEffect} from 'react';
import Timer from './Timer';

function Clicker() {
  
  const [count, setCount] = useState(0);
  const decrement = () => {
      setCount(count -1)
  }
  const increment = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log('Hello', count);
    return() => console.log('Goodbye')
  }, [count]);

  return (
    // <div className="clicker">
    //     <button onClick={decrement}>-</button>
    //     <span>{count}</span>
    //     <button onClick={increment}>+</button>

    //     <div className="counter">
    //       <input type="text" />
    //     </div>
    // </div>
    <Timer/>
);
}

export default Clicker;
