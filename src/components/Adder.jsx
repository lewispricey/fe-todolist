import {useState} from 'react'
const Adder = ({setTasks}) => {
    const [newTask, setNewTask] = useState('')
    
    
    const handleChange = (event) => {
        setNewTask(event.target.value)
    }
    
    const handleClick = (event) => {
        event.preventDefault()
        console.log(newTask)
        setTasks((tasks) => [...tasks, {task: newTask, done: false}])
        setNewTask("")
    }

    return (
        <form onSubmit={handleClick} className='btm-left'>
        <label htmlFor="task-box">Use the box below to add your new task:</label>
        <br></br>
        <input className="txt-box" id="task-box" type="text" onChange={handleChange} value={newTask}/>
        <button className="add-btn" type="submit">Add</button>
        </form>
    )
}

export default Adder