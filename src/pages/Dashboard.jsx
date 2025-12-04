import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [userStats, setUserStats] = useState({
        classesAttended: 12,
        caloriesBurned: 4500,
        streak: 7,
        nextClass: "Yoga - Tomorrow 10:00 AM"
    });
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate fetching user data
        const fetchUserStats = () => {
            // In real app, fetch from API
            console.log("Fetching user stats...");
        };
        fetchUserStats();
    }, []);

    const handleQuickAction = (action) => {
        switch(action) {
            case 'bookClass':
                navigate('/classes');
                break;
            case 'viewSchedule':
                alert("Opening class schedule...");
                break;
            case 'updateProfile':
                navigate('/settings');
                break;
            case 'viewProgress':
                alert("Showing fitness progress...");
                break;
            default:
                navigate('/' + action);
        }
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
            <h1 className="text-3xl font-semibold mb-10">Dashboard</h1>

            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-700/20 rounded-3xl p-8 mb-8 border border-yellow-500/30">
                <h2 className="text-2xl font-semibold mb-2">Welcome back, John! 👋</h2>
                <p className="text-gray-300">Ready for your next workout? You have a Yoga class tomorrow at 10:00 AM.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Profile & Stats */}
                <div className="space-y-8">
                    <div className="bg-[#1b1b1b] rounded-3xl p-8 shadow-xl">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="w-28 h-28 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl flex items-center justify-center">
                                <span className="text-4xl">JD</span>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold">John Doe</h2>
                                <p className="text-gray-400">Premium Member</p>
                                <p className="text-gray-400 text-sm mt-1">Member since Jan 2024</p>
                                <button 
                                    onClick={() => navigate('/settings')}
                                    className="mt-4 bg-[#333] hover:bg-[#444] px-4 py-2 rounded-xl transition"
                                >
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="bg-[#1b1b1b] rounded-3xl p-8 shadow-xl">
                        <h2 className="text-xl font-semibold mb-6">Your Stats</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {Object.entries(userStats).map(([key, value]) => (
                                <div key={key} className="bg-[#2a2a2a] rounded-2xl p-4 text-center">
                                    <div className="text-2xl font-bold text-yellow-400 mb-1">
                                        {typeof value === 'number' ? value : '🎯'}
                                    </div>
                                    <div className="text-gray-400 text-sm capitalize">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Actions & Shortcuts */}
                <div className="space-y-8">
                    <div className="bg-[#1b1b1b] rounded-3xl p-8 shadow-xl">
                        <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <button 
                                onClick={() => handleQuickAction('bookClass')}
                                className="bg-yellow-500 hover:bg-yellow-600 text-black p-6 rounded-2xl text-left transition"
                            >
                                <div className="text-2xl mb-2">📅</div>
                                <div className="font-semibold">Book Class</div>
                            </button>
                            <button 
                                onClick={() => handleQuickAction('viewSchedule')}
                                className="bg-blue-600 hover:bg-blue-700 p-6 rounded-2xl text-left transition"
                            >
                                <div className="text-2xl mb-2">⏰</div>
                                <div className="font-semibold">View Schedule</div>
                            </button>
                            <button 
                                onClick={() => handleQuickAction('updateProfile')}
                                className="bg-green-600 hover:bg-green-700 p-6 rounded-2xl text-left transition"
                            >
                                <div className="text-2xl mb-2">👤</div>
                                <div className="font-semibold">Update Profile</div>
                            </button>
                            <button 
                                onClick={() => handleQuickAction('viewProgress')}
                                className="bg-purple-600 hover:bg-purple-700 p-6 rounded-2xl text-left transition"
                            >
                                <div className="text-2xl mb-2">📊</div>
                                <div className="font-semibold">View Progress</div>
                            </button>
                        </div>
                    </div>

                    <div className="bg-[#1b1b1b] rounded-3xl p-8 shadow-xl">
                        <h2 className="text-xl font-semibold mb-6">Shortcuts</h2>
                        <div className="space-y-4">
                            {[
                                { title: "Membership", path: "/membership", icon: "💳" },
                                { title: "Payments", path: "/payments", icon: "💰" },
                                { title: "Classes", path: "/classes", icon: "🏋️" },
                                { title: "Trainers", path: "/trainers", icon: "👨‍🏫" },
                                { title: "Settings", path: "/settings", icon: "⚙️" }
                            ].map((item) => (
                                <button
                                    key={item.path}
                                    onClick={() => navigate(item.path)}
                                    className="w-full flex items-center justify-between bg-[#2a2a2a] hover:bg-[#3a3a3a] p-4 rounded-xl text-left transition group"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-xl">{item.icon}</span>
                                        <span>{item.title}</span>
                                    </div>
                                    <span className="opacity-0 group-hover:opacity-100 transition">→</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming Activities */}
            <div className="mt-8 bg-[#1b1b1b] rounded-3xl p-8 shadow-xl">
                <h2 className="text-xl font-semibold mb-6">Upcoming Activities</h2>
                <div className="space-y-4">
                    {[
                        { activity: "Yoga Class", time: "Tomorrow, 10:00 AM", trainer: "Alice" },
                        { activity: "Personal Training", time: "Friday, 3:00 PM", trainer: "Marco" },
                        { activity: "HIIT Session", time: "Next Monday, 9:00 AM", trainer: "Emma" }
                    ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-[#2a2a2a] rounded-xl">
                            <div>
                                <div className="font-semibold">{item.activity}</div>
                                <div className="text-gray-400 text-sm">{item.time}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-gray-300">with {item.trainer}</div>
                                <button className="text-yellow-400 hover:text-yellow-300 text-sm">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}