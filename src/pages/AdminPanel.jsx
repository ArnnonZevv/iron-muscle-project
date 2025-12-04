import { useState } from "react";

export default function AdminPanel() {
    const [activeModule, setActiveModule] = useState(null);
    const [stats, setStats] = useState({
        totalMembers: 124,
        activeClasses: 8,
        totalTrainers: 14,
        monthlyRevenue: "$12,450"
    });

    const modules = [
        {
            title: "Manage Members",
            description: "View, add, edit, or remove gym members",
            action: "Manage Members",
            color: "bg-blue-600 hover:bg-blue-700"
        },
        {
            title: "Manage Classes",
            description: "Schedule and organize fitness classes",
            action: "Manage Classes",
            color: "bg-green-600 hover:bg-green-700"
        },
        {
            title: "Manage Trainers",
            description: "Handle trainer schedules and profiles",
            action: "Manage Trainers",
            color: "bg-purple-600 hover:bg-purple-700"
        },
        {
            title: "Payment Reports",
            description: "View financial reports and transactions",
            action: "View Reports",
            color: "bg-yellow-600 hover:bg-yellow-700"
        },
        {
            title: "Cancellation Requests",
            description: "Process membership cancellations",
            action: "View Requests",
            color: "bg-red-600 hover:bg-red-700"
        },
        {
            title: "Dashboard Settings",
            description: "Configure system settings and preferences",
            action: "Configure",
            color: "bg-gray-600 hover:bg-gray-700"
        }
    ];

    const handleModuleClick = (moduleTitle) => {
        setActiveModule(moduleTitle);
        alert(`Opening ${moduleTitle} module...\n\nIn a real application, this would navigate to the specific admin interface.`);
        
        // Simulate some action
        setTimeout(() => {
            setActiveModule(null);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
            <h1 className="text-3xl font-semibold mb-10 tracking-wide">Admin Panel</h1>

            {/* Statistics Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-6xl mx-auto">
                {Object.entries(stats).map(([key, value]) => (
                    <div key={key} className="bg-[#1b1b1b] rounded-2xl p-6 text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">{value}</div>
                        <div className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                ))}
            </div>

            {/* Admin Modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {modules.map((module, index) => (
                    <div
                        key={index}
                        className={`bg-[#1b1b1b] rounded-3xl p-8 shadow-xl flex flex-col justify-between min-h-[220px] transition-all ${
                            activeModule === module.title ? 'ring-2 ring-yellow-400 scale-105' : ''
                        }`}
                    >
                        <div>
                            <h2 className="text-xl font-semibold mb-3">{module.title}</h2>
                            <p className="text-gray-400 mb-6">{module.description}</p>
                        </div>

                        <button
                            onClick={() => handleModuleClick(module.title)}
                            className={`${module.color} text-white px-5 py-3 rounded-xl font-semibold transition-all`}
                        >
                            {activeModule === module.title ? 'Loading...' : module.action}
                        </button>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-12 max-w-7xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
                <div className="flex flex-wrap gap-4">
                    <button className="bg-[#1b1b1b] hover:bg-[#2a2a2a] px-6 py-3 rounded-xl">
                        Send Newsletter
                    </button>
                    <button className="bg-[#1b1b1b] hover:bg-[#2a2a2a] px-6 py-3 rounded-xl">
                        Generate Monthly Report
                    </button>
                    <button className="bg-[#1b1b1b] hover:bg-[#2a2a2a] px-6 py-3 rounded-xl">
                        Backup Database
                    </button>
                    <button className="bg-[#1b1b1b] hover:bg-[#2a2a2a] px-6 py-3 rounded-xl">
                        System Health Check
                    </button>
                </div>
            </div>
        </div>
    );
}