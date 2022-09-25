import React, { useState } from 'react';
import styles from './style.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/actions/creators/todo';

const FormToCreate = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(addTodo(value));
    setValue('');
  };
  return (
    <section className={styles.formWrapper}>
      <h1 className={styles.title}>Список дел</h1>
      <form className={styles.newTodoForm}>
        <input
          className={styles.newTodoText}
          type='text'
          value={value}
          onChange={onInputChange}
          minLength={4}
          autoComplete='off'
          placeholder='Напишите задачу'
        />
        <button
          className={styles.createTodoButton}
          onClick={(e) => handleAddTodo(e)}
        ></button>
      </form>
    </section>
  );
};

export default FormToCreate;
