import React from "react";
import { Todo } from "../../../../../typings";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
    //, { next: { revalidate: 60 } } //cache
  );
  const todo: Todo = await res.json();
  return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);
//   console.log("todo >> ", todo);

  if (!todo.id) return notFound();

  return (
    <>
      <div>ID : {todo.id}</div>
      <div>user ID : {todo.userId}</div>
      <div>title : {todo.title}</div>
      <div>status : {todo.completed}</div>
    </>
  );
}

export default TodoPage;

// export async function generateStaticParams (){
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
//     const todos : Todo[] = await res.json();

//     const trimmedTodos = todos.splice(0,10);

//     return trimmedTodos.map((todo)=>({
//       todoId: todo.id.toString()
//     }))
//   };

//   export default generateStaticParams;
