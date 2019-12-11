const addTodo = todo => {
  const result = {
    type: "todo/add_todo",
    data: todo
  };
  return result;
};

export { addTodo }