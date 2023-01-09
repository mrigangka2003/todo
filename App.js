import Header from "./components/Header";
import Form from "./components/Form";
import {useState} from "react" ;
import TodoList from "./components/TodoList";

<style>
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@1,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@1,800&display=swap');
</style>

function App() {
  const [todo,setTodo] = useState('') ;
  const [todoList,setTodoList] = useState([]);
  return (
    <div className="App">
      <Header></Header>
      <Form
      todo={todo} 
      setTodo={setTodo} 
      todoList={todoList} 
      setTodoList={setTodoList}>  
      </Form>
      <TodoList setTodoList={setTodoList} todoList={todoList}/>
    </div>
  );
}

export default App;
