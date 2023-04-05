import React, { useEffect, useState } from "react";
import * as todoListService from "../service/TodoListService";

function ListTodo() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const result = await todoListService.findAll();
      setTodoList(result);
    };
    fetchAPI();
  }, []);
  return (
    <>
      <ul>
        {todoList.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </>
  );
}

export default ListTodo;
