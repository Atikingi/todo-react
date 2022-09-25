import React from 'react';
import styles from './App.module.css';
import FormToCreate from './components/form-to-create';
import TaskList from './components/todo-list';

function App() {
  return (
    <div className={styles.wrapper}>
      <FormToCreate />
      <TaskList />
    </div>
  );
}

export default App;
