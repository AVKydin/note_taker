import {useEffect, useState} from "react";
import List from "./components/List";
import {v4 as uuidv4} from 'uuid';

function Main(){

    const [tasks, setTasks] = useState(()=>{
        const storedTodos = localStorage.getItem('tasks');
        if(!storedTodos){
            return [];
        } else {
            return JSON.parse(storedTodos)
        }
    });
    const [taskTitle, setTaskTitle] = useState('');

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (e)=>{
        const storedTodos = JSON.parse(localStorage.getItem('tasks'));
        if(e.key === "Enter" && e.target.value !== ''){
            setTasks([...storedTodos,
                {id: uuidv4(),
                 title: taskTitle,
                 status: false}])
            setTaskTitle('')
        }
    }

    const date = new Date().toLocaleDateString();

    return (
        <div className='container'>
            <h1>Note your tasks</h1>
            <span>{date}</span>

            <div className='input-field'>
                 <input type='text'
                 value={taskTitle}
                 onChange={event=>setTaskTitle(event.target.value)}
                 onKeyDown={addTask}/>
                <label>Task name</label>
            </div>

            <List tasks={tasks}/>
        </div>
    )
}

export default Main