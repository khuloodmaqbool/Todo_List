import { FaPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
import { TodoDateTime } from "./TodoDateTime";
import { TodoList } from "./TodoList";

export const Todo = () => {

    const [inpVal, setInpVal] = useState("");

    var data = "TodoData"
    // get localStorage
    const [task, setTask] = useState(() => {
        const saveTasks = localStorage.getItem(data);
        return saveTasks ? JSON.parse(saveTasks) : [];
    });

    // set localStorage
    localStorage.setItem(data, JSON.stringify(task));

    // Handle Input Value
    const handleInpVal = (val) => {
        setInpVal(val);
    };

    // Handle Form Submit
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (inpVal == "") {
            alert("Type Something");
            return;
        }
        if (task.includes(inpVal)) {
            alert("Same task can't be added");
            setInpVal("");
            return;
        };
        setTask((prev) => [...prev, inpVal]);
        setInpVal("");
    };

    // Handle Delete Button
    const handleDelValue = (val) => {
        const filteredArray = task.filter((crntElement) => crntElement !== val);
        setTask(filteredArray);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row justify-around items-center pt-10 h-screen">
                <div>
                    <h1 className="text-7xl font-bold text-white">TO DO LIST</h1>
                    <h1 className="text-5xl font-bold py-6 text-white">WITH LOCAL STORAGE</h1>
                    <h1 className="text-5xl p-3 rounded-md bg-black w-fit text-white font-bold">React and Tailwind</h1>
                </div>
                <div className="bg-white bg-opacity-60 w-2/5 rounded-md p-5 mt-3">
                    <h1 className="text-4xl font-bold">To Do List</h1>
                    <TodoDateTime />
                    <form className="bg-white bg-opacity-60 w-full py-3 rounded-md flex justify-between items-center" onSubmit={handleFormSubmit}>
                        <input className="bg-white bg-opacity-60 ms-2 border-b border-slate-400 rounded-md px-3 py-2 w-full focus:outline-none" type="text" value={inpVal} onChange={(event) => handleInpVal(event.target.value)} />
                        <button className="bg-indigo-500 hover:bg-indigo-600 duration-100 px-4 py-3 rounded-md text-white mx-2"><FaPlus /></button>
                    </form>
                    <ul className="bg-white bg-opacity-60 mt-5 rounded-md w-full">
                        {task.map((crntElement, index) => (
                            <TodoList todoDelete={handleDelValue} key={index} value={crntElement} />
                        ))}
                    </ul>
                    <div className="flex justify-between items-center">
                        <p>You have {task.length} pending tasks</p>
                        <button className="bg-indigo-500 hover:bg-indigo-600 duration-100 text-white px-4 py-3 rounded-md mt-3" onClick={() => setTask([])}>Clear All</button>
                    </div>
                </div>
            </div>
        </>
    );
}
