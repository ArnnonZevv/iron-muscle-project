import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Trainers() {
    const [bookedSessions, setBookedSessions] = useState([]);
    const navigate = useNavigate();

    const trainers = [
        { name: "Alice", specialty: "Yoga", rate: "$60/hour" },
        { name: "Maya", specialty: "Yoga & Meditation", rate: "$55/hour" },
        { name: "Sophia", specialty: "Yoga & Pilates", rate: "$65/hour" },
        { name: "John", specialty: "Cardio & Endurance", rate: "$70/hour" },
        { name: "Kevin", specialty: "HIIT & Cardio", rate: "$65/hour" },
        { name: "Marco", specialty: "Boxing & MMA", rate: "$80/hour" },
        { name: "Lucas", specialty: "Boxing & Strength", rate: "$75/hour" },
        { name: "Emma", specialty: "HIIT & CrossFit", rate: "$70/hour" },
        { name: "Chris", specialty: "HIIT & Functional", rate: "$65/hour" },
        { name: "Daniel", specialty: "Strength Training", rate: "$75/hour" },
        { name: "Jared", specialty: "Bodybuilding", rate: "$85/hour" },
        { name: "Alan", specialty: "Personal Training", rate: "$90/hour" },
        { name: "Christopher", specialty: "Rehabilitation", rate: "$95/hour" },
        { name: "Hailey", specialty: "Nutrition & Fitness", rate: "$80/hour" }
    ];

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    const handleBookSession = (trainerName) => {
        if (!bookedSessions.includes(trainerName)) {
            setBookedSessions([...bookedSessions, trainerName]);
            alert(`Session booked with ${trainerName}! You'll receive a confirmation email shortly.`);
            
            // In real app: bookSessionAPI(trainerName).then(...)
        } else {
            alert(`You already have a session booked with ${trainerName}!`);
        }
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] p-6 text-white scroll-smooth">
            <h1 className="text-3xl font-semibold mb-10">Trainers</h1>
            
            {bookedSessions.length > 0 && (
                <div className="mb-6 p-4 bg-green-900/30 rounded-xl border border-green-500/30">
                    <p className="text-green-400">
                        ✅ You have {bookedSessions.length} session{bookedSessions.length > 1 ? 's' : ''} booked
                    </p>
                </div>
            )}

            <div className="grid gap-6 max-w-4xl mx-auto">
                {trainers.map((trainer, index) => {
                    const isBooked = bookedSessions.includes(trainer.name);
                    
                    return (
                        <div
                            key={index}
                            id={trainer.name}
                            className="bg-[#1b1b1b] rounded-2xl p-6 flex gap-6 shadow-lg"
                        >
                            <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center">
                                <span className="text-3xl">{trainer.name.charAt(0)}</span>
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <p className="text-2xl font-bold text-white">{trainer.name}</p>
                                    <p className="text-gray-400 mt-1">{trainer.specialty}</p>
                                    <p className="text-yellow-400 font-semibold mt-2">{trainer.rate}</p>
                                    <p className="text-gray-400 max-w-sm mt-3">
                                        Certified professional with 5+ years of experience. 
                                        Specialized in {trainer.specialty.toLowerCase()}.
                                    </p>
                                </div>

                                <div className="flex gap-4 mt-4">
                                    <button 
                                        onClick={() => handleBookSession(trainer.name)}
                                        className={`px-4 py-2 rounded-xl ${isBooked ? 'bg-green-600' : 'bg-yellow-500 hover:bg-yellow-600'} text-black transition`}
                                        disabled={isBooked}
                                    >
                                        {isBooked ? '✓ Session Booked' : 'Book Session'}
                                    </button>
                                    
                                    <button 
                                        onClick={() => navigate('/classes')}
                                        className="bg-[#333] px-4 py-2 rounded-xl hover:bg-[#444] transition"
                                    >
                                        View Classes
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}