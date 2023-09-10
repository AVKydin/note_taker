import {useState} from "react";
import List from "./components/List";

function Main(){

    const [tasks, setTasks] = useState([{id:0, title:'Clean', status:false}]);

    return (
        <div className='container'>
            <h1>Note your tasks</h1>

            <div className='input-field'>
                 <input type='text'/>
                <label>Task name</label>
            </div>

            <List tasks={tasks}/>
        </div>
    )
}

export default Main