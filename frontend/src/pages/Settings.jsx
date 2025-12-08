export default function Settings() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white p-6">

            <h1 className="text-3xl font-semibold mb-10">Settings</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">

                {/* LEFT MENU */}
                <div className="bg-[#1b1b1b] rounded-3xl p-6 shadow-xl space-y-4 h-fit">
                    <button className="w-full bg-[#2d2d2d] py-3 rounded-xl text-left px-4 hover:bg-[#3a3a3a]">
                        General
                    </button>
                    <button className="w-full bg-[#2d2d2d] py-3 rounded-xl text-left px-4 hover:bg-[#3a3a3a]">
                        Password
                    </button>
                    <button className="w-full bg-[#2d2d2d] py-3 rounded-xl text-left px-4 hover:bg-[#3a3a3a]">
                        Language
                    </button>
                    <button className="w-full bg-[#2d2d2d] py-3 rounded-xl text-left px-4 hover:bg-[#3a3a3a]">
                        Account
                    </button>
                </div>

                {/* RIGHT PANEL */}
                <div className="bg-[#1b1b1b] rounded-3xl p-10 shadow-xl md:col-span-3 min-h-[400px]">
                    <h2 className="text-2xl font-semibold mb-6">General Settings</h2>

                    <div className="space-y-6 max-w-xl">
                        <div>
                            <label className="text-gray-300">Full Name</label>
                            <input className="w-full mt-1 p-3 rounded-xl bg-[#2a2a2a] outline-none" />
                        </div>

                        <div>
                            <label className="text-gray-300">Email</label>
                            <input className="w-full mt-1 p-3 rounded-xl bg-[#2a2a2a] outline-none" />
                        </div>

                        <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl hover:bg-yellow-400">
                            Save Changes
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
