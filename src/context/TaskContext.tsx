import React, { createContext, useContext, useState } from 'react';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, title: string, description: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Sample Task',
      description: 'Sample description',
      completed: false,
    },
  ]);

  const addTask = (task: Task) => setTasks([...tasks, task]);

  const toggleTask = (id: string) =>
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));

  const deleteTask = (id: string) =>
    setTasks(tasks.filter(task => task.id !== id));

  const updateTask = (id: string, title: string, description: string) =>
    setTasks(tasks.map(task => task.id === id ? { ...task, title, description } : task));

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTaskContext must be used inside TaskProvider');
  return context;
};
