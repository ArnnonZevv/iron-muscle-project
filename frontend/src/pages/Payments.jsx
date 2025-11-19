export default function Payments() {
    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white">
            <h1 className="text-3xl font-semibold mb-6">Payments</h1>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-3xl">
                <h2 className="text-xl font-semibold mb-4">Payment History</h2>
                <table className="w-full text-left text-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2">Date</th>
                            <th className="py-2">Amount</th>
                            <th className="py-2">Method</th>
                            <th className="py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { date: "2025-10-01", amount: "₱1,500", method: "Credit Card", status: "Completed" },
                            { date: "2025-09-01", amount: "₱1,500", method: "GCash", status: "Completed" },
                            { date: "2025-08-01", amount: "₱1,500", method: "Credit Card", status: "Completed" },
                        ].map((p, i) => (
                            <tr key={i} className="border-t border-gray-700">
                                <td className="py-2">{p.date}</td>
                                <td className="py-2">{p.amount}</td>
                                <td className="py-2">{p.method}</td>
                                <td className="py-2">{p.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mt-6">
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
                        Make a Payment
                    </button>
                </div>
            </div>
        </div>
    );
}
