import { useState } from "react";

function PaymentModal({ open, plan, onClose }) {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [gcashNumber, setGcashNumber] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");

    if (!open) return null;

    const handleSelectMethod = (method) => {
        setPaymentMethod(method);
        setDropdownOpen(false);
    };

    const handleConfirm = () => {
        // Payment confirmation logic here
        alert(`Payment confirmed for ${plan.title} membership!`);
        resetAndClose();
    };

    const resetAndClose = () => {
        setPaymentMethod("");
        setDropdownOpen(false);
        setGcashNumber("");
        setCardNumber("");
        setCardName("");
        setExpiryDate("");
        setCvv("");
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-6">
            <div className="w-full max-w-lg bg-[#1b1b1b] rounded-3xl shadow-xl transition-all duration-300 ease-in-out overflow-visible">
                {/* Header */}
                <div className="p-8 border-b border-[#2a2a2a] bg-[#1b1b1b] rounded-t-3xl">
                    <h2 className="text-2xl font-semibold text-center">Payment Details</h2>
                    <p className="text-gray-400 text-center mt-2">
                        {plan.title} - {plan.price}
                    </p>
                </div>

                {/* Form Section */}
                <div className="p-10 bg-[#1b1b1b]">
                    <div className="space-y-6">
                        {/* Payment Method Dropdown */}
                        <div className="relative">
                            <label className="block text-gray-300 mb-2 font-medium">Payment Method</label>
                            <div className="bg-[#1b1b1b] rounded-xl shadow-xl overflow-hidden">
                                <div
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="bg-[#2a2a2a] px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-[#333] transition-colors"
                                >
                                    <span className={paymentMethod ? "text-white" : "text-gray-500"}>
                                        {paymentMethod === "gcash" ? "G-Cash" : paymentMethod === "card" ? "Card" : "Select Payment Method"}
                                    </span>
                                    <svg 
                                        className={`w-5 h-5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                {dropdownOpen && (
                                    <div className="animate-fadeIn">
                                        <div
                                            onClick={() => handleSelectMethod("gcash")}
                                            className="bg-[#1b1b1b] px-4 py-3 hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer border-t border-[#2a2a2a]"
                                        >
                                            G-Cash
                                        </div>
                                        <div
                                            onClick={() => handleSelectMethod("card")}
                                            className="bg-[#1b1b1b] px-4 py-3 hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer border-t border-[#2a2a2a]"
                                        >
                                            Card
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* G-Cash Fields */}
                        <div 
                            className="transition-all duration-300 ease-in-out overflow-hidden"
                            style={{ 
                                maxHeight: paymentMethod === "gcash" ? '200px' : '0px',
                                opacity: paymentMethod === "gcash" ? 1 : 0
                            }}
                        >
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">G-Cash Number</label>
                                    <input
                                        type="tel"
                                        placeholder="09XX XXX XXXX"
                                        value={gcashNumber}
                                        onChange={(e) => setGcashNumber(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Card Fields */}
                        <div 
                            className="transition-all duration-300 ease-in-out overflow-hidden"
                            style={{ 
                                maxHeight: paymentMethod === "card" ? '500px' : '0px',
                                opacity: paymentMethod === "card" ? 1 : 0
                            }}
                        >
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">Card Number</label>
                                    <input
                                        type="text"
                                        placeholder="1234 5678 9012 3456"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">Cardholder Name</label>
                                    <input
                                        type="text"
                                        placeholder="JOHN DOE"
                                        value={cardName}
                                        onChange={(e) => setCardName(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-300 mb-2 font-medium">Expiry Date</label>
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            value={expiryDate}
                                            onChange={(e) => setExpiryDate(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-300 mb-2 font-medium">CVV</label>
                                        <input
                                            type="text"
                                            placeholder="123"
                                            value={cvv}
                                            onChange={(e) => setCvv(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex w-full rounded-b-3xl overflow-hidden">
                    <div
                        onClick={resetAndClose}
                        className="flex-1 bg-red-500 h-[72px] flex items-center justify-center text-white text-lg font-semibold hover:bg-red-400 transition-colors cursor-pointer"
                    >
                        Cancel
                    </div>

                    <div
                        onClick={handleConfirm}
                        className={`flex-1 h-[72px] flex items-center justify-center text-lg font-semibold transition-colors ${
                            paymentMethod
                                ? 'bg-green-500 text-white hover:bg-green-400 cursor-pointer'
                                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                        Confirm
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Membership() {
    const [paymentModalOpen, setPaymentModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        { 
            title: "Premium", 
            price: "$35.00",
            description: "Access to all gym facilities, unlimited classes, personal training sessions, and priority booking."
        },
        { 
            title: "Standard", 
            price: "$15.00",
            description: "Access to all gym facilities during regular hours with standard class bookings."
        },
    ];

    const handleSubscribe = (plan) => {
        setSelectedPlan(plan);
        setPaymentModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white p-6 pt-11">
            <h1 className="text-4xl font-semibold text-center mb-10">MEMBERSHIPS</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {plans.map((plan, index) => (
                    <div key={index} className="bg-[#1b1b1b] rounded-3xl shadow-xl overflow-hidden">
                        {/* Plan Details */}
                        <div className="p-8">
                            <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
                            <p className="text-3xl font-bold text-yellow-400 mb-4">{plan.price}</p>

                            <p className="text-gray-400">
                                {plan.description}
                            </p>
                        </div>

                        {/* Subscribe Button */}
                        <div className="flex w-full">
                            <div 
                                onClick={() => handleSubscribe(plan)}
                                className="w-full bg-yellow-500 h-[72px] flex items-center justify-center text-black text-lg font-semibold hover:bg-yellow-400 transition-colors cursor-pointer"
                            >
                                Subscribe
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <PaymentModal
                open={paymentModalOpen}
                plan={selectedPlan || {}}
                onClose={() => setPaymentModalOpen(false)}
            />

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-in-out;
                }
            `}</style>
        </div>
    );
}