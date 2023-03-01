import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

type SelectedTodoState = Todo | null;

export const selectedTodoSlice = createSlice({
  name: 'selectedTodo',
  initialState: null as SelectedTodoState,
  reducers: {
    addSelectedTodo: (_, action: PayloadAction<Todo>) => action.payload,
    removeSelectedTodo: () => null,
  },
});

export const {
  addSelectedTodo,
  removeSelectedTodo,
} = selectedTodoSlice.actions;

export default selectedTodoSlice.reducer;