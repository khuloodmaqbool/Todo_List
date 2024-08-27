import { RiDeleteBin5Fill } from "react-icons/ri";
export const TodoList = (props) => {
    return (
        <>
            <div className="flex justify-between items-center py-2">
                <li className="ms-2 border-b border-slate-400 rounded-md  w-full px-3 py-2">{props.value}</li>
                <button className=" px-4 py-3 rounded-md bg-red-600 hover:bg-red-700 duration-100 text-white mx-2 " onClick={() => props.todoDelete(props.value)} ><RiDeleteBin5Fill /></button>
            </div>
        </>
    )
}