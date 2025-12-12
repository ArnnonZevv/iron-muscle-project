import { useEffect, useState, useRef } from "react";
import { useToast } from "../ToastContext";
import axios from "axios";
import ConfirmModal from "../components/ConfirmModal";

export default function Trainers() {
  const { addToast } = useToast();
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  const trainerRefs = useRef({});

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

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

  const handleBookClick = (trainer) => {
    setSelectedTrainer(trainer);
    setModalOpen(true);
  };

  const handleConfirmBook = () => {
    if (selectedTrainer) {
      const bookedClasses = JSON.parse(localStorage.getItem("bookedClasses") || "[]");
      bookedClasses.push({
        className: selectedTrainer.specialization,
        trainer: `${selectedTrainer.firstName} ${selectedTrainer.lastName}`,
        category: "Trainer Session",
      });
      localStorage.setItem("bookedClasses", JSON.stringify(bookedClasses));
      addToast(
        `Booked a ${selectedTrainer.specialization} session with ${selectedTrainer.firstName} ${selectedTrainer.lastName}`,
        "success"
      );
    }
    setModalOpen(false);
    setSelectedTrainer(null);
  };

  const handleCancelBook = () => {
    setModalOpen(false);
    setSelectedTrainer(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] p-6 text-white flex items-center justify-center">
        <p className="text-xl">Loading trainers...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] p-6 text-white pt-11">
      <h1 className="text-3xl font-semibold mb-10 text-center">Trainers</h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            ref={(el) => (trainerRefs.current[`${trainer.firstName} ${trainer.lastName}`] = el)}
            className="bg-[#1b1b1b] rounded-3xl shadow-xl overflow-hidden"
          >
            {/* Main trainer info */}
            <div className="flex w-full">
              {/* Profile Image */}
              <div className="w-32 h-32 bg-gray-700 flex-shrink-0"></div>

              {/* Trainer Details */}
              <div className="flex-1 bg-[#1b1b1b] p-6 flex flex-col justify-center">
                <p className="text-xl font-semibold">{trainer.firstName} {trainer.lastName}</p>
                <p className="text-gray-400 mt-1">{trainer.specialization}</p>
              </div>
            </div>

            {/* Book Session Button at Bottom */}
            <div className="flex w-full">
              <div
                className="w-full bg-yellow-500 h-[72px] flex items-center justify-center text-black font-semibold hover:bg-yellow-400 transition-colors cursor-pointer"
                onClick={() => handleBookClick(trainer)}
              >
                Book Session
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Confirm Modal */}
      <ConfirmModal
        open={modalOpen}
        message={`Are you sure you want to book a ${selectedTrainer?.specialization} session with ${selectedTrainer?.firstName} ${selectedTrainer?.lastName}?`}
        onConfirm={handleConfirmBook}
        onCancel={handleCancelBook}
      />
    </div>
  );
}
