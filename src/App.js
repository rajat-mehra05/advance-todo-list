import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Links from "./components/Links";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="bg-gradient-to-r from-pink-200 to-yellow-200 min-h-screen">
      <BrowserRouter>
        <div className="flex justify-end p-4">
          <Links />
        </div>
        <TodoList />
      </BrowserRouter>
    </div>
  );
}

export default App;
