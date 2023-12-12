// Action Types
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const IS_COMPLETED = 'IS_COMPLETED';

// Action Creators
export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: {
      text,
      completed: false,
    },
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const updateTodo = todo => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};

export const isCompleted = id => {
  return {
    type: IS_COMPLETED,
    payload: id,
  };
};
