
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
            <Child1 setOne={setOne} one={one}/>
          </li>
          <li>Build a React app
            <Child2 setTwo={setTwo} two={two}/>
          </li>
          <li>Deploy a React app
            <Child3 setThree={setThree} three={three}/>
          </li>
        </ul>
      </div>
    </div>
  )
}

const Child1 = ({one,setOne})=> {
  return (
    <div>
      {  one &&
        <button onClick={()=>setOne(false)}>Complete</button>
      }
    </div>
  )
}
const Child2 = ({two,setTwo})=> {
  return (
    <div>
      {
        two && <button onClick={()=>setTwo(false)}>Complete</button>
      }
    </div>
  )
}
const Child3 = ({three,setThree})=> {
  return (
    <div>
      {
        three && <button onClick={()=>setThree(false)}>Complete</button>
      }
    </div>
  )
}

export default App
