import { useState } from "react";

export const TodoDateTime = () => {
    const [dateTime, setDateTime] = useState("");
    setInterval(() => {
        let date = new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        setDateTime(`${date} - ${time}`)
    }, 1000)

    return (
        <h1 className="text-3xl py-3 font-medium">{dateTime}</h1>
    )
}