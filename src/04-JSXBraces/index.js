import React from 'react';

const num1 = 6;
const num2 = 3;

function App() {
  return (
    <div>
      <h1>JSX Variables</h1>
      <p>num1 + num2 = {num1 + num2}</p>
      <p>num1 / num2 = {num1 / num2}</p>
      <p>
        num1 + num2 * randomNumberBetween 1 & 10. = {num1 + num2 * (Math.floor(Math.random() * 10) + 1)}
      </p>
    </div>
  );
}

export default App;
