const TodoList = ({
  todos,
  handleDelete,
  handleDone,
  handleEdit,
  handleUpdate,
}) => {
  // const [text, setText] = useState("");

  function handleCheck(e, id) {
    let type = "done";
    if (!e.target.checked) {
      type = "undone";
    }
    handleDone(id, type);
  }
  return (
    <div>
      <h1>My todos</h1>
      {todos.map((t) => (
        <div key={t.id}>
          {t.isEdit ? (
            <>
              <input
                type="text"
                name="text"
                id=""
                
              />
              <button onClick={() => handleUpdate(t.value)}>Update</button>
            </>
          ) : (
            <>
              <input
                type="checkbox"
                name=""
                id=""
                checked={t.isDone}
                onChange={(e) => handleCheck(e, t.id)}
              />
              {t.text}
              <button onClick={() => handleDelete(t.id)}>Delete</button>
              <button onClick={() => handleEdit(t.id)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
