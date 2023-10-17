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
// import React from "react";
// const TodoList = ({ todos, onDragDrop }) => {
//   // Function to handle drag start
//   const handleDragStart = (e, index) => {
//     e.dataTransfer.setData("text/plain", index);
//   };
//   // Function to handle drag over
//   const handleDragOver = (e, index) => {
//     e.preventDefault();
//   };
//   // Function to handle drop
//   const handleDrop = (e, index) => {
//     e.preventDefault();
//     const dragIndex = e.dataTransfer.getData("text/plain");
//     onDragDrop(parseInt(dragIndex), index);
//   };
//   return (
//     <div className="todo-list">
//       {todos.map((todo, index) => (
//         <div
//           key={todo.id}
//           className="todo"
//           draggable
//           onDragStart={(e) => handleDragStart(e, index)}
//           onDragOver={(e) => handleDragOver(e, index)}
//           onDrop={(e) => handleDrop(e, index)}
//         >
//           {todo.text}
//         </div>
//       ))}
//     </div>
//   );
// };
// export default TodoList;
