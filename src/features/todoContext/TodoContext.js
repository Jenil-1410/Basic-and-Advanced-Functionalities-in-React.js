import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        text: "Learn React",
        completed: "false",
    }],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, text) => {},
    checkComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider