import { useState } from "react";

export const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = (number) => {
    setCount(count + number);
  };

  const handleDecrement = (number) => {
    const resta = count - number;

    if(resta < 0) return //cumplir con que no baje de 0

    setCount(count - number);
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};