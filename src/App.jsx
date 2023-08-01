import { useRef, useState } from "react";
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

  const nextId = useRef(4);

  const onPost = (text) => {
    setTodos(
      todos.concat([
        {
          id: nextId.current,
          text: text,
          checked: false,
        },
      ])
    );
    nextId.current++;
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
