import React from 'react'
import { Todo } from '../../../../typings'

type PageProps = {
    params : {
        todoId: string
    }
}

const fetchTodo = async (todoId : string) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo: Todo = await res.json();
    return todo;
}

async function TodoPage({params : { todoId }} : PageProps) {
    const todo = await fetchTodo(todoId);
    console.log("todo >> ", todo);
    
    return (
        <>
            <div>ID : {todo.id}</div>
            <div>user ID : {todo.userId}</div>
            <div>title : {todo.title}</div>
            <div>status : {todo.completed}</div>
        </>
  )
}

export default TodoPage