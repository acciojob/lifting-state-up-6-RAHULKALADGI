
import React ,{useState} from "react";
import './../styles/App.css';

const App = ()=> {
    let [one , setOne] = useState(false);
    let [two , setTwo] = useState(false);
    let [three , setThree] = useState(false);
  return (
    <div>
      <h1>Parent Component</h1>
      <div>
        <h2>Child Component</h2>
        <ul>
          <li>Learn React
            {one || 
              <button onClick={()=>setOne(true)}>Complete</button>
            }
          </li>
          <li>Build a React app
            {two || 
              <button onClick={()=>setTwo(true)}>Complete</button>
            }
          </li>
          <li>Deploy a React app
            {three || 
              <button onClick={()=>setThree(true)}>Complete</button>
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
