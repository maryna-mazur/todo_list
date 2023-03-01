import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todosReducer';
import selectedTodoReducer from '../features/selectedTodoReducer';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    selectedTodo: selectedTodoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

