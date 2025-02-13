import React from 'react';

const WorkerProfileSetup = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Worker Profile Setup</h2>
      {/* Add form fields for worker profile setup */}
      <form>
        <input type="text" placeholder="Full Name" className="mb-4 p-2 border rounded" required />
        <input type="text" placeholder="Skills" className="mb-4 p-2 border rounded" required />
        <input type="text" placeholder="Experience" className="mb-4 p-2 border rounded" required />
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default WorkerProfileSetup;