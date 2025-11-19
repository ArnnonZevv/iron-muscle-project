export default function Trainers() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] p-6 text-white">

            <h1 className="text-3xl font-semibold mb-10">Trainers</h1>

            <div className="grid gap-6 max-w-4xl mx-auto">

                {["Alan", "Christopher", "Hailey"].map((name, index) => (
                    <div
                        key={index}
                        className="bg-[#1b1b1b] rounded-2xl p-6 flex gap-6 shadow-lg"
                    >
                        <div className="w-24 h-24 bg-gray-700 rounded-2xl"></div>

                        <div className="flex flex-col justify-between">
                            <p className="text-xl font-semibold">{name}</p>
                            <p className="text-gray-400 max-w-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer id lorem et sapien pellentesque volutpat.
                            </p>

                            <button className="self-start bg-yellow-500 text-black px-4 py-2 rounded-xl">
                                Book Session
                            </button>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}
