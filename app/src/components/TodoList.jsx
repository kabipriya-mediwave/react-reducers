import EditForm from "./TodoEdit";
const TodoList = ({
  todos,
  handleDelete,
  handleEdit,
  handleDone,
  handleUpdate,
}) => {
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

      <div>
        {todos.map((t) => (
          <div key={t.id} className={t.isDone ? "strikethrough" : ""}>
            {t.isEdit ? (
              <EditForm
                text={t.text}
                onSave={(newText) => handleUpdate(t.id, newText)}
              />
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
    </div>
  );
};

export default TodoList;
