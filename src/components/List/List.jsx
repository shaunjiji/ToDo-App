import React, { useState } from "react";
import "./list.css";

const List = () => {
  const [todoList, setToDoList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(true);

  return (
    <div className="list-container">
      {todoList.length > 0
        ? todoList.map((item) => {
            return <TodoItem key={item.id} todoItem={item} />;
          })
        : null}

      <div className="list-footer">
        <div className="footer-1"> 5 items left</div>
        <div className="footer-2">
          <div id="all">All</div>
          <div id="active">Active</div>
          <div id="completed">Completed</div>
        </div>
        <div className="footer-3">Clear Completed</div>
      </div>
    </div>
  );
};

export default List;
