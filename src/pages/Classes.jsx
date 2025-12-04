import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Classes() {
    const [openIndex, setOpenIndex] = useState(null);
    const [bookedClasses, setBookedClasses] = useState([]);
    const navigate = useNavigate();

    const classDetails = {
        Yoga: {
            description: "A relaxing class focused on flexibility, breathing, and balance.",
            trainers: ["Alice", "Maya", "Sophia"],
            price: "$20"
        },
        Cardio: {
            description: "High-energy workouts designed to improve endurance and burn calories.",
            trainers: ["John", "Kevin"],
            price: "$25"
        },
        Boxing: {
            description: "Improve strength, speed, and discipline through boxing drills.",
            trainers: ["Marco", "Lucas"],
            price: "$30"
        },
        HIIT: {
            description: "Intense bursts of activity mixed with short recovery periods.",
            trainers: ["Emma", "Chris"],
            price: "$28"
        },
        Strength: {
            description: "Power and muscle-building workouts using weights and machines.",
            trainers: ["Daniel", "Jared"],
            price: "$35"
        }
    };

    const handleBookClass = (className) => {
        if (!bookedClasses.includes(className)) {
            setBookedClasses([...bookedClasses, className]);
            alert(`Successfully booked ${className} class! Check your dashboard for details.`);
            
            // In a real app, you would make an API call here
            // Example: bookClassAPI(className).then(() => {
            //     alert(`Booked ${className} successfully!`);
            // });
        } else {
            alert(`You've already booked ${className}!`);
        }
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] p-6 text-white">
            <h1 className="text-3xl font-semibold mb-10">Classes</h1>
            
            {bookedClasses.length > 0 && (
                <div className="mb-6 p-4 bg-yellow-900/30 rounded-xl border border-yellow-500/30">
                    <p className="text-yellow-400">
                        📅 You have {bookedClasses.length} class{bookedClasses.length > 1 ? 'es' : ''} booked: 
                        {bookedClasses.join(', ')}
                    </p>
                </div>
            )}

            <div className="grid gap-6 max-w-4xl mx-auto">
                {["Yoga", "Cardio", "Boxing", "HIIT", "Strength"].map((name, index) => {
                    const isBooked = bookedClasses.includes(name);
                    
                    return (
                        <div key={index} className="bg-[#1b1b1b] rounded-2xl p-6 shadow-lg">
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-2xl">{name}</span>
                                    <span className="ml-4 text-yellow-400">{classDetails[name].price}/session</span>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <button 
                                        onClick={() => handleBookClass(name)}
                                        className={`px-4 py-2 rounded-lg ${isBooked ? 'bg-green-600' : 'bg-yellow-500 hover:bg-yellow-600'} text-black transition`}
                                        disabled={isBooked}
                                    >
                                        {isBooked ? '✓ Booked' : 'Book'}
                                    </button>

                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="bg-[#333] px-4 py-2 rounded-lg hover:bg-[#444] transition"
                                    >
                                        {openIndex === index ? 'Hide Info' : 'Info'}
                                    </button>
                                </div>
                            </div>

                            {/* Smooth Expanding Section */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    openIndex === index ? "max-h-96 mt-6" : "max-h-0 mt-0"
                                }`}
                            >
                                <p className="text-gray-300 mb-4">
                                    {classDetails[name].description}
                                </p>

                                <h3 className="text-lg font-semibold mb-2">Available Trainers:</h3>

                                <ul className="list-disc ml-6 text-gray-400 space-y-1">
                                    {classDetails[name].trainers.map((trainer, i) => (
                                        <li key={i}>
                                            <button 
                                                onClick={() => navigate(`/trainers#${trainer}`)}
                                                className="text-white font-semibold hover:text-yellow-400 transition"
                                            >
                                                {trainer}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}