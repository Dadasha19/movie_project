import React, { useEffect, useReducer } from "react";
import Timer from './Timer';

export default function App() {
  return (
    <div className="App">
      <Timer/>
    </div>
  );
}

// export default App;

// Book
// function App() {

//   return (
//     <div className="App">
//         <Context>
//           <Books/>
//         </Context>
//     </div>
// );
// }

// import React, {useState} from 'react';
// import Timer from './Timer';

// function App() {

//   const [isTimer, setTimer] = useState(false);

//   return (
//     <div className="App">
//         <button onClick={() => setTimer(!isTimer)}>Toggle clicker</button>
//         {isTimer && <Timer/>}
//     </div>
// );
// }

// export default App;
