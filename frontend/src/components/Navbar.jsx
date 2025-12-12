import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    const navItems = [
        { label: "Dashboard", path: "/dashboard" },
        { label: "Classes", path: "/classes" },
        { label: "Trainers", path: "/trainers" },
        { label: "Membership", path: "/membership" },
        { label: "Payments", path: "/payments" },
        { label: "Cancel / Refund", path: "/cancellation" },
        { label: "Admin Panel", path: "/admin" },
        { label: "Settings", path: "/settings" },
    ];

    return (
        <header className="fixed top-0 w-full bg-[#1b1b1b] shadow-md z-50 h-24">
            <div className="relative h-full flex items-center justify-between px-6">

                {/* Logo */}
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                    <div className="bg-[#1b1b1b] rounded-full p-1 shadow-lg w-28 h-28 flex items-center justify-center">
                        <img 
                            src={logo} 
                            alt="Iron Muscle Logo" 
                            className="w-24 h-24 object-cover rounded-full"
                        />
                    </div>
                </div>

                {/* Title */}
                <h1
                className="font-semibold tracking-wide text-white ml-36 overflow-hidden whitespace-nowrap"
                style={{
                    fontSize: '9rem',
                    lineHeight: '6rem', //keeps title inside
                    transform: 'skewX(-0deg)',
                    maxHeight: '100%',
                }}
                >
                IRON MUSCLE
                </h1>

                {/* Nav links as connected parallelograms */}
                <nav className="flex items-stretch gap-0 h-full ml-6">
                    {navItems.map((item) => (
                        <a 
                            key={item.label} 
                            href={item.path} 
                            className="relative flex-shrink-0 flex items-center justify-center h-full px-6 bg-[#2a2a2a] text-yellow-400 font-medium transform skew-x-[-0deg] hover:bg-yellow-500 hover:text-black transition-all duration-200 rounded-l-none rounded-r-none"
                        >
                            <span className="inline-block transform skew-x-[0deg]">
                                {item.label}
                            </span>
                        </a>
                    ))}

                    {/* Logout button */}
                    <button 
                        onClick={handleLogout} 
                        className="relative flex-shrink-0 flex items-center justify-center h-full px-6 bg-red-500 text-white font-medium transform skew-x-[-0deg] hover:bg-red-600 transition-all duration-200 rounded-l-none rounded-r-none"
                    >
                        <span className="inline-block transform skew-x-[0deg]">
                            Logout
                        </span>
                    </button>
                </nav>
            </div>
        </header>
    );
}
