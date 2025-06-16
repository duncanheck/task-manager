import React from 'react';
import { useParams } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';

const TaskDetail: React.FC = () => {
  const { id } = useParams();
  const { tasks } = useTaskContext();
  const task = tasks.find((t) => t.id === id);

  if (!task) return <p>Task not found.</p>;

  return (
    <div className="task-detail">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.completed ? '✅ Done' : '🕒 Pending'}</p>
    </div>
  );
};

export default TaskDetail;
