import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cancellation() {
    const [reason, setReason] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!reason.trim()) {
            alert('Please provide a cancellation reason.');
            return;
        }

        // In real app, make API call to submit cancellation
        console.log('Cancellation reason:', reason);
        setIsSubmitted(true);
        
        setTimeout(() => {
            alert('Your cancellation request has been submitted. We\'ll contact you shortly.');
            navigate('/dashboard');
        }, 500);
    };

    const handleCancel = () => {
        if (reason.trim() && !confirm('Are you sure? Your reason will be lost.')) {
            return;
        }
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] p-6 text-white">
            <h1 className="text-3xl font-semibold mb-10">Cancellation Request</h1>

            <div className="bg-[#1b1b1b] rounded-3xl p-8 shadow-xl max-w-3xl mx-auto">
                {isSubmitted ? (
                    <div className="text-center py-10">
                        <div className="text-6xl mb-6">✅</div>
                        <h2 className="text-2xl font-semibold mb-4">Request Submitted</h2>
                        <p className="text-gray-400">
                            Your cancellation request has been received. 
                            Our team will contact you within 24-48 hours.
                        </p>
                        <button 
                            onClick={() => navigate('/dashboard')}
                            className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-xl hover:bg-yellow-400"
                        >
                            Back to Dashboard
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">We're sorry to see you go!</h3>
                            <p className="text-gray-400">
                                Please let us know why you're cancelling. Your feedback helps us improve.
                            </p>
                        </div>

                        <div className="space-y-4 mb-6">
                            <label className="block text-gray-300">
                                Cancellation Reason
                            </label>
                            <textarea
                                placeholder="Enter your reason for cancellation..."
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                className="w-full h-40 p-4 bg-[#2a2a2a] rounded-xl text-white outline-none resize-none"
                            />
                            
                            <div className="text-sm text-gray-500">
                                Character count: {reason.length}/500
                            </div>
                        </div>

                        <div className="mb-6 p-4 bg-yellow-900/30 rounded-xl">
                            <p className="text-yellow-400">
                                ⚠️ <strong>Important:</strong> 
                                Cancellation requests are processed within 3-5 business days. 
                                You'll have access until the end of your current billing period.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button 
                                onClick={handleSubmit}
                                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl flex-1"
                            >
                                Submit Cancellation Request
                            </button>
                            <button 
                                onClick={handleCancel}
                                className="bg-[#333] hover:bg-[#444] px-6 py-3 rounded-xl"
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}