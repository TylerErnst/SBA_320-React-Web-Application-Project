import EachTask from "./EachTask";
import initialState from "../initialState";

function TaskList(props) {

    // let tasks = [];
    // initialState.map((eachTask) => {
    //     tasks.push(<EachTask todo={eachTask.title} key={eachTask.title}/>)
    // })


    return (  
        <>
            {/* {tasks} */}
            {
                props.state.map((eachTask) => (
                    <EachTask title={eachTask.title} key={eachTask.title} completed={eachTask.completed}/>
                ))
            }
        </>
    );
}

export default TaskList;