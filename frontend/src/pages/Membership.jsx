export default function Membership() {
    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white">

            <h1 className="text-3xl font-semibold mb-6">Membership</h1>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-xl">
                <h2 className="text-xl font-semibold mb-4">Current Plan</h2>

                <p className="text-gray-300">Plan: Monthly</p>
                <p className="text-gray-300">Status: Active</p>
                <p className="text-gray-300">Next Billing: March 15, 2025</p>

                <div className="mt-6 flex gap-4">
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
                        Upgrade
                    </button>
                    <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
                        Cancel Membership
                    </button>
                </div>
            </div>

        </div>
    );
}
