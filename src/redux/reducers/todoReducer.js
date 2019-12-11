const initialState = {
  todos: [
    {
      name: "test",
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  console.log("action :", action);
  console.log("state :", state);
  switch (action.type) {
    case "todo/add_todo":
      const { todos } = state;
      todos.push({ name: action.data, completed: false });
      return {
        ...state,
        todos: todos,
      };

    default:
      return state;
  }
};
