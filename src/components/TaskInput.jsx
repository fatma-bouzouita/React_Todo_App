import React, { useState } from "react";

const TaskInput = ({ addTask }) =>  {
    const [task, setTask] = useState('')
    console.log(task);

    function handleInputValue(event) {
        setTask(event.target.value);     
    }
    function handleAddTask(event)
    {event.preventDefault();
        addTask(task);
    setTask('');}
    return (
<form className="inputField" onSubmit={handleAddTask}>
    < input type ="text" placeholder="Add a Task" onChange={handleInputValue}/>
    <button> 
        +
    </button>   
</form>
    );
};
export default TaskInput;