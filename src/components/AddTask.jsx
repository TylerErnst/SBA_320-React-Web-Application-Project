import { useState } from "react";

function AddTask(props){
    const [task,setTask] = useState('')

    return (
        <>
            <input type="text" onChange={(event) => setTask(event.target.value)} />
            <button onClick={() => {props.dispatch({ type: 'add_task', payload: {userId: 1, id: 25, title: task, completed: false} })}}>Add</button>
      </>
    )
}

export default AddTask;