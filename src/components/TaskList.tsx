import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Task } from '../types/Task'; // Import Task from the correct place

const TaskList: React.FC = () => {
  const { tasks, toggleTask, deleteTask, updateTask } = useTaskContext();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleEdit = (task: Task) => {
    setEditingId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description);
  };

  const handleSave = (id: string) => {
    updateTask(id, editTitle, editDescription);
    setEditingId(null);
    setEditTitle('');
    setEditDescription('');
  };

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          {editingId === task.id ? (
            <>
              <input
                value={editTitle}
                onChange={e => setEditTitle(e.target.value)}
                placeholder="Edit title"
              />
              <textarea
                value={editDescription}
                onChange={e => setEditDescription(e.target.value)}
                placeholder="Edit description"
              />
              <button onClick={() => handleSave(task.id)}>Save</button>
            </>
          ) : (
            <>
              <span onClick={() => toggleTask(task.id)}>{task.title}</span>
              <p>{task.description}</p>
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
