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
            const trainersResponse = await fetch('http://localhost:8080/api/trainers');
            const trainers = await trainersResponse.json();

            const trainersBySpecialization = {
                'Strength': [],
                'Cardio': [],
                'HIIT': [],
                'Yoga': [],
                'Pilates': [],
                'Stretching': [],
                'Senior Fitness': [],
                'Mobility & Recovery': [],
                'Meditation': []
            };

            trainers.forEach(trainer => {
                const fullName = `${trainer.firstName} ${trainer.lastName}`;
                const spec = trainer.specialization || trainer.specialty;

                if (spec === 'Strength' || spec === 'Strength Training') trainersBySpecialization['Strength'].push(fullName);
                else if (spec === 'Cardio') trainersBySpecialization['Cardio'].push(fullName);
                else if (spec === 'HIIT') trainersBySpecialization['HIIT'].push(fullName);
                else if (spec === 'Yoga') trainersBySpecialization['Yoga'].push(fullName);
                else if (spec === 'Pilates') trainersBySpecialization['Pilates'].push(fullName);
                else if (spec === 'Stretching') trainersBySpecialization['Stretching'].push(fullName);
                else if (spec === 'Senior Fitness') trainersBySpecialization['Senior Fitness'].push(fullName);
                else if (spec === 'Mobility & Recovery') trainersBySpecialization['Mobility & Recovery'].push(fullName);
                else if (spec === 'Meditation') trainersBySpecialization['Meditation'].push(fullName);
            });

            const categories = [
                {
                    category: "Traditional / General Fitness",
                    classes: [
                        { name: "Strength Training", description: "Build muscle and increase strength through weightlifting and resistance exercises.", duration: "55 min", difficulty: "Intermediate - Advanced", trainers: trainersBySpecialization['Strength'] },
                        { name: "Cardio", description: "Boost stamina and burn calories with high-energy cardiovascular workouts.", duration: "45 min", difficulty: "All Levels", trainers: trainersBySpecialization['Cardio'] },
                        { name: "HIIT (High-Intensity Interval Training)", description: "Push your limits with short bursts of intense exercise followed by recovery periods.", duration: "30 min", difficulty: "Advanced", trainers: trainersBySpecialization['HIIT'] }
                    ]
                },
                {
                    category: "Mind & Body",
                    classes: [
                        { name: "Yoga", description: "Improve flexibility, balance, and mindfulness through guided yoga sessions.", duration: "60 min", difficulty: "Beginner - Intermediate", trainers: trainersBySpecialization['Yoga'] },
                        { name: "Pilates", description: "Strengthen your core and improve posture using controlled movements.", duration: "50 min", difficulty: "Beginner - Intermediate", trainers: trainersBySpecialization['Pilates'] },
                        { name: "Stretching", description: "Enhance flexibility and reduce muscle tension with focused stretching routines.", duration: "40 min", difficulty: "All Levels", trainers: trainersBySpecialization['Stretching'] }
                    ]
                },
                {
                    category: "Recovery & Low Impact",
                    classes: [
                        { name: "Senior Fitness", description: "Gentle exercises to maintain mobility, strength, and overall health for seniors.", duration: "45 min", difficulty: "Beginner", trainers: trainersBySpecialization['Senior Fitness'] },
                        { name: "Mobility & Recovery", description: "Aid muscle recovery and improve joint mobility with low-impact exercises.", duration: "40 min", difficulty: "All Levels", trainers: trainersBySpecialization['Mobility & Recovery'] },
                        { name: "Meditation", description: "Relax your mind, reduce stress, and improve focus through guided meditation sessions.", duration: "30 min", difficulty: "All Levels", trainers: trainersBySpecialization['Meditation'] }
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
        const bookedClasses = JSON.parse(localStorage.getItem("bookedClasses") || "[]");
        bookedClasses.push({ className, trainer, category: "Class Session" });
        localStorage.setItem("bookedClasses", JSON.stringify(bookedClasses));
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
        <div className="min-h-screen bg-[#0f0f0f] p-6 text-white">
            <h1 className="text-3xl font-semibold mb-10 text-center">Classes</h1>

            {classCategories.map((cat, catIndex) => (
                <div key={catIndex} className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-center">{cat.category}</h2>

                    <div className="grid gap-6 max-w-4xl mx-auto">
                        {cat.classes.map((classItem, classIndex) => {
                            const key = `${catIndex}-${classIndex}`;
                            return (
                                <div key={key} className="bg-[#1b1b1b] rounded-2xl shadow-lg overflow-hidden">
                                    <div className="p-6 flex justify-between items-center">
                                        <span className="text-2xl">{classItem.name}</span>

                                        <div className="flex flex-col gap-3">
                                            <button className="bg-yellow-500 text-black px-5 py-3 rounded-lg hover:bg-yellow-400 transition">
                                                Book
                                            </button>
                                            <button 
                                                onClick={() => toggleExpand(catIndex, classIndex)}
                                                className="bg-[#333] px-5 py-3 rounded-lg hover:bg-[#444] transition"
                                            >
                                                {expandedClass === key ? 'Hide' : 'Info'}
                                            </button>
                                        </div>
                                    </div>

                                    <div 
                                        className="transition-all duration-500 ease-in-out overflow-hidden"
                                        style={{ maxHeight: expandedClass === key ? '500px' : '0px', opacity: expandedClass === key ? 1 : 0 }}
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
                                                    {classItem.trainers.length > 0 ? (
                                                        classItem.trainers.map((trainer, i) => (
                                                            <span
                                                                key={i}
                                                                className="bg-[#2a2a2a] px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-yellow-500"
                                                                onClick={() => {
                                                                    localStorage.setItem("scrollToTrainer", trainer);
                                                                    window.location.href = "/trainers";
                                                                }}
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
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}
