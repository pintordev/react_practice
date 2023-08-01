import { useState } from "react";

function Post({ onPost }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    onPost(text);
    setText("");
    e.preventDefault();
  };

  return (
    <>
      <div>To Do Post</div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="write something to do"
        />
        <button>post</button>
      </form>
    </>
  );
}

export default Post;
