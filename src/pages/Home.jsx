import React, { useState } from 'react'
import TaskForm from '../components/tasks/Taskform';
//import TaskFilter from '../components/tasks/TaskFilter';
import TaskList from '../components/tasks/TaskList';

const Home = () => {

    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
        localStorage.setItem('tasks', JSON.stringify([...tasks, task]))
    }

    const updateTask = (updatedTask) => {
        const updatedTasks = tasks.map((task) => task.id === updatedTask.id ? updatedTask : task);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }

    const deleteTask = (id) => {
        const filteredTasks = tasks.filter((task) => task.id !== id)
        setTasks(filteredTasks);
        localStorage.setItem('tasks', JSON.stringify(filteredTasks))
    }
    return (
        <div className='container mx-auto p-4'>
             <TaskForm addTask={addTask} />
             <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
    )
}

export default Home