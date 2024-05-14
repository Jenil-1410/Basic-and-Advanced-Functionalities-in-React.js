import React, { useRef, useState } from 'react'
import { useTodo } from '../features/todoContext/TodoContext';
import { MdDelete } from "react-icons/md";

function TodoItems({todo}) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoText, setTodoText] = useState(todo.text);
  const {updateTodo, deleteTodo, checkComplete} = useTodo();
  const [deleteEnable, setDeleteEnable] = useState(true);

  const editTodo = () => {
    if(todoText==='') return
    updateTodo(todo.id, {...todo, text: todoText})
    setIsTodoEditable(false)
    setDeleteEnable(true)
  }

  const checkCompleted = () => {
    checkComplete(todo.id)
  }

  const handleEnter = (e) => {
    if(e.key === "Enter"){
      editTodo();
    }
  };

  const ref = useRef(null)

  return (
    <div className={`flex border items-center border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'}`}>
        <input type='checkbox' className='cursor-pointer w-8' checked={todo.completed} onChange={checkCompleted} disabled={isTodoEditable} />

        <input type='text' className={`border outline-none w-full bg-transparent rounded-lg ${ isTodoEditable ? "border-black/10 px-2" : "border-transparent"} ${todo.completed ? "line-through" : ""}`} value={todoText} onChange={(e) => setTodoText(e.target.value)} readOnly={!isTodoEditable} onKeyDown={handleEnter} ref={ref} />

        <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50' onClick={() => {
            if (todo.completed) return;

            if (isTodoEditable) {
              editTodo();
            }else {
              ref.current.focus();
              setIsTodoEditable((prev) => !prev);
              setDeleteEnable((prev) => !prev);
            }
        }} disabled={todo.completed}>
            {isTodoEditable ? "❗" : "📝"}
        </button>
        
        <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0' disabled={!deleteEnable} onClick={() => deleteTodo(todo.id)}>
        <MdDelete className='text-red-700 text-xl'/>
        </button>
    </div>
  )
}

export default TodoItems
