import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { v4 as uuidv4 } from 'uuid';

const TaskForm: React.FC = () => {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({
      id: uuidv4(),
      title,
      description,
      completed: false,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
