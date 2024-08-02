import React, { useEffect, useRef, useState } from 'react';

const WithRef = () => {
  
  const numRef = useRef(0);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // numRef.current = 1;
    setCount((prevCount) => prevCount + 1)
  }

//   useEffect(() => {
//     console.log(numRef.current)
//   })

  return (
    <div className="counter">
          <input type="text" />
          <button onClick={handleClick}>{count}</button>
    </div>
);
}

export default WithRef;
