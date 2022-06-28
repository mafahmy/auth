import React,{ useState, useEffect, useCallback } from "react";
import './App.css';
import UseMemo from "./UseMemo";

const App= () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(0);
  const [num1] = useState(4);
  const [num2] = useState(5);
  const sum = useCallback(() => num1 + num2, [num1, num2])

  useEffect(() => {
    console.log(`New SUM. VALUE: ${sum()}`)
    setResult(sum());
  },[sum])
  return (
    <div className="App">
      <header className="App-header">
        <input 
          type="text"
          placeholder="Input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)} />
        <h1>OUTPUT: {userInput || "**"}</h1>
      </header>

      <UseMemo />
    </div>
  );
}

export default App;
