import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Todo, TodoListType } from "../../../../typings";

// const fetchTodos = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/",{

//   });
//   const todos: Todo[] = await res.json();
//   // const todos = data.splice
//   return todos;
// };

function TodosList({myTodo}: any) {
  console.log("test");
  
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
