import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import AddTodo from '../components/AddTodo'

function Todo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [editTxt, setEditTxt] = useState()

    const [button_text, setButton_text] = useState('Add Todo')
    const [todo_id, setTodo_id] = useState('')

    function deleteTodo(id){
      var alrt = window.confirm('Do you want to delete the Todo?');
      if(alrt === true){
        dispatch(removeTodo(id))
      }
      else{
        return
      }
    }
  return (
    <div>
      <h1 className='text-center font-bold text-4xl mt-8'>My Todos</h1>  
      <AddTodo button_text={button_text} todo_id={todo_id} handler={setButton_text} defaultTxt={editTxt} updhandler={setEditTxt}/>
      <div className='text-center mt-10'>
      <h2 className='font-bold text-2xl'>Todos List</h2>
      {todos.map((todo) => (
        <li className='w-4/5 flex px-2 justify-between h-10 items-center rounded mx-auto my-1 bg-black text-white' key={todo.id}>
            {todo.text}
            <div className='flex gap-2 justify-between'>
              <button className='bg-red-600 rounded px-2' 
                  onClick={() => {
                    setButton_text('Update Todo');
                    setTodo_id(todo.id);
                    setEditTxt(todo.text);
                    console.log(todo.text)
                  }}>Update</button>
              <button className='bg-red-600 rounded px-2' 
              onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
        </li>
      ))}
      </div>
    </div>
  )
}

export default Todo
