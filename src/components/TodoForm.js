import React, {useState } from 'react'
import { TodoProvider, useTodo } from '../features/todoContext/TodoContext'

function TodoForm() {

    const [input, setInput] = useState('')
    const {addTodo} = useTodo()
    const [error, setError] = useState(false);

    const add = (e) => {
        e.preventDefault()
        if(input ===''){
          setError(true);
          return
        }
        else{
          let inp = input.replace(/\s/g, "");
          if(inp === ""){
            setError(true);
            return
          }
          else{
            addTodo({ text: input, completed: false})
          }
        }
        setInput('')
        // if(!input) return
    }

  return (
    <TodoProvider value={addTodo}>
    <form className='flex' onSubmit={add}>
        <div className='w-full'>
          <input type='text' placeholder='Write Todo...' className='w-full border border-black/10 rounded-l-lg rounded-r-none px-3 outline-none duration-150 bg-white/20 h-9 py-1.5' value={input} 
          onChange={(e) => {setInput(e.target.value)
                            setError(false)
          }}/>
          {error &&
            <div>
            <p className='text-red-700'><i>input field is required*</i></p>
            </div>
          }
        </div>
        <button type='submit' className='rounded-r-lg px-3 bg-green-600 text-white h-9 shrink-0'>Add</button>
    </form>
    </TodoProvider>
  )
}

export default TodoForm
