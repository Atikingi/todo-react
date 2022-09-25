import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todo';

export const store = configureStore({
  reducer: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    todo: todoReducer,
  },
});
