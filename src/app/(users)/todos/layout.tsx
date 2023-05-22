import { Todo } from "../../../../typings";
import TodosList from "./TodosList";

export const metadata = {
  title: "Todo App",
  description: "Generated by create next app",
};

const fetchTodos = async () => {

  const timeOut = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve)=> setTimeout(resolve, timeOut));
  
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/", {});
  const todos: Todo[] = await res.json();
  // const todos = data.splice
  return todos;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const myTodo = await fetchTodos();
  return (
    <main style={{ display: "flex" }}>
      <div>
        {/* @ts-ignore */}
        <TodosList myTodo={myTodo} />
      </div>
      <div>{children}</div>
    </main>
  );
}
