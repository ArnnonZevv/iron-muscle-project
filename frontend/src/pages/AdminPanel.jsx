export default function AdminPanel() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white p-6">

            <h1 className="text-3xl font-semibold mb-10 tracking-wide">Admin Panel</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">

                {[
                    "Manage Members",
                    "Manage Classes",
                    "Manage Trainers",
                    "Payment Reports",
                    "Cancellation Requests",
                    "Dashboard Settings",
                ].map((title, index) => (
                    <div
                        key={index}
                        className="bg-[#1b1b1b] rounded-3xl p-8 shadow-xl flex flex-col justify-between min-h-[180px]"
                    >
                        <h2 className="text-xl font-semibold mb-6">{title}</h2>

                        <button className="bg-yellow-500 text-black px-5 py-3 rounded-xl font-semibold hover:bg-yellow-400">
                            Open
                        </button>
                    </div>
                ))}

            </div>

        </div>
    );
}
