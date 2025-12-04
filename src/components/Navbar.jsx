import { Link } from "react-router-dom";

export default function Navbar({ navigate }) {
    const handleLogout = () => {
        // Clear any stored auth data
        localStorage.removeItem('userToken');
        navigate('/');
    };

    return (
        <nav className="bg-[#1b1b1b] text-white p-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex gap-6">
                    <Link to="/dashboard" className="hover:text-yellow-400 transition">Dashboard</Link>
                    <Link to="/classes" className="hover:text-yellow-400 transition">Classes</Link>
                    <Link to="/trainers" className="hover:text-yellow-400 transition">Trainers</Link>
                    <Link to="/membership" className="hover:text-yellow-400 transition">Membership</Link>
                    <Link to="/payments" className="hover:text-yellow-400 transition">Payments</Link>
                    <Link to="/settings" className="hover:text-yellow-400 transition">Settings</Link>
                </div>
                
                <button 
                    onClick={handleLogout}
                    className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}