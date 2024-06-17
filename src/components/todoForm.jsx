import { useState } from "react";
import useTodo from "../context/todoContext";


function TodoForm() {

    const [todo, setTodo] = useState([]);

    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if(!todo) 
            return;
        addTodo({todo: todo, completed: false});
    }

    return (
        <form onSubmit={add} className="flex w-full justify-center">
            <input
                className="h-12 sm:w-1/2 w-2/3 outline-none rounded-sm pl-4"
                value={todo}
                placeholder="Write todo..."
                onChange={(e) => setTodo(e.target.value)}
            >
            </input>
        <button type="submit" className=" bg-customBlue text-white px-4 rounded-r-sm hover:bg-customLightBlue">
            Add
        </button>
        </form>
    );
}

export default TodoForm;
