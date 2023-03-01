import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

interface TodosState {
  todos: Todo[];
  id: number;
}

const initialState: TodosState = {
  todos: [],
  id: 0,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const nextId = (state.todos.length > 0 ) 
      ? state.todos[state.todos.length - 1].id + 1
      : 1;
      state.todos.push({...action.payload, id: nextId });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map(todo => todo.id === action.payload 
        ? { ...todo, completed: !todo.completed}
        : todo)
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
