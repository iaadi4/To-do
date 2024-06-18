import { useState } from "react";
import useTodo from "../context/todoContext";
import { MdDelete } from "react-icons/md";


function TodoItem({ todo }) {

    const [newTodo, setNewTodo] = useState(todo.todo);
    const { deleteTodo, updateTodo, toggleComplete } = useTodo(); 

    const deleteTodos = () => {
        deleteTodo(todo.id);
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    }
    
    return (
        <div
            className={`flex mt-2 w-full justify-center`}
        >
            <input
                type="checkbox"
                className='h-5 w-5 mr-4 text-customBlue'
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`bg-customWhite w-2/3 sm:w-1/2 tex-xl outline-none ${todo.completed ? 'line-through': ''}`}
                value={newTodo}
                readOnly={todo.completed}
                onChange={(e) => !todo.completed ? setNewTodo(e.target.value): todo.todo}
            />

            {/* To-do delete button */}
            <button
                className=""
                onClick={deleteTodos}
            >
                <MdDelete  className="h-6 w-6 text-customBlue"/>
            </button>
        </div>
    )
}

export default TodoItem;
