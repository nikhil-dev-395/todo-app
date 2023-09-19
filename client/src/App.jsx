import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./components/Todo";
import UpdateTodo from "./components/UpdateTodo";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/update/:id" element={<UpdateTodo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
