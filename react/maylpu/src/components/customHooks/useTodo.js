import { useState } from "react";

const useTodo = ()=>{
    const [todos, setTodos] = useState([]); 
    const push =(item)=>{
        // setTodos([...todos, item]);
        let newList = todos.concat(item)
        setTodos(newList);
    }
    const pull=(index)=>{
         const newList = todos.filter((item,i)=>{
            return i !== index
    })
    setTodos(newList)
    }
    return {
        todos,
        push,
        pull
    }
}
export default useTodo