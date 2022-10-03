import { TodoActionTypes } from '../actions/types/todo';
import {
  AddTodoProps,
  DeleteTodoProps,
  FilterTodoProps,
  ToggleTodoProps,
} from '../actions/creators/todo';

interface PropsTodoById {
  completed: boolean;
  content: string;
}

export interface PropsTodo {
  id?: string;
  content?: string;
  completed?: boolean;
}

export interface PropsState {
  allIds: string[];
  byIds: Record<string, unknown>;
  filterStatus: string;
}

type TodoActions =
  | AddTodoProps
  | DeleteTodoProps
  | FilterTodoProps
  | ToggleTodoProps;

const initialState: PropsState = {
  allIds: [],
  byIds: {},
  filterStatus: 'all',
};

export default function todoReducer(
  state = initialState,
  action: TodoActions
): PropsState {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      const { id, content } = action.payload;

      return {
        ...state,

        allIds: [...state.allIds, id],

        byIds: {
          ...state.byIds,

          [id]: {
            content,
            completed: false,
          },
        },
      };
    }

    case TodoActionTypes.TOGGLE_TODO: {
      const { id } = action.payload;

      const targetTodo = state.byIds[id] as PropsTodoById;
      console.log(targetTodo);

      return {
        ...state,

        byIds: {
          ...state.byIds,
          [id]: {
            ...targetTodo,
            completed: !targetTodo.completed,
          },
        },
      };
    }

    case TodoActionTypes.DELETE_TODO: {
      const { id } = action.payload;

      return {
        ...state,

        allIds: [...state.allIds.filter((todoId) => todoId !== id)],
      };
    }

    case TodoActionTypes.FILTER_TODO: {
      const { filterStatus } = action.payload;

      return {
        ...state,

        filterStatus,
      };
    }

    default:
      return state;
  }
}
