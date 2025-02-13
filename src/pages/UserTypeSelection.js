import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserTypeSelection = () => {
  const navigate = useNavigate();

  const handleSelection = (userType) => {
    if (userType === 'worker') {
      navigate('/worker-profile-setup');
    } else {
      navigate('/customer-dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Select User Type</h2>
      <div className="flex gap-4">
        <button onClick={() => handleSelection('worker')} className="px-6 py-2 bg-blue-600 text-white rounded-lg">Worker</button>
        <button onClick={() => handleSelection('customer')} className="px-6 py-2 bg-green-600 text-white rounded-lg">Customer</button>
      </div>
    </div>
  );
};

export default UserTypeSelection;