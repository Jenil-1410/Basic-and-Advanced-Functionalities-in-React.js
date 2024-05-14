import React, { useEffect, useState } from 'react'
import { TodoProvider } from '../features/todoContext/TodoContext'
import TodoForm from '../components/TodoForm'
import TodoItems from '../components/TodoItems'

function TodoUsingContext() {

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos((prev) => [...prev, {id: Date.now(), ...todo }]);
    }

    const updateTodo = (id,text) => {
        setTodos((prev) => (
            prev.map((prevTodo) => (prevTodo.id === id) ? text : prevTodo )
        ))
    }

    const deleteTodo = (id) => {
        var alrt = window.confirm('Do you want to delete the Todo?');
      if(alrt === true){
        setTodos((prev) => (
            prev.filter((prevTodo) => (prevTodo.id !== id))
        ))
      }
      else{
          return
        }
    }

    const checkComplete = (id) => {
        setTodos((prev) => (
            prev.map((prevTodo) => (prevTodo.id === id) ? {...prevTodo, completed: !prevTodo.completed} : prevTodo )
        ))
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"))
        
        if(todos && todos.length>0){
            setTodos(todos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])


  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, checkComplete}}>
        <div className='bg-[#172842] min-h-screen py-8'>
            <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
                <h1 className='text-center font-bold text-4xl mb-8 mt-8'>Manage Todos</h1>
                <div>
                    <TodoForm />
                </div>
                <div className='mt-8'>
                    {todos.map((todo) => (
                        <div className='w-full my-4' key={todo.id}>
                            <TodoItems todo={todo} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </TodoProvider>
  )
}

export default TodoUsingContext
