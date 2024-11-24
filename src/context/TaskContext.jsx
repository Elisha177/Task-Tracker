import React, { createContext, useContext, useEffect, useState } from 'react';
import { loadTasks, saveTasks } from '../utils/LocalStorage';

// Create the TaskContext
const TaskContext = createContext();

// Custom hook to use the TaskContext
export const useTaskContext = () => {
  return useContext(TaskContext);
};

// Provider component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage when the app starts
  useEffect(() => {
    const storedTasks = loadTasks();
    if (storedTasks) setTasks(storedTasks);
  }, []);

  // Function to add a task
  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  // Function to update a task
  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
    saveTasks(filteredTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
