export default function Classes() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] p-6 text-white">

            <h1 className="text-3xl font-semibold mb-10">Classes</h1>

            <div className="grid gap-6 max-w-4xl mx-auto">

                {["Yoga", "Cardio", "Boxing", "HIIT", "Strength"].map((name, index) => (
                    <div
                        key={index}
                        className="bg-[#1b1b1b] rounded-2xl p-6 flex justify-between items-center shadow-lg"
                    >
                        <span className="text-2xl">{name}</span>

                        <div className="flex flex-col gap-2">
                            <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg">
                                Book
                            </button>
                            <button className="bg-[#333] px-4 py-2 rounded-lg">Info</button>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}
