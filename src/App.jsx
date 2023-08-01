import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Post from "./components/Post";

function App() {
  // logic
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "공부",
      checked: true,
    },
    {
      id: 2,
      text: "운동",
      checked: true,
    },
    {
      id: 3,
      text: "명상",
      checked: false,
    },
  ]);

  // view
  return (
    <div>
      <Post />
      <List todos={todos} />
    </div>
  );
}

export default App;
