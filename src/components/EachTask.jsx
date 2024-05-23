

function ListItem(props){
    
    return(
        <>
            <div>
                <input type="checkbox" name="checkbox" id={props.title} checked={props.completed}/>
                <label htmlFor={props.title}>{props.title}</label>
                <button>Edit</button>    
                <button disabled={props.completed}>Delete</button>
            </div>
            
            
        </>
    )
}

export default ListItem;