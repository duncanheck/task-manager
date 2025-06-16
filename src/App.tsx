import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { TaskProvider } from './context/TaskContext';
import './App.css';

const App: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <TaskProvider>
      <div className="app">
        <header className="header">
          <h1>📝 Task Manager</h1>
          {isAuthenticated ? (
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
          ) : (
            <button onClick={() => loginWithRedirect()}>Log In</button>
          )}
        </header>

        {isAuthenticated ? (
          <>
            <TaskForm />
            <TaskList />
          </>
        ) : (
          <p>Please log in to manage your tasks.</p>
        )}
      </div>
    </TaskProvider>
  );
};

export default App;
