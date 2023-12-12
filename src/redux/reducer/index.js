// Define initial state
const initialState = {
  todos: [],
};

// Define the reducer function
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? action.payload : todo,
        ),
      };
    case 'IS_COMPLETED':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? {...todo, isCompleted: !todo.isCompleted}
            : todo,
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
