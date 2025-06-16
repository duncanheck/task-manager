import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { TaskProvider } from '../context/TaskContext';

const Dashboard: React.FC = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div>
        <h2>You must log in to view your tasks.</h2>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    );
  }

  return (
    <TaskProvider>
      <h1>Dashboard</h1>
      <TaskForm />
      <TaskList />
    </TaskProvider>
  );
};

export default Dashboard;
