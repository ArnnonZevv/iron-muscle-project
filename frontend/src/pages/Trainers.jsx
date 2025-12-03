import { useEffect } from "react";

export default function Trainers() {
    const trainers = [
        "Alice", "Maya", "Sophia",
        "John", "Kevin",
        "Marco", "Lucas",
        "Emma", "Chris",
        "Daniel", "Jared",
        "Alan", "Christopher", "Hailey"
    ];

    useEffect(() => {
        // Check if there's a hash in the URL
        const hash = window.location.hash;
        if (hash) {
            const el = document.querySelector(hash); // e.g., #Alice
            if (el) {
                el.scrollIntoView({ behavior: "smooth" }); // smooth scroll
            }
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#0f0f0f] p-6 text-white scroll-smooth">

            <h1 className="text-3xl font-semibold mb-10">Trainers</h1>

            <div className="grid gap-6 max-w-4xl mx-auto">

                {trainers.map((name, index) => (
                    <div
                        key={index}
                        id={name} // <-- hash link target
                        className="bg-[#1b1b1b] rounded-2xl p-6 flex gap-6 shadow-lg"
                    >
                        <div className="w-24 h-24 bg-gray-700 rounded-2xl"></div>

                        <div className="flex flex-col justify-between">
                            <p className="text-2xl font-bold text-white">{name}</p>
                            <p className="text-gray-400 max-w-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer id lorem et sapien pellentesque volutpat.
                            </p>

                            <button className="self-start bg-yellow-500 text-black px-4 py-2 rounded-xl hover:bg-yellow-400 transition">
                                Book Session
                            </button>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}
