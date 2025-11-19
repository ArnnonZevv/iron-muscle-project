export default function Payments() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] p-6 text-white">

            <h1 className="text-3xl font-semibold mb-10">Payments</h1>

            <div className="bg-[#1b1b1b] rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">

                <table className="w-full text-left">
                    <thead className="text-gray-400">
                        <tr>
                            <th className="py-3">Date</th>
                            <th>Amount</th>
                            <th>Method</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-200">
                        {[
                            { date: "2025-10-01", amount: "₱1500", method: "GCash", status: "Paid" },
                            { date: "2025-09-01", amount: "₱1500", method: "Card", status: "Paid" },
                        ].map((p, i) => (
                            <tr key={i} className="border-t border-gray-700">
                                <td className="py-3">{p.date}</td>
                                <td>{p.amount}</td>
                                <td>{p.method}</td>
                                <td className="text-yellow-400">{p.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
}
