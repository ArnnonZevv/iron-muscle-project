export default function Trainers() {
    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white">

            <h1 className="text-3xl font-semibold mb-6">Our Trainers</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {[1, 2, 3, 4, 5, 6].map((t) => (
                    <div key={t} className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                        <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-3"></div>
                        <h2 className="text-xl font-semibold">Trainer {t}</h2>
                        <p className="text-gray-300">Strength Specialist</p>

                        <button className="mt-4 bg-yellow-500 text-black w-full py-2 rounded hover:bg-yellow-400">
                            Book Session
                        </button>
                    </div>
                ))}

            </div>

        </div>
    );
}
