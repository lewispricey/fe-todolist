const ClearBtn = ({setTasks}) => {
    const clearList = (event) => {
        console.log("triggered")
        setTasks([])
    }

    return(
        <div className="top-right clear-btn-container">
            <button onClick={(event) => clearList(event)} className="clear-btn">Clear List</button>
        </div>
    )
}

export default ClearBtn
