const Adder = () => {
    return (
        <>
        <form action="">
        <label htmlFor="task-box">Use the box below to add your new task:</label>
        <br></br>
        <input className="txt-box" id="task-box" type="text" />
        <button className="add-btn">Add</button>
        </form>
        </>
    )
}

export default Adder