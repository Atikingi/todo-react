import React from 'react';
import styles from './style.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../store/actions/creators/todo';
import { PropsTodo } from '../../store/reducers/todo';

interface Props {
  todo: PropsTodo;
}

const Todo = ({ todo }: Props) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    if (todo.id) {
      dispatch(toggleTodo(todo.id));
    }
  };

  const deleteTodoItem = (e: React.MouseEvent) => {
    e.preventDefault();
    if (todo.id) {
      dispatch(deleteTodo(todo.id));
    }
  };

  return (
    <li className={styles.wrapper}>
      <span
        className={todo.completed ? styles.completed : styles.text}
        onClick={toggleTodoItem}
      >
        {todo.content}
      </span>
      <button
        className={styles.deleteButton}
        onClick={(e) => deleteTodoItem(e)}
      ></button>
    </li>
  );
};

export default Todo;
