import React, { createContext, useContext, useState } from "react";

export const TodoContext = createContext(null);
const TodoProvider = ({ children }) => {
  const [todoContent, setTodoContent] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "할 일 1",
      content: "할 일 1 내용",
      isDone: false,
    },
    {
      id: 2,
      title: "할 일 2",
      content: "할 일 2 내용",
      isDone: true,
    },
    {
      id: 3,
      title: "할 일 3",
      content: "할 일 3 내용",
      isDone: false,
    },
  ]);
  const [isDone, setIsDone] = useState(false);
  const value = {
    todoContent,
    setTodoContent,
    todoTitle,
    setTodoTitle,
    todoList,
    setTodoList,
    isDone,
    setIsDone,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
