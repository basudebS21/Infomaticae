import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Research content ideas', description: '', list: 'Personal', dueDate: '', tags: [], subtasks: [], completed: false },
    { id: 2, name: 'Create a database of guest authors', description: '', list: 'Work', dueDate: '', tags: [], subtasks: [], completed: false },
    { id: 3, name: 'Renew driver\'s license', description: '', list: 'Personal', dueDate: '2022-03-22', tags: ['Tag 1'], subtasks: [], completed: false },
    { id: 4, name: 'Consult accountant', description: '', list: 'Work', dueDate: '', tags: ['Tag 2'], subtasks: [], completed: false },
    { id: 5, name: 'Print business card', description: '', list: 'Work', dueDate: '', tags: [], subtasks: [], completed: false },
  ]);

  const [selectedTask, setSelectedTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const selectTask = task => {
    setSelectedTask(task);
  };

  const toggleTaskCompleted = (task) => {
    const updatedTasks = tasks.map(t => 
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const addTask = (name) => {
    const newTask = {
      id: tasks.length + 1,
      name,
      description: '',
      list: 'Personal',
      dueDate: '',
      tags: [],
      subtasks: [],
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Sidebar onSearch={handleSearch} />
      <TaskList tasks={filteredTasks} selectTask={selectTask} addTask={addTask} />
      <TaskDetails task={selectedTask} />
    </div>
  );
};

export default App;
