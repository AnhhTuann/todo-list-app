import React from "react";
import ReactDOM from "react-dom";
import Style from "../style/mainContent.css";
import MyInfo from "./MyInfo";
import Timer from "./Timer";
import TodoItem from "./TodoItem";
function MainContent() {
  return (
    <div className="body">
      <MyInfo />
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>

      <Timer />
    </div>
  );
}

export default MainContent;
