
import React ,{useState} from "react";
import './../styles/App.css';

const App = ()=> {
    let [one , setOne] = useState(true);
    let [two , setTwo] = useState(true);
    let [three , setThree] = useState(true);
  return (
    <div>
      <h1>Parent Component</h1>
      <div>
        <h2>Child Component</h2>
        <ul>
          <li>Learn React
            {one && <button onClick={()=>setOne(false)}>Complete</button>
            }
          </li>
          <li>Build a React app
            {two && <button onClick={()=>setTwo(false)}>Complete</button>
            }
          </li>
          <li>Deploy a React app
            {three && <button onClick={()=>setThree(false)}>Complete</button>
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
