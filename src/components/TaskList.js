import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import './TaskList.css';

const TaskList = ({ tasks, selectTask, addTask }) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleAddTask = () => {
    if (newTaskName.trim()) {
      addTask(newTaskName);
      setNewTaskName('');
    }
  };

  return (
    <div className="task-list">
      <h2>Today</h2>
      <div className="divider"></div>
      <div className="add-task">
        <button className="add-button" onClick={handleAddTask}>
          <FontAwesomeIcon icon={faPlus} /> Add New Task
        </button>
      </div>
      <div className="divider"></div>
      <ul className="task-list-items">
        {tasks.map((task) => (
          <React.Fragment key={task.id}>
            <li onClick={() => selectTask(task)}>
              <input
                type="checkbox"
                checked={task.completed || false}
                onChange={() => selectTask(task)}
              />
              <span>{task.name}</span>
              <div className="arrow-icon"><FontAwesomeIcon icon={faAngleRight} /></div>
            </li>
            <div className="divider"></div>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
