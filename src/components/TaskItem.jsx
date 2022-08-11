const TaskItem = ({item}) => {
    return (
        <>
            <ul>
                <li key={item.task}>
                    {item.done ? <p className="done">{item.task}</p> : <p>{item.task}</p>}
                    <button className="list-btn done-btn">✓</button>
                    <button className="list-btn delete-btn">✕</button>
                </li>
            </ul>
        </>

    )
}

export default TaskItem