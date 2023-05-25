import React, { useState } from "react";
import "./input.css";

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue !== "") {
      //
    }
    setInputValue("");
  };

  return (
    <div className="input-container">
      <div className="input-icon"></div>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={handleInputValueChange}
          placeholder="Create a new todo..."
        />
      </form>
    </div>
  );
};

export default Input;
