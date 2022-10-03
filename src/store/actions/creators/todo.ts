import { v4 as uuidv4 } from 'uuid';
import { TodoActionTypes } from '../types/todo';

export interface AddTodoProps {
  type: TodoActionTypes.ADD_TODO;
  payload: {
    id: string;
    content: string;
  };
}

export interface ToggleTodoProps {
  type: TodoActionTypes.TOGGLE_TODO;
  payload: {
    id: string;
  };
}

export interface DeleteTodoProps {
  type: TodoActionTypes.DELETE_TODO;
  payload: {
    id: string;
  };
}

export interface FilterTodoProps {
  type: TodoActionTypes.FILTER_TODO;
  payload: {
    filterStatus: string;
  };
}

export const addTodo = (content: string): AddTodoProps => ({
  type: TodoActionTypes.ADD_TODO,
  payload: {
    id: uuidv4(),
    content,
  },
});

export const toggleTodo = (id: string): ToggleTodoProps => ({
  type: TodoActionTypes.TOGGLE_TODO,
  payload: { id },
});

export const deleteTodo = (id: string): DeleteTodoProps => ({
  type: TodoActionTypes.DELETE_TODO,
  payload: { id },
});

export const filterTodo = (filterStatus: string): FilterTodoProps => ({
  type: TodoActionTypes.FILTER_TODO,
  payload: { filterStatus },
});
