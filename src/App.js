import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { useState } from "react"
import Counter from './components/Count';
import Form from './components/Form';

function App() {
  // Component is a Function that keeps only a part of site display.
  const Button = () => {
    
    return (
      <button className='myBtn'>Click</button>
      // Returns a JSX object
    )
  }

  const [ name, setName ] = useState("h1")

  return (
    <>
      {/* Hello from React */}
      {/* <Button /> */}
      {/* Component Mounting */}
      {/* <Welcome className={name} name={name} />
      <button className="myBtn">App Btn</button> */}
      <Counter />
      <Form />
    </>
  )
}

export default App;
