import { useState, useEffect } from 'react';

export default function Classes() {
    const [expandedClass, setExpandedClass] = useState(null);
    const [classCategories, setClassCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchClassesWithTrainers();
    }, []);

    const fetchClassesWithTrainers = async () => {
        try {
            const categories = [
                {
                    category: "Traditional / General Fitness",
                    classes: [
                        { name: "Strength Training", description: "Build muscle and increase strength through weightlifting and resistance exercises.", duration: "55 min", difficulty: "Intermediate - Advanced", trainers: ["Mike Johnson", "Sara Miller"] },
                        { name: "Cardio", description: "Boost stamina and burn calories with high-energy cardiovascular workouts.", duration: "45 min", difficulty: "All Levels", trainers: ["John Doe", "Hailey Brown"] },
                        { name: "HIIT (High-Intensity Interval Training)", description: "Push your limits with short bursts of intense exercise followed by recovery periods.", duration: "30 min", difficulty: "Advanced", trainers: ["Luke Wilson", "Emma Davis"] }
                    ]
                },
                {
                    category: "Mind & Body",
                    classes: [
                        { name: "Yoga", description: "Improve flexibility, balance, and mindfulness through guided yoga sessions.", duration: "60 min", difficulty: "Beginner - Intermediate", trainers: ["Emily Rodriguez", "Sophia Taylor"] },
                        { name: "Pilates", description: "Strengthen your core and improve posture using controlled movements.", duration: "50 min", difficulty: "Beginner - Intermediate", trainers: ["Daniel Lee", "Olivia Martin"] },
                        { name: "Stretching", description: "Enhance flexibility and reduce muscle tension with focused stretching routines.", duration: "40 min", difficulty: "All Levels", trainers: ["Tom Anderson", "Grace Hall"] }
                    ]
                },
                {
                    category: "Recovery & Low Impact",
                    classes: [
                        { name: "Senior Fitness", description: "Gentle exercises to maintain mobility, strength, and overall health for seniors.", duration: "45 min", difficulty: "Beginner", trainers: ["Henry Walker", "Chloe Young"] },
                        { name: "Mobility & Recovery", description: "Aid muscle recovery and improve joint mobility with low-impact exercises.", duration: "40 min", difficulty: "All Levels", trainers: ["Jessica Lee", "Ethan Lewis"] },
                        { name: "Meditation", description: "Relax your mind, reduce stress, and improve focus through guided meditation sessions.", duration: "30 min", difficulty: "All Levels", trainers: ["Ana Silva", "Liam Clark"] }
                    ]
                }
            ];

            setClassCategories(categories);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching trainers:', error);
            setLoading(false);
        }
    };

    const toggleExpand = (categoryIndex, classIndex) => {
        const key = `${categoryIndex}-${classIndex}`;
        setExpandedClass(expandedClass === key ? null : key);
    };

    const handleBookSession = (className, trainer) => {
        alert(`Booked ${className} session with ${trainer}`);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0f0f0f] p-6 text-white flex items-center justify-center">
                <p className="text-xl">Loading classes...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0f0f0f] p-6 text-white pt-11">
            <h1 className="text-3xl font-semibold mb-10 text-center">Classes</h1>

            {classCategories.map((cat, catIndex) => (
                <div key={catIndex} className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-center">{cat.category}</h2>

                    <div className="grid gap-6 max-w-4xl mx-auto">
                        {cat.classes.map((classItem, classIndex) => {
                            const key = `${catIndex}-${classIndex}`;
                            const isExpanded = expandedClass === key;
                            
                            return (
                                <div key={key} className="bg-[#1b1b1b] rounded-3xl shadow-xl overflow-hidden">
                                    {/* Main class info with Book button */}
                                    <div className="flex w-full">
                                        {/* Class Name */}
                                        <div className="flex-1 bg-[#1b1b1b] p-6 ">
                                            <span className="text-2xl font-semibold">{classItem.name}</span>
                                        </div>

                                        {/* Book Button */}
                                        <div
                                            className="bg-yellow-500 w-32 py-6 flex items-center justify-center text-black font-semibold hover:bg-yellow-400 transition-colors cursor-pointer"
                                            onClick={() => handleBookSession(classItem.name, classItem.trainers[0])}
                                        >
                                            Book
                                        </div>
                                    </div>

                                    {/* Expanded Details */}
                                    <div 
                                        className="transition-all duration-500 ease-in-out overflow-hidden"
                                        style={{ 
                                            maxHeight: isExpanded ? '500px' : '0px', 
                                            opacity: isExpanded ? 1 : 0 
                                        }}
                                    >
                                        <div className="px-6 py-6 border-t border-[#333]">
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
                                                    {classItem.trainers.length > 0 ? (
                                                        classItem.trainers.map((trainer, i) => (
                                                            <span
                                                                key={i}
                                                                className="bg-[#2a2a2a] px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-yellow-500 hover:text-black transition-colors"
                                                            >
                                                                {trainer}
                                                            </span>
                                                        ))
                                                    ) : (
                                                        <span className="text-gray-500 text-sm">No trainers assigned yet</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Info Button at Bottom */}
                                    <div className="flex w-full">
                                        <div className="flex-1"></div>
                                        <div
                                            className="bg-[#333] w-32 py-6 flex items-center justify-center text-white font-medium hover:bg-[#444] transition-colors cursor-pointer"
                                            onClick={() => toggleExpand(catIndex, classIndex)}
                                        >
                                            {isExpanded ? 'Hide' : 'Info'}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}