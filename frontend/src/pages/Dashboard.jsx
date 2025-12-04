export default function Dashboard() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white p-6">

            <h1 className="text-3xl font-semibold mb-10">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Profile */}
                <div className="bg-[#1b1b1b] rounded-3xl p-8 shadow-xl">
                    <div className="w-28 h-28 bg-gray-700 rounded-3xl mb-6"></div>
                    <h2 className="text-2xl font-semibold">John Doe</h2>
                    <p className="text-gray-400">Member since 2024</p>
                </div>

                {/* Actions */}
                <div className="bg-[#1b1b1b] rounded-3xl p-8 shadow-xl">
                    <h2 className="text-xl font-semibold mb-4">Shortcuts</h2>

                    <div className="space-y-4">
                        <a href="/membership" className="block">
                            <button className="w-full bg-[#333] p-4 rounded-xl text-left">
                                Membership
                            </button>
                        </a>
                        <a href="/payments" className="block">
                            <button className="w-full bg-[#333] p-4 rounded-xl text-left">
                                Payments
                            </button>
                        </a>
                        <a href="/classes" className="block">
                            <button className="w-full bg-[#333] p-4 rounded-xl text-left">
                                Classes
                            </button>
                        </a>
                        <a href="/trainers" className="block">
                            <button className="w-full bg-[#333] p-4 rounded-xl text-left">
                                Trainers
                            </button>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
}
