export default function Classes() {
    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white">

            <h1 className="text-3xl font-semibold mb-6">Available Classes</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {[1, 2, 3, 4, 5, 6].map((x) => (
                    <div key={x} className="bg-gray-800 p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold">Class {x}</h2>
                        <p className="text-gray-300 mt-2">Trainer: John Smith</p>
                        <p className="text-gray-300">Time: 2:00 PM</p>

                        <button className="mt-4 bg-yellow-500 text-black w-full py-2 rounded hover:bg-yellow-400">
                            Book Class
                        </button>
                    </div>
                ))}

            </div>
        </div>
    );
}
