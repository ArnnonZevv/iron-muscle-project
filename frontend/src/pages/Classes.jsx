import { useState } from "react";

export default function Classes() {

    const [openIndex, setOpenIndex] = useState(null);

    const classDetails = {
        Yoga: {
            description: "A relaxing class focused on flexibility, breathing, and balance.",
            trainers: ["Alice", "Maya", "Sophia"]
        },
        Cardio: {
            description: "High-energy workouts designed to improve endurance and burn calories.",
            trainers: ["John", "Kevin"]
        },
        Boxing: {
            description: "Improve strength, speed, and discipline through boxing drills.",
            trainers: ["Marco", "Lucas"]
        },
        HIIT: {
            description: "Intense bursts of activity mixed with short recovery periods.",
            trainers: ["Emma", "Chris"]
        },
        Strength: {
            description: "Power and muscle-building workouts using weights and machines.",
            trainers: ["Daniel", "Jared"]
        }
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] p-6 text-white">

            <h1 className="text-3xl font-semibold mb-10">Classes</h1>

            <div className="grid gap-6 max-w-4xl mx-auto">

                {["Yoga", "Cardio", "Boxing", "HIIT", "Strength"].map((name, index) => (
                    <div
                        key={index}
                        className="bg-[#1b1b1b] rounded-2xl p-6 shadow-lg"
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-2xl">{name}</span>

                            <div className="flex flex-col gap-2">
                                <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg">
                                    Book
                                </button>

                                <button
                                    onClick={() =>
                                        setOpenIndex(openIndex === index ? null : index)
                                    }
                                    className="bg-[#333] px-4 py-2 rounded-lg"
                                >
                                    Info
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
                                        <a 
                                            href={`/trainers#${trainer}`} 
                                            className="text-white font-semibold hover:text-yellow-400 transition"
                                        >
                                            {trainer}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}
