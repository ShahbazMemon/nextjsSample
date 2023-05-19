'use client'
import React, { useEffect,useState } from 'react'
import Link from 'next/link';
import { Todo, TodoListType } from '../../../typings';

const fetchTodos = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos : Todo[] = await res.json();
    return todos;
};

 async function TodosList() {
    const myTodo = await fetchTodos();
  return (
    <>
    {myTodo?.map((todo: Todo)=>{
        return <p key={todo.id}>Todo is : {todo.title}</p>
    })}
    </>
  )
}

export default TodosList;


export async function generateStaticParams (){
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos : Todo[] = await res.json();

  const trimmedTodos = todos.splice(0,10);

  return trimmedTodos.map((todo)=>{
    todoId: todo.id.toString()
  })
}