import React from "react";
import Button from "./Button";

const TodoCard = ({
  content,
  allTodos,
  setAllTodos,
  setInputVal,
  setEditId,
  handleTaskComplete,
}) => {
  const { id, inputVal } = content;

  function handleDelete(id) {
    let deletedTodos = allTodos.filter((item) => item.id !== id);
    setAllTodos([...deletedTodos]);
  }

  function handleEdit(id) {
    let editTodos = allTodos.find((item) => item.id === id);
    setInputVal([editTodos.inputVal]);
    setEditId(id);
  }

  return (
    <div
      className={`bg-gradient-to-r from-emerald-700 to-green-400 text-white w-60 py-4 px-2 space-y-4`}
    >
      <div>
        <h1
          className={`${
            content.isCompleted ? "line-through" : ""
          } text-white font-semibold`}
        >
          {inputVal}
        </h1>
      </div>
      <div className="flex flex-wrap gap-4 justify-end">
        <Button onClick={() => handleEdit(id)}> ✏️ </Button>
        <Button onClick={() => handleDelete(id)}> ❌ </Button>
        <Button onClick={() => handleTaskComplete(id)}> ✔️ </Button>
      </div>
    </div>
  );
};

export default TodoCard;