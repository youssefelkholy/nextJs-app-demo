"use client"
import { useEffect, useState } from "react";

const Todo = () => {
    const [todo, setTodo] = useState({});
    useEffect(async () => {
        const res = await fetch(
            'https://jsonplaceholder.typicode.com/todos/1',
            {
                next: {
                    revalidate: 60 // number of seconds this request is cached
                }
                // cache: "force-cash", // static side generated
                // cache: "no store", // server side rendering
            }
        );
        const data = await res.json();
        setTodo(data);
    }, []);
    return (
        <div>
            <p>{todo.title}</p>
        </div>
    )
}

export default Todo
