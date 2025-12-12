import { useState } from "react";
import { useToast } from "../ToastContext";

function CancellationConfirmModal({ open, onConfirm, onCancel }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="w-full max-w-md bg-[#1b1b1b] rounded-3xl shadow-xl transition-all duration-300 ease-in-out overflow-visible">
                {/* Message Section */}
                <div className="p-8">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Confirm Cancellation</h2>
                    <p className="text-gray-400 text-center">
                        Are you sure you want to submit this cancellation request? This action cannot be undone.
                    </p>
                </div>

                {/* Buttons Section */}
                <div className="flex w-full rounded-b-3xl overflow-hidden">
                    <div
                        onClick={onCancel}
                        className="flex-1 bg-gray-600 h-[72px] flex items-center justify-center text-white text-lg font-semibold hover:bg-gray-500 transition-colors cursor-pointer"
                    >
                        No, Go Back
                    </div>

                    <div
                        onClick={onConfirm}
                        className="flex-1 bg-red-500 h-[72px] flex items-center justify-center text-white text-lg font-semibold hover:bg-red-400 transition-colors cursor-pointer"
                    >
                        Yes, Cancel
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Cancellation() {
    const { addToast } = useToast();
    const [reason, setReason] = useState("");
    const [selectedReason, setSelectedReason] = useState("");
    const [customReason, setCustomReason] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const predefinedReasons = [
        "Too expensive",
        "Not using it enough",
        "Found another gym",
        "Moving to another location",
        "Health reasons",
        "Unsatisfied with services",
        "Other"
    ];

    const handleSubmit = () => {
        const finalReason = selectedReason === "Other" ? customReason : selectedReason;
        
        if (!finalReason.trim()) {
            addToast("Please select or enter a cancellation reason", "error");
            return;
        }

        setModalOpen(true);
    };

    const handleConfirmCancellation = () => {
        setSubmitted(true);
        setModalOpen(false);

        addToast("Cancellation request submitted successfully!", "success");
    };

    const handleReset = () => {
        setSelectedReason("");
        setCustomReason("");
        setReason("");
        setSubmitted(false);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-[#0f0f0f] p-6 text-white pt-11">
                <h1 className="text-3xl font-semibold mb-10">Cancellation</h1>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-[#1b1b1b] rounded-3xl shadow-xl overflow-hidden">
                        <div className="p-12 text-center">
                            <div className="w-20 h-20 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold mb-4">Request Submitted</h2>
                            <p className="text-gray-400 mb-8">
                                Your cancellation request has been submitted successfully. Our team will review it and get back to you within 2-3 business days.
                            </p>
                        </div>

                        <div className="flex w-full">
                            <div
                                onClick={handleReset}
                                className="w-full bg-yellow-500 h-[72px] flex items-center justify-center text-black text-lg font-semibold hover:bg-yellow-400 transition-colors cursor-pointer"
                            >
                                Submit Another Request
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0f0f0f] p-6 text-white pt-11">
            <h1 className="text-3xl font-semibold mb-10">Cancellation Request</h1>

            <div className="max-w-3xl mx-auto space-y-6">
                {/* Info Card */}
                <div className="bg-[#1b1b1b] rounded-3xl shadow-xl overflow-hidden">
                    <div className="p-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2">Before You Cancel</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    We're sorry to see you go! Your cancellation request will be reviewed by our team. Please note that cancellations may take 2-3 business days to process. If you have any concerns, feel free to contact our support team first.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cancellation Form */}
                <div className="bg-[#1b1b1b] rounded-3xl shadow-xl overflow-hidden">
                    <div className="p-8 border-b border-[#2a2a2a]">
                        <h2 className="text-xl font-semibold text-center">Cancellation Reason</h2>
                    </div>

                    <div className="p-8 space-y-6">
                        {/* Predefined Reasons */}
                        <div>
                            <label className="block text-gray-300 mb-3 font-medium">Select a reason</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {predefinedReasons.map((reasonOption) => (
                                    <div
                                        key={reasonOption}
                                        onClick={() => setSelectedReason(reasonOption)}
                                        className={`p-4 rounded-xl cursor-pointer transition-all ${
                                            selectedReason === reasonOption
                                                ? "bg-yellow-500 text-black font-semibold"
                                                : "bg-[#2a2a2a] text-white hover:bg-[#333]"
                                        }`}
                                    >
                                        {reasonOption}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Custom Reason Input */}
                        {selectedReason === "Other" && (
                            <div className="animate-fadeIn">
                                <label className="block text-gray-300 mb-2 font-medium">Please specify your reason</label>
                                <textarea
                                    placeholder="Tell us why you're cancelling..."
                                    value={customReason}
                                    onChange={(e) => setCustomReason(e.target.value)}
                                    className="w-full h-32 p-4 bg-[#2a2a2a] rounded-xl text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow resize-none"
                                />
                            </div>
                        )}

                        {/* Additional Comments */}
                        {selectedReason && selectedReason !== "Other" && (
                            <div className="animate-fadeIn">
                                <label className="block text-gray-300 mb-2 font-medium">Additional comments (optional)</label>
                                <textarea
                                    placeholder="Any additional feedback you'd like to share..."
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    className="w-full h-24 p-4 bg-[#2a2a2a] rounded-xl text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow resize-none"
                                />
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex w-full">
                        <div
                            onClick={() => window.history.back()}
                            className="flex-1 bg-gray-600 h-[72px] flex items-center justify-center text-white text-lg font-semibold hover:bg-gray-500 transition-colors cursor-pointer"
                        >
                            Go Back
                        </div>

                        <div
                            onClick={handleSubmit}
                            className={`flex-1 h-[72px] flex items-center justify-center text-lg font-semibold transition-colors ${
                                selectedReason
                                    ? "bg-red-500 text-white hover:bg-red-400 cursor-pointer"
                                    : "bg-gray-700 text-gray-500 cursor-not-allowed"
                            }`}
                        >
                            Submit Request
                        </div>
                    </div>
                </div>
            </div>

            <CancellationConfirmModal
                open={modalOpen}
                onConfirm={handleConfirmCancellation}
                onCancel={() => setModalOpen(false)}
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