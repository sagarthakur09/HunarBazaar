// filepath: /w:/HunarBazaar.in/hunarbazaar/src/components/Navbar.js
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">HunarBazaar</Link>
      <div className="flex gap-4">
        <Link to="/register" className="text-blue-600">Register</Link>
        <Link to="/login" className="text-green-600">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;