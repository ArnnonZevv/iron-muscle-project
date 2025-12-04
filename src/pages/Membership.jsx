import { useState } from "react";

export default function Membership() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const plans = [
        { 
            title: "Premium", 
            price: "$99.99/month",
            features: [
                "Unlimited Classes",
                "Personal Trainer Access",
                "Nutrition Planning",
                "24/7 Gym Access",
                "Free Guest Passes",
                "Priority Booking"
            ]
        },
        { 
            title: "Standard", 
            price: "$49.99/month",
            features: [
                "10 Classes/Month",
                "Basic Gym Access",
                "Group Classes",
                "Limited Trainer Access",
                "No Guest Passes",
                "Standard Booking"
            ]
        }
    ];

    const handleSubscribe = (planTitle) => {
        setSelectedPlan(planTitle);
        setIsSubscribed(true);
        
        // In real app: subscribeToPlanAPI(planTitle).then(...)
        setTimeout(() => {
            alert(`Successfully subscribed to ${planTitle} plan! Welcome to our gym community!`);
        }, 100);
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
            <h1 className="text-4xl font-semibold text-center mb-10">MEMBERSHIPS</h1>
            
            {isSubscribed && (
                <div className="mb-8 p-4 bg-green-900/30 rounded-xl border border-green-500/30 max-w-2xl mx-auto">
                    <p className="text-green-400 text-center">
                        ✅ You are subscribed to the {selectedPlan} plan! Thank you for joining!
                    </p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {plans.map((plan, index) => {
                    const isSelected = selectedPlan === plan.title && isSubscribed;
                    
                    return (
                        <div 
                            key={index} 
                            className={`bg-[#1b1b1b] rounded-3xl p-8 shadow-xl ${isSelected ? 'ring-2 ring-yellow-400' : ''}`}
                        >
                            <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
                            <p className="text-3xl font-bold text-yellow-400 mb-6">{plan.price}</p>
                            
                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300">
                                        <span className="text-yellow-400 mr-2">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button 
                                onClick={() => handleSubscribe(plan.title)}
                                className={`w-full px-6 py-3 rounded-xl font-semibold transition ${
                                    isSelected 
                                        ? 'bg-green-600 hover:bg-green-700' 
                                        : 'bg-yellow-500 hover:bg-yellow-600 text-black'
                                }`}
                                disabled={isSelected}
                            >
                                {isSelected ? 'Current Plan' : 'Subscribe Now'}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}