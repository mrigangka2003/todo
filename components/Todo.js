import styles from "../style.module.css" ;

const Todo=({todoItem, todoList,setTodoList})=>{
    const deleteTodo=()=>{
        setTodoList(todoList.filter(item => item.id !== todoItem.id)) ;
         //just keeping the id who's id isnt the same with the current id
    };
    return (
        <div className={styles.todoItem}>
            <h3 className={styles.todoName} >{todoItem.name}</h3>
            <button onClick={deleteTodo} className={styles.deleteBtn} >Done</button>
        </div>
    )
} ;

export default Todo ;