import { useState } from "react";

export default function Payments() {
    const [payments, setPayments] = useState([
        { id: 1, date: "2025-10-01", amount: "₱1500", method: "GCash", status: "Paid" },
        { id: 2, date: "2025-09-01", amount: "₱1500", method: "Credit Card", status: "Paid" },
        { id: 3, date: "2025-08-01", amount: "₱1500", method: "Bank Transfer", status: "Paid" },
        { id: 4, date: "2025-11-01", amount: "₱1500", method: "GCash", status: "Pending" },
    ]);

    const handleMakePayment = () => {
        // In real app, this would open a payment modal or redirect to payment gateway
        alert("Redirecting to payment gateway...\n\nIn a real application, this would integrate with a payment processor like PayPal, Stripe, or local payment methods.");
        
        // Simulate payment success
        setTimeout(() => {
            const newPayment = {
                id: payments.length + 1,
                date: new Date().toISOString().split('T')[0],
                amount: "₱1500",
                method: "Online",
                status: "Paid"
            };
            setPayments([newPayment, ...payments]);
            alert("Payment successful! Thank you for your payment.");
        }, 1000);
    };

    const handleDownloadReceipt = (paymentId) => {
        alert(`Downloading receipt for payment #${paymentId}...\n\nIn a real application, this would generate and download a PDF receipt.`);
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] p-6 text-white">
            <h1 className="text-3xl font-semibold mb-10">Payment History</h1>

            <div className="max-w-6xl mx-auto space-y-8">
                {/* Payment Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#1b1b1b] rounded-2xl p-6">
                        <div className="text-gray-400 mb-2">Total Paid</div>
                        <div className="text-3xl font-bold text-green-400">₱{payments.filter(p => p.status === "Paid").length * 1500}</div>
                    </div>
                    <div className="bg-[#1b1b1b] rounded-2xl p-6">
                        <div className="text-gray-400 mb-2">Pending</div>
                        <div className="text-3xl font-bold text-yellow-400">{payments.filter(p => p.status === "Pending").length} payment(s)</div>
                    </div>
                    <div className="bg-[#1b1b1b] rounded-2xl p-6">
                        <div className="text-gray-400 mb-2">Next Payment</div>
                        <div className="text-3xl font-bold">₱1500</div>
                        <div className="text-gray-400 text-sm mt-2">Due: 2025-12-01</div>
                    </div>
                </div>

                {/* Make Payment Button */}
                <div className="flex justify-end">
                    <button 
                        onClick={handleMakePayment}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-xl font-semibold text-lg transition"
                    >
                        💳 Make Payment
                    </button>
                </div>

                {/* Payments Table */}
                <div className="bg-[#1b1b1b] rounded-3xl p-8 shadow-xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="text-gray-400 border-b border-gray-700">
                                <tr>
                                    <th className="py-4 px-2">Date</th>
                                    <th className="px-2">Amount</th>
                                    <th className="px-2">Method</th>
                                    <th className="px-2">Status</th>
                                    <th className="px-2">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="text-gray-200">
                                {payments.map((p) => (
                                    <tr key={p.id} className="border-b border-gray-800 hover:bg-[#2a2a2a] transition">
                                        <td className="py-4 px-2">{p.date}</td>
                                        <td className="px-2">{p.amount}</td>
                                        <td className="px-2">{p.method}</td>
                                        <td className="px-2">
                                            <span className={`px-3 py-1 rounded-full text-sm ${
                                                p.status === "Paid" 
                                                    ? "bg-green-900/30 text-green-400" 
                                                    : "bg-yellow-900/30 text-yellow-400"
                                            }`}>
                                                {p.status}
                                            </span>
                                        </td>
                                        <td className="px-2">
                                            <button 
                                                onClick={() => handleDownloadReceipt(p.id)}
                                                className="text-blue-400 hover:text-blue-300 mr-4"
                                            >
                                                Receipt
                                            </button>
                                            {p.status === "Pending" && (
                                                <button className="text-yellow-400 hover:text-yellow-300">
                                                    Pay Now
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Payment Methods */}
                    <div className="mt-10 pt-6 border-t border-gray-700">
                        <h3 className="text-xl font-semibold mb-4">Saved Payment Methods</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-[#2a2a2a] p-4 rounded-xl">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="font-semibold">GCash</div>
                                        <div className="text-gray-400 text-sm">•••• 1234</div>
                                    </div>
                                    <button className="text-red-400 hover:text-red-300">Remove</button>
                                </div>
                            </div>
                            <div className="bg-[#2a2a2a] p-4 rounded-xl">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="font-semibold">Credit Card</div>
                                        <div className="text-gray-400 text-sm">Visa •••• 5678</div>
                                    </div>
                                    <button className="text-red-400 hover:text-red-300">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}