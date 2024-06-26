import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TaskDetails.css';

const TaskDetails = ({ task, onSave, onDelete }) => {
  const [name, setName] = useState(task ? task.name : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [showListDropdown, setShowListDropdown] = useState(false);

  if (!task) {
    return <div className="task-details">Select a task to see details</div>;
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSaveChanges = () => {
    const updatedTask = { ...task, name, description };
    onSave(updatedTask);
  };

  const handleDeleteTask = () => {
    onDelete(task.id);
  };

  const toggleListDropdown = () => {
    setShowListDropdown(!showListDropdown);
  };

  const selectList = (selectedList) => {
    console.log('Selected List:', selectedList);
    setShowListDropdown(false);
  };

  return (
    <div className="task-details">
      <h2>Task Details</h2>
      <div className="task-detail-item">
        <textarea
          placeholder="Renew driver's license"
          value={name}
          onChange={handleNameChange}
          rows="1"
          className="task-textarea"
        />
      </div>
      <div className="task-detail-item">
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          rows="1"
          className="task-textarea"
          placeholder="Description"
        />
      </div>
      <div className="task-detail-item">
        <strong className="list-label">List</strong>
        <div className="dropdown-container">
          <div className="dropdown-header" onClick={toggleListDropdown}>
            {task.list}
            <i className={`dropdown-icon ${showListDropdown ? 'open' : ''}`}></i>
          </div>
          {showListDropdown && (
            <ul className="dropdown-options">
              <li onClick={() => selectList('Personal')}>Personal</li>
              <li onClick={() => selectList('Work')}>Work</li>
              <li onClick={() => selectList('Shopping')}>Shopping</li>
            </ul>
          )}
        </div>
      </div>
      <div className="task-detail-item">
        <strong>Due Date</strong>
        <DatePicker
          dateFormat="MM/dd/yyyy"
          placeholderText={task.dueDate || 'No due date'}
          className="task-datepicker"
        />
      </div>
      <div className="task-detail-item">
        <strong>Tags</strong>
        <ul className="tags-container">
          <li className="tag" style={{ backgroundColor: '#cfe4f8', padding: '5px 10px', borderRadius: '4px' }}>
            Tag 1
          </li>
          <li className="tag" style={{ backgroundColor: '#f8d7da', padding: '5px 10px', borderRadius: '4px' }}>
            Tag 2
          </li>
          <li className="tag add-tag">
            <FontAwesomeIcon icon={faPlus} /> Add Tag
          </li>
        </ul>
      </div>
      <div className="task-detail-item">
        <h3>Subtasks:</h3>
        <button className="add-button">
          <FontAwesomeIcon icon={faPlus} /> Add New Task
        </button>
        <span className="no-subtasks">{task.subtasks.length === 0 && 'No subtasks'}</span>
        {task.subtasks.length ? (
          <ul className="subtasks-list">
            {task.subtasks.map((subtask, index) => (
              <li key={index} className="subtask-item">
                {subtask}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="task-buttons">
        <button className="task-button delete-button" onClick={handleDeleteTask}>
          Delete Task
        </button>
        <button className="task-button save-button" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
