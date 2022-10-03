import React, { ChangeEvent, useState } from 'react';
import styles from './style.module.css';
import Todo from '../todo';
import { useDispatch, useSelector } from 'react-redux';
import { todosSelector } from '../../store/selectors/todo';
import { filterTodo } from '../../store/actions/creators/todo';
import { PropsTodo } from '../../store/reducers/todo';

const TaskList = () => {
  const todos = useSelector(todosSelector);
  const [filterStatus, setFilterStatus] = useState('all');

  const dispatch = useDispatch();

  const onFilterStatusChange = (e: ChangeEvent) => {
    dispatch(filterTodo((e.target as HTMLSelectElement).value));
    setFilterStatus((e.target as HTMLSelectElement).value);
  };

  const filteredTodos = (filterStatus: string) => {
    if (filterStatus === 'all') {
      return todos;
    }

    if (filterStatus === 'completed') {
      return todos.filter((todo: PropsTodo) => todo.completed);
    }

    if (filterStatus === 'uncompleted') {
      return todos.filter((todo: PropsTodo) => !todo.completed);
    }
  };

  return (
    <section className={styles.wrapper}>
      <select
        className={styles.filter}
        onChange={(e) => onFilterStatusChange(e)}
      >
        <option value='all'>Все</option>
        <option value='completed'>Выполненные</option>
        <option value='uncompleted'>Не выполненные</option>
      </select>
      <ul className={styles.list}>
        {filteredTodos(filterStatus)?.map((todo: PropsTodo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
