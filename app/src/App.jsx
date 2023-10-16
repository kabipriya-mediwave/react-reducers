import { useReducer } from "react";

import TodoList from "./components/TodoList";
import TodoAddForm from "./components/TodoAddForm";
// import Update from "./components/Update";

/*
{
  id: 123,
  text: 'Foo',
  isDone: false
}
*/
function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  function todoReducer(todos, action) {
    switch (action.type) {
      case "TODO_ADD": {
        return [
          ...todos,
          {
            id: new Date().getTime(),
            text: action.value,
            isDone: false,
            isEdit: false,
          },
        ];
      }
      case "TODO_DELETE": {
        const filtered = todos.filter((t) => t.id != action.value);
        return [...filtered];
      }
      case "TODO_EDIT": {
        const newTodos = [...todos];
        const idx = newTodos.findIndex((nt) => nt.id === action.value);
        if (idx !== -1) {
          newTodos[idx]["isEdit"] = true;
        }
        return newTodos;
      }
      case "TODO_UPDATE": {
        const newTodos = [...todos];
        const idx = newTodos.findIndex((nt) => nt.id === action.value);
        if (idx !== -1) {
          newTodos[idx]["isEdit"] = false;
        }
        return newTodos;
      }
      case "TODO_DONE": {
        const newTodos = [...todos];
        const idx = newTodos.findIndex((nt) => nt.id === action.value);
        if (idx !== -1) {
          newTodos[idx]["isDone"] = true;
        }
        return newTodos;
      }
      case "TODO_UNDONE": {
        const newTodos = [...todos];
        const idx = newTodos.findIndex((nt) => nt.id === action.value);
        if (idx !== -1) {
          newTodos[idx]["isDone"] = false;
        }
        return newTodos;
      }

      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  }

  function handleAdd(value) {
    dispatch({
      type: "TODO_ADD",
      value: value,
    });
  }
  function handleDelete(id) {
    dispatch({
      type: "TODO_DELETE",
      value: id,
    });
  }
  function handleDone(id, type) {
    if (type == "done") {
      dispatch({
        type: "TODO_DONE",
        value: id,
      });
    } else {
      dispatch({
        type: "TODO_UNDONE",
        value: id,
      });
    }
  }

  function handleEdit(id) {
    dispatch({
      type: "TODO_EDIT",
      value: id,
    });
  }
  function handleUpdate(value) {
    dispatch({
      type: "TODO_UPDATE",
      value: value,
    });
  }

  return (
    <>
      <h1>My todo</h1>

      <TodoAddForm handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleDone={handleDone}
        handleUpdate={handleUpdate}
      />
    </>
  );
}

export default App;
// import React, { useReducer } from 'react';
// import Update from './update';
// const initialState = {
//   todos: [
//     { id: 1, text: 'Todo 1', done: false },
//     { id: 2, text: 'Todo 2', done: true },
//     // Add more todos as needed
//   ],
// };
// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case 'UPDATE_TODO':
//       return {
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo
//         ),
//       };
//     default:
//       return state;
//   }
// };
// const App = () => {
//   const [state, dispatch] = useReducer(todoReducer, initialState);
//   return (
//     <div>
//       <h1>Todo List</h1>
//       <Update todos={state.todos} dispatch={dispatch} />
//     </div>
//   );
// };
// export default App;
