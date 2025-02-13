// filepath: /w:/HunarBazaar.in/hunarbazaar/src/pages/Home.js
import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to HunarBazaar</h1>
      <p className="text-gray-600 mb-6">Find and hire skilled local workers easily.</p>
      <div className="flex gap-4">
        <Link to="/register">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">Get Started</button>
        </Link>
        <Link to="/login">
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;