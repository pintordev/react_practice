function Post({ onPost }) {
  const onSubmit = (e) => {
    onPost();
    e.preventDefault();
  };

  return (
    <>
      <div>To Do Post</div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="write something to do" />
        <button>post</button>
      </form>
    </>
  );
}

export default Post;
