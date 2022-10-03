import { PropsState } from '../reducers/todo';

interface StoreProps {
  todo: PropsState;
}

const todoSelector = (store: StoreProps) => store.todo;

export const todoIdsSelector = (store: StoreProps) =>
  todoSelector(store)?.allIds || [];

export const todoByIdSelector = (store: StoreProps, id: string) => {
  const todoStore = todoSelector(store);

  if (!todoStore) {
    return {};
  }

  const todoItem = todoStore.byIds[id];

  return {
    ...(todoItem as Record<string, unknown>),
    id,
  };
};

export const todosSelector = (store: StoreProps) =>
  todoIdsSelector(store).map((id: string) => todoByIdSelector(store, id));
