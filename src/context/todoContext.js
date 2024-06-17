import { createContext, useContext } from "react";


const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: 'some task',
        completed: false
    }],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {}
});

export const TodosProvider = TodoContext.Provider;

export default function useTodo() {
    return useContext(TodoContext);
}