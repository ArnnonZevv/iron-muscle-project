export default function AdminPanel() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white p-6 pt-11">

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
                        className="bg-[#1b1b1b] rounded-3xl shadow-xl overflow-hidden"
                    >
                        {/* Title Section */}
                        <div className="p-8 min-h-[108px] flex items-center">
                            <h2 className="text-xl font-semibold">{title}</h2>
                        </div>

                        {/* Open Button */}
                        <div className="flex w-full">
                            <div className="w-full bg-yellow-500 h-[72px] flex items-center justify-center text-black text-lg font-semibold hover:bg-yellow-400 transition-colors cursor-pointer">
                                Open
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}