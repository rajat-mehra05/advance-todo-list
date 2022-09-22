import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const [inputVal, setInputVal] = useState("");
  const [editId, setEditId] = useState(0);
  const inputRef = useRef(null);

  const [allTodos, setAllTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);

  function handleSubmit(e) {
    e.preventDefault();

    if (editId) {
      let editedTodo = allTodos.find((item) => item.id === editId);

      const updatedTodos = allTodos.map((item) =>
        item.id === editedTodo.id
          ? (item = { id: item.id, inputVal })
          : { id: item.id, inputVal: item.inputVal }
      );

      setAllTodos([...updatedTodos]);
      setEditId(0);
      setInputVal("");
      return;
    }

    if (!inputVal) alert("Please add input");
    else {
      setAllTodos([{ id: `${inputVal}-${Date.now()}`, inputVal }, ...allTodos]);
      setInputVal("");
      inputRef.current.focus();
    }
  }

  function handleInput(e) {
    setInputVal(e.target.value);
  }

  function handleTaskComplete(id) {
    let myTodos = allTodos.findIndex((item) => item.id === id);

    const completedTodos = [...allTodos];

    completedTodos[myTodos] = {
      ...completedTodos[myTodos],
      isCompleted: true,
    };

    setAllTodos([...completedTodos]);
  }

  return (
    <div className="flex flex-col justify-center space-y-4 items-center py-10">
      <Hero />
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          value={inputVal}
          onChange={handleInput}
          type="text"
          name="input"
          id="input"
          className=" p-2 w-80 text-gray-700 rounded-lg"
          placeholder="Enter your tasks"
        />
      </form>
      <div className="flex">
        {allTodos.length === 0 ? (
          <h1 className="text-2xl font-semibold py-6 text-slate-800 px-2">
            You don't have any todos yet. Create a one.
          </h1>
        ) : (
          <>
            <ul className="flex gap-4 flex-col justify-center py-4">
              {allTodos
                .sort((a, b) =>
                  a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
                )
                .map((todo) => (
                  <li key={todo.id}>
                    <TodoCard
                      content={todo}
                      allTodos={allTodos}
                      setAllTodos={setAllTodos}
                      setInputVal={setInputVal}
                      editId={editId}
                      inputRef={inputRef}
                      setEditId={setEditId}
                      handleTaskComplete={handleTaskComplete}
                      isCompleted={todo.isCompleted}
                    />
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoList;
