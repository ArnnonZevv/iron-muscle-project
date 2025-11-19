export default function Dashboard() {
    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white">

            <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* LEFT: User Info */}
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
                    <div className="w-20 h-20 bg-gray-700 rounded-full mb-4"></div>
                    <p className="text-gray-300">Name: John Doe</p>
                    <p className="text-gray-300">Email: johndoe@example.com</p>
                    <p className="text-gray-300">Membership: Active</p>
                </div>

                {/* RIGHT: Quick Menu */}
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

                    <div className="space-y-4">
                        <a href="/membership" className="block bg-gray-700 p-4 rounded hover:bg-gray-600">
                            Manage Membership
                        </a>
                        <a href="/classes" className="block bg-gray-700 p-4 rounded hover:bg-gray-600">
                            View Classes
                        </a>
                        <a href="/trainers" className="block bg-gray-700 p-4 rounded hover:bg-gray-600">
                            Trainers
                        </a>
                        <a href="/settings" className="block bg-gray-700 p-4 rounded hover:bg-gray-600">
                            Account Settings
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
