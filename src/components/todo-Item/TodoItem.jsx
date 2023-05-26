import React, { useState } from "react";
import "./todo-item.css";

import { ReactComponent as Cross } from "../../assets/icon-cross.svg";
import { ReactComponent as Check } from "../../assets/icon-check.svg";

const TodoItem = () => {
  return (
    <div className="todo-item-container">
      <div className="todo-items"></div>
    </div>
  );
};

export default TodoItem;
