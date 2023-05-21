"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Todo, TodoListType } from "../../../typings";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();
  console.log(todos);
  
  return todos;
};

async function TodosList() {
  console.log("test");
  
  const myTodo = await fetchTodos();
  return (
    <>
      {myTodo?.map((todo: Todo) => {
        return (
          <p key={todo.id}>
            <Link href={`/todos/${todo.id}`}>Todo is : {todo.title}</Link>
          </p>
        );
      })}
    </>
  );
}

export default TodosList;
