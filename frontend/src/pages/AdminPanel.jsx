export default function AdminPanel() {
    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white">
            <h1 className="text-3xl font-semibold mb-6">Admin Panel</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Members</h2>
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
                        Manage Members
                    </button>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Classes</h2>
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
                        Manage Classes
                    </button>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Trainers</h2>
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
                        Manage Trainers
                    </button>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Reports</h2>
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
                        View Reports
                    </button>
                </div>

            </div>
        </div>
    );
}
