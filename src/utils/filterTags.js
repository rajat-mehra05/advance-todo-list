export const filterTags = (todoList, tags) => {
  let allTodos = [...todoList];

  //chekcing tags length
  if (tags.length > 0) {
    return allTodos.filter((item) => {
      for (let i = 0; i < item.tags.length; i++) {
        if (tags.includes(item.tags[i])) return item;
      }
    });
  }
  return allTodos;
};
