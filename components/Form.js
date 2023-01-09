import styles from "../style.module.css" ;
import shortid from 'shortid'

const Form =({todo,setTodo,todoList,setTodoList})=>{
    const handleChange=(event)=>{
        setTodo(event.target.value) ;
    };

    const handleSubmit=(event)=>{
        event.preventDefault() ;
        setTodoList([...todoList,{name:todo,id: shortid.generate()}]) //dots are the spread operator, they spread the array elements across
    }

    return(
        <div className={styles.todoForm}>
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={handleChange} className={styles.todoInput} placeholder="add todo item"></input>
                <button type="submit" className={styles.todoBtn}>Add</button>
            </form>
        </div>
    ) ;
} ;

export default Form ;