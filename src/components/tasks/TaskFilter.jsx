import React, { useState } from 'react';

const TaskFilter = ({ onFilter }) => {
  const [status, setStatus] = useState('');
  const [sort, setSort] = useState('');

  const handleFilterChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    onFilter({ status: newStatus, sort });
  };

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setSort(newSort);
    onFilter({ status, sort: newSort });
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="flex flex-wrap items-center justify-between">
        <div className="mb-2">
          <label className="block text-sm font-medium">Filter by Status</label>
          <select
            value={status}
            onChange={handleFilterChange}
            className="border rounded p-2 w-full md:w-60"
          >
            <option value="">All</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium">Sort by Due Date</label>
          <select
            value={sort}
            onChange={handleSortChange}
            className="border rounded p-2 w-full md:w-60"
          >
            <option value="">None</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TaskFilter;
