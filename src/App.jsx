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

  const onPost = () => {
    setTodos(
      todos.concat({
        id: 4,
        text: "입력테스트",
        checked: false,
      })
    );
  };

  // view
  return (
    <div>
      <Post onPost={onPost} />
      <List todos={todos} />
    </div>
  );
}

export default App;
