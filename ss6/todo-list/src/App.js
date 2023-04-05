import logo from "./logo.svg";
import "./App.css";
import TodoListForm from "./component/TodoListForm";
import ListTodo from "./component/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <TodoListForm />
      <ListTodo />
      <ToastContainer />
    </>
  );
}

export default App;
