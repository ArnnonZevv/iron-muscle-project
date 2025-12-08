import logo from '../assets/logo.png';

export default function Navbar() {
    return (
        <header className="w-full bg-gray-900 text-white flex items-center justify-between px-6 py-4 shadow-md">
            <div className="flex items-center gap-3">
                <img 
                    src={logo} 
                    alt="Iron Muscle Logo" 
                    className="w-10 h-10 rounded-full object-cover"
                />
            </div>

            <h1 className="text-xl font-semibold tracking-wide">Iron Muscle</h1>

            <nav className="flex items-center gap-6">
                <a href="/dashboard" className="hover:text-yellow-400">Dashboard</a>
                <a href="/classes" className="hover:text-yellow-400">Classes</a>
                <a href="/trainers" className="hover:text-yellow-400">Trainers</a>
                <a href="/membership" className="hover:text-yellow-400">Membership</a>
                <a href="/payments" className="hover:text-yellow-400">Payments</a>
                <a href="/cancellation" className="hover:text-yellow-400">Cancel / Refund</a>
                <a href="/admin" className="hover:text-yellow-400">Admin Panel</a>
                <a href="/settings" className="hover:text-yellow-400">Settings</a>

                <button className="bg-red-500 px-4 py-1 rounded hover:bg-red-600">
                    Logout
                </button>
            </nav>
        </header>
    );
}