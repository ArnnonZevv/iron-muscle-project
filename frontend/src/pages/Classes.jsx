import { useState } from 'react';

export default function Classes() {
    const [expandedClass, setExpandedClass] = useState(null);

    const classes = [
        {
            name: "Yoga",
            description: "Improve flexibility, balance, and mindfulness through guided yoga sessions suitable for all levels.",
            duration: "60 min",
            difficulty: "Beginner - Intermediate",
            trainers: ["Sarah Martinez", "David Chen"]
        },
        {
            name: "Cardio",
            description: "High-energy cardiovascular workouts to boost your stamina and burn calories effectively.",
            duration: "45 min",
            difficulty: "All Levels",
            trainers: ["Mike Johnson", "Emily Rodriguez"]
        },
        {
            name: "Boxing",
            description: "Learn boxing techniques while getting an intense full-body workout. Gloves provided.",
            duration: "50 min",
            difficulty: "Intermediate - Advanced",
            trainers: ["Marcus Williams", "Ana Silva"]
        },
        {
            name: "HIIT",
            description: "Intense interval training that maximizes calorie burn in minimal time. Push your limits!",
            duration: "30 min",
            difficulty: "Advanced",
            trainers: ["Jessica Lee", "Tom Anderson"]
        },
        {
            name: "Strength",
            description: "Build muscle and increase power with guided weightlifting and resistance training.",
            duration: "55 min",
            difficulty: "Intermediate - Advanced",
            trainers: ["Chris Thompson", "Maria Garcia"]
        }
    ];

    const toggleExpand = (index) => {
        setExpandedClass(expandedClass === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] p-6 text-white">
            <h1 className="text-3xl font-semibold mb-10">Classes</h1>

            <div className="grid gap-6 max-w-4xl mx-auto">
                {classes.map((classItem, index) => (
                    <div
                        key={index}
                        className="bg-[#1b1b1b] rounded-2xl shadow-lg overflow-hidden"
                    >
                        <div className="p-6 flex justify-between items-center">
                            <span className="text-2xl">{classItem.name}</span>

                            <div className="flex flex-col gap-2">
                                <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition">
                                    Book
                                </button>
                                <button 
                                    onClick={() => toggleExpand(index)}
                                    className="bg-[#333] px-4 py-2 rounded-lg hover:bg-[#444] transition"
                                >
                                    {expandedClass === index ? 'Hide' : 'Info'}
                                </button>
                            </div>
                        </div>

                        <div 
                            className="transition-all duration-500 ease-in-out overflow-hidden"
                            style={{
                                maxHeight: expandedClass === index ? '500px' : '0px',
                                opacity: expandedClass === index ? 1 : 0
                            }}
                        >
                            <div className="px-6 pb-6 border-t border-[#333] pt-4">
                                <p className="text-gray-300 mb-4">{classItem.description}</p>
                                
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Duration</p>
                                        <p className="text-white">{classItem.duration}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Difficulty</p>
                                        <p className="text-white">{classItem.difficulty}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500 mb-2">Trainers</p>
                                    <div className="flex flex-wrap gap-2">
                                        {classItem.trainers.map((trainer, i) => (
                                            <span 
                                                key={i}
                                                className="bg-[#2a2a2a] px-3 py-1 rounded-full text-sm"
                                            >
                                                {trainer}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}