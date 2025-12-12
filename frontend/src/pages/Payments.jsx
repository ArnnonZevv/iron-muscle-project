import { useState } from "react";

export default function Payments() {
    const [payments] = useState([
        { 
            id: 1,
            date: "2025-12-01", 
            amount: "₱1,500", 
            method: "GCash", 
            status: "Paid",
            description: "Standard Membership - December 2025"
        },
        { 
            id: 2,
            date: "2025-11-01", 
            amount: "₱1,500", 
            method: "Card", 
            status: "Paid",
            description: "Standard Membership - November 2025"
        },
        { 
            id: 3,
            date: "2025-10-01", 
            amount: "₱1,500", 
            method: "GCash", 
            status: "Paid",
            description: "Standard Membership - October 2025"
        },
        { 
            id: 4,
            date: "2025-09-15", 
            amount: "₱500", 
            method: "Cash", 
            status: "Paid",
            description: "Personal Training Session"
        },
    ]);

    const [selectedPayment, setSelectedPayment] = useState(null);

    const handleViewDetails = (payment) => {
        setSelectedPayment(selectedPayment?.id === payment.id ? null : payment);
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] p-6 text-white pt-11">
            <h1 className="text-3xl font-semibold mb-10">Payments</h1>

            <div className="max-w-4xl mx-auto space-y-6">
                {payments.map((payment) => {
                    const isExpanded = selectedPayment?.id === payment.id;
                    
                    return (
                        <div key={payment.id} className="bg-[#1b1b1b] rounded-3xl shadow-xl overflow-hidden">
                            {/* Main Payment Info */}
                            <div className="flex w-full">
                                {/* Payment Details */}
                                <div className="flex-1 bg-[#1b1b1b] p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-xl font-semibold">{payment.amount}</p>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            payment.status === "Paid" 
                                                ? "bg-green-500 bg-opacity-20 text-green-400"
                                                : "bg-red-500 bg-opacity-20 text-red-400"
                                        }`}>
                                            {payment.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm">{payment.date}</p>
                                </div>

                                {/* View Details Button */}
                                <div
                                    onClick={() => handleViewDetails(payment)}
                                    className="bg-yellow-500 w-32 flex items-center justify-center text-black font-semibold hover:bg-yellow-400 transition-colors cursor-pointer"
                                >
                                    {isExpanded ? 'Hide' : 'Details'}
                                </div>
                            </div>

                            {/* Expanded Details */}
                            <div 
                                className="transition-all duration-300 ease-in-out overflow-hidden"
                                style={{ 
                                    maxHeight: isExpanded ? '300px' : '0px',
                                    opacity: isExpanded ? 1 : 0
                                }}
                            >
                                <div className="px-6 pb-6 border-t border-[#2a2a2a] pt-6">
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Description</p>
                                            <p className="text-white">{payment.description}</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">Payment Method</p>
                                                <p className="text-white">{payment.method}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">Transaction ID Dummy</p>
                                                <p className="text-white font-mono text-sm">TXN-{payment.id}2025{Math.floor(Math.random() * 10000)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Summary Card */}
                <div className="bg-[#1b1b1b] rounded-3xl shadow-xl overflow-hidden mt-8">
                    <div className="p-8 border-b border-[#2a2a2a]">
                        <h2 className="text-xl font-semibold text-center">Payment Summary</h2>
                    </div>
                    
                    <div className="p-8">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400">Total Payments</span>
                                <span className="text-2xl font-bold text-yellow-400">
                                    ₱{payments.reduce((sum, p) => sum + parseInt(p.amount.replace(/[₱,]/g, '')), 0).toLocaleString()}
                                </span>
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t border-[#2a2a2a]">
                                <span className="text-gray-400">Transactions</span>
                                <span className="text-xl font-semibold">{payments.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}