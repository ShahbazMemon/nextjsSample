import Image from "next/image";
import styles from "./page.module.css";
import TodosList from "./(users)/todos/TodosList";
import { Suspense } from "react";
import { Todo } from "../../typings";

// const fetchTodos = async () => {

//   const timeOut = Math.floor(Math.random() * 5 + 1) * 1000;
//   await new Promise((resolve)=> setTimeout(resolve, timeOut));
  
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/", {});
//   const todos: Todo[] = await res.json();
//   // const todos = data.splice
//   return todos;
// };

export default async function Home() {

  // const myTodo = await fetchTodos();

  return (
    <>
      {/* <Suspense fallback={<p>Loading the Todos</p>}>
        <h1>Loading Todos</h1>
        <div>
          <TodosList myTodo={myTodo}/>
        </div>
      </Suspense>
      <Suspense fallback={<p>Loading the Shopping Trolly...</p>}>
      <div>
      <TodosList myTodo={myTodo}/>
      </div>
    </Suspense> */}
    <h1>Shopping Trolly...</h1>
    </>
  );
}
