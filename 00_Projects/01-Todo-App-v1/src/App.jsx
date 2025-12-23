import AppName from "./00_Componenets/AppName";
import AddTodo from "./00_Componenets/AddTodo";
import TodoItem_1 from "./00_Componenets/TodoItem-1";
import TodoItem_2 from "./00_Componenets/TodoItem-2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <AddTodo></AddTodo>
      <div className="items-container">
        <TodoItem_1></TodoItem_1>
        <TodoItem_2></TodoItem_2>
        <TodoItem_2></TodoItem_2>
      </div>
    </center>
  );
}

export default App;
