import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice';


function AddTodo({button_text, todo_id, handler, defaultTxt}) {

    console.log(defaultTxt);
    
    const [input, setInput] = useState('');
    
    const dispatch = useDispatch();

    const [error, setError] = useState(false);

    // function deftxt(txt){
    //         if (txt !== ''){
    //           return txt
    //         }
    //         else{
    //           return ''
    //         }
    // }

    // useEffect(() => {
    //   if(defaultTxt !== ''){
    //     setInput(defaultTxt)
    //   }
    //   else{
    //     setInput('')
    //   }
    // },[defaultTxt, updhandler])

    useEffect(() => {
      if(button_text === 'Update Todo'){
        setInput(defaultTxt)
      }
      else{
        setInput('')
      }
    },[button_text])

    const addTodohandler = (e) => {
        e.preventDefault()
        // defaultTxt = '';
        if (button_text==='Add Todo'){
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
              dispatch(addTodo(input))
            }
          }
        }
        else {
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
              dispatch(updateTodo({
                id: todo_id, 
                text: input,
              }))
              handler('Add Todo')
            }
        }
      }
      setInput('')
  }
  return (
    <>
    <form onSubmit={addTodohandler} className='flex gap-5 justify-center mt-14'>
        <div className='w-1/3'>
        <input type='text' placeholder='Enter a Todo...' value={input} 
        onChange={(e) =>{setInput(e.target.value)
                          setError(false)
                  } } className='border-2 border-purple-600 w-full p-4 bg-slate-900 text-white' />
        {error &&
        <div>
        <p className='text-red-700'><i>input field is required*</i></p>
        </div>
        }
        </div>
        <button type='submit' className='h-9 bg-purple-500 text-white px-6 rounded'>{button_text}</button>
    </form>
    </>
  )
}

export default AddTodo
