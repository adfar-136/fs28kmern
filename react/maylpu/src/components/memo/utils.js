import React from 'react'
export function createTodos(){
    const todos = [];
    for(let i=0;i<50;i++){
        todos.push({
            id:i, 
            text:`todo ${i+1}`,
            completed: Math.random()>0.5
        })
    }
    return todos
}
export function filteredTodos(todos, tab) {
    let startTime = performance.now()
    while(performance.now()-startTime < 2000){
     //delay for 500ms
    }
  return todos.filter((item)=>{
    if(tab === "all"){
        return true;
    } else if(tab === "active"){
        return !item.completed;
    } else if(tab === "completed"){
        return item.completed;
    }
  })

}
