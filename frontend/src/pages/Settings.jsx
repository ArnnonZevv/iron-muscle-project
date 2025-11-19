export default function Settings() {
    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white">

            <h1 className="text-3xl font-semibold mb-6">Settings</h1>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-xl">

                <p className="text-gray-300 mb-6">Manage your account settings below.</p>

                <div className="space-y-4">
                    <button className="w-full bg-gray-700 py-3 rounded hover:bg-gray-600">
                        Edit Profile
                    </button>
                    <button className="w-full bg-gray-700 py-3 rounded hover:bg-gray-600">
                        Change Password
                    </button>
                    <button className="w-full bg-red-600 py-3 rounded hover:bg-red-700">
                        Delete Account
                    </button>
                </div>
            </div>

        </div>
    );
}
