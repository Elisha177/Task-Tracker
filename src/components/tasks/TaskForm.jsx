import React, { useState } from 'react'

const TaskForm = ({ addTask }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [status, setStatus] = useState('pending');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title,
            description,    
            dueDate,
            status,
        }
        addTask(newTask);
        setTitle("");
        setDescription("");
        setDueDate("");
        setStatus("pending");
    }

    return (
        <form onSubmit={handleSubmit} className='bg-white p-4 rounded shadow mb-4'>
            <div className='mb-2'>
                <label className='block text-sm font-medium'>Title</label>
                <input type='text' value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='w-full border rounded p-2' required />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border rounded p-2"
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium">Due Date</label>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full border rounded p-2"
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium">Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full border rounded p-2"
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Add Task
            </button>

        </form>
    )
}

export default TaskForm