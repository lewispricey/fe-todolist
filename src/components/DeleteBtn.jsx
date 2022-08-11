const DeleteBtn = ({setTask, currentTask}) => {
    
        return (
        <button onClick={() => {
            setTask((curTasks) => {
                return curTasks.filter((item) => item.task !== currentTask)
            })
        }} className="list-btn delete-btn">✕</button>
    )
}

export default DeleteBtn