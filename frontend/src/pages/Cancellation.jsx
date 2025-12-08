export default function Cancellation() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] p-6 text-white">

            <h1 className="text-3xl font-semibold mb-10">Cancellation</h1>

            <div className="bg-[#1b1b1b] rounded-3xl p-8 shadow-xl max-w-3xl mx-auto">

                <textarea
                    placeholder="Enter cancellation reason..."
                    className="w-full h-32 p-4 bg-[#2a2a2a] rounded-xl text-white outline-none"
                />

                <div className="flex gap-4 mt-4">
                    <button className="bg-red-600 px-6 py-3 rounded-xl">Submit</button>
                    <button className="bg-[#333] px-6 py-3 rounded-xl">Cancel</button>
                </div>

            </div>

        </div>
    );
}
