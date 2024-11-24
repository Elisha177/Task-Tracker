import React from 'react';

const TaskList = ({ tasks = [], updateTask, deleteTask }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Tasks</h2>
      {(!tasks || tasks.length === 0) ? (
        <p>No tasks available. Add one!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="mb-2">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-sm text-gray-500">{task.description}</p>
                  <p className="text-sm">Due: {task.dueDate}</p>
                  <p className="text-sm">Status: {task.status}</p>
                </div>
                <div>
                  <button
                    onClick={() => updateTask(task)}
                    className="text-blue-500 ml-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 ml-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
