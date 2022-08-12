import {useState} from 'react'
import Adder from "./Adder";
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
            <>
                <li key={item.task} className='row'>
                    <div className='list-col-btns'>
                        <button onClick={() => toggleDone(index)} className="list-btn done-btn">✓</button>
                        <DeleteBtn setTask={setTasks} currentTask={item.task}/>
                    </div>
                    <div className='list-col-txt'>
                        {item.done ? <p className="done">{item.task}</p> : <p>{item.task}</p>}
                    </div>
                </li>
            </>
        )
    }
    
    return(
        <div className='row row-bottom'>
            <div className='column left form'>
                <Adder setTasks={setTasks}/>
            </div>
            <div className='column'>
                <ul>{tasks.map((task, index) => <TaskItem item={task} index={index}/>)}</ul>
            </div>
        </div>
    )
}

export default TaskList