import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: 'all', // Current filter ('all', 'completed', 'incomplete')
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
        state.items.push(action.payload);
    },
    toggleComplete: (state, action) => {
        const todo = state.items.find(todo => todo.id === action.payload.id);
        if (todo) {
          todo.completed = !todo.completed;
        }
    },
    deleteTodo: (state, action) => {
        state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
        const index = state.items.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = { ...state.items[index], ...action.payload };
        }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, updateTodo, setFilter } = todosSlice.actions;

// Selector to get the current filter
export const selectFilter = (state) => state.todos.filter;

// Selector to get todo items
export const selectTodos = (state) => state.todos.items;

export default todosSlice.reducer;

