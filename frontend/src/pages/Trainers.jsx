import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function Trainers() {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  const trainerRefs = useRef({}); // for scrolling

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/trainers");
        setTrainers(response.data);
      } catch (err) {
        console.error("Error fetching trainers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  useEffect(() => {
    // Scroll to trainer if specified
    const scrollTo = localStorage.getItem("scrollToTrainer");
    if (scrollTo && trainerRefs.current[scrollTo]) {
      trainerRefs.current[scrollTo].scrollIntoView({ behavior: "smooth", block: "center" });
      localStorage.removeItem("scrollToTrainer");
    }
  }, [trainers]);

  const handleBookSession = (trainer) => {
    const bookedClasses = JSON.parse(localStorage.getItem("bookedClasses") || "[]");
    bookedClasses.push({
      className: trainer.specialization, // use specialization instead of "Custom Session"
      trainer: `${trainer.firstName} ${trainer.lastName}`,
      category: "Trainer Session",
    });
    localStorage.setItem("bookedClasses", JSON.stringify(bookedClasses));
    alert(`Booked a ${trainer.specialization} session with ${trainer.firstName} ${trainer.lastName}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] p-6 text-white flex items-center justify-center">
        <p className="text-xl">Loading trainers...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] p-6 text-white">
      <h1 className="text-3xl font-semibold mb-10 text-center">Trainers</h1>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            ref={(el) => (trainerRefs.current[`${trainer.firstName} ${trainer.lastName}`] = el)}
            className="bg-[#1b1b1b] rounded-2xl p-6 flex gap-6 shadow-lg"
          >
            <div className="w-24 h-24 bg-gray-700 rounded-2xl flex-shrink-0"></div>

            <div className="flex flex-col justify-between flex-1">
              <div className="mb-4">
                <p className="text-xl font-semibold">{trainer.firstName} {trainer.lastName}</p>
                <p className="text-gray-400 mt-2">{trainer.specialization}</p>
              </div>

              <button
                onClick={() => handleBookSession(trainer)}
                className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
              >
                Book Session
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
