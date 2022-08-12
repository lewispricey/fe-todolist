import {useState} from 'react'
import Adder from "./Adder";
import ClearBtn from './ClearBtn';
import DeleteBtn from './DeleteBtn';
// import TaskItem from './TaskItem';

const tempStates = [{task: "this is an example task", done: false}, {task: "this is example of a done task", done: true}, {task: "yep you guessed it more task examples", done: false}]

const TaskList = () => {
    const [tasks, setTasks] = useState(tempStates)
    
    const toggleDone = (index) => {
        const newTaskList = [...tasks]
        newTaskList[index].done ? newTaskList[index].done = false : newTaskList[index].done = true
        setTasks(newTaskList)
    }

    const TaskItem = ({item, index}) => {
        return (
            <section className='btm-right'>
                    <li key={item.task} className='task-container'>     
                        {item.done? 
                        <button onClick={() => toggleDone(index)} className="list-btn done-btn--active">✓</button> 
                        :
                        <button onClick={() => toggleDone(index)} className="list-btn done-btn--inactive">✓</button>
                        }           
                        <DeleteBtn setTask={setTasks} currentTask={item.task}/>
                        {item.done ? <p className="done">{item.task}</p> : <p>{item.task}</p>}
                    </li>
            </section>
        )
    }
    
    return(
        <>
            <Adder setTasks={setTasks}/>
            <ul>{tasks.map((task, index) => <TaskItem item={task} index={index}/>)}</ul>
            <ClearBtn setTasks={setTasks}/>
        </>
    )
}

export default TaskList