import React, { useState, useEffect, useMemo } from "react";

const fib = (n) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};

const UseMemo = () => {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  const fibNumber = useMemo(() => fib(userNumber),[userNumber]);

  useEffect(() => {
    console.log('New number');
  },[fibNumber])
  return (
    <div className="App">
      <header className="App-header">
        <label>Fibonacci Sequence:</label>
        <input
          type="number"
          value={userNumber}
          placeholder="Position"
          onChange={(e) => setUserNumber(e.target.value)}
        />
        <p>Number: {fibNumber || "--"}</p>
        <br />
        <br />
        <label>Random Input:</label>
        <input
          type="text"
          value={randomInput}
          placeholder="Random Input"
          onChange={(e) => setRandomInput(e.target.value)}
        />
        <p>{randomInput}</p>
      </header>
    </div>
  );
};

export default UseMemo;
