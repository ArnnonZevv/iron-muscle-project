import { useState } from "react";
import defaultProfile from "../assets/default.png";
import ConfirmModal from "../components/ConfirmModal";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const fullName = user?.username || "John Doe";
  const description = user?.description || "";

  const [bookedClasses, setBookedClasses] = useState(
    JSON.parse(localStorage.getItem("bookedClasses") || "[]")
  );

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedClassIndex, setSelectedClassIndex] = useState(null);

  const handleRemoveClick = (index) => {
    setSelectedClassIndex(index);
    setModalOpen(true);
  };

  const handleConfirmRemove = () => {
    const updatedClasses = [...bookedClasses];
    updatedClasses.splice(selectedClassIndex, 1);
    setBookedClasses(updatedClasses);
    localStorage.setItem("bookedClasses", JSON.stringify(updatedClasses));
    setModalOpen(false);
    setSelectedClassIndex(null);
  };

  const handleCancelRemove = () => {
    setModalOpen(false);
    setSelectedClassIndex(null);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6 pt-11">
      <h1 className="text-3xl font-semibold mb-10">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* Profile */}
        <div className="bg-[#1b1b1b] rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 flex flex-col items-center">
            <img
              src={defaultProfile}
              alt="Profile"
              className="w-40 h-40 rounded-3xl mb-6 object-cover"
            />
            <h2 className="text-2xl font-semibold">{fullName}</h2>
            {description && <p className="text-gray-400 mt-2">{description}</p>}
          </div>

          {/* Edit Button at Bottom */}
          <a href="/settings" className="block w-full">
            <div className="bg-yellow-500 text-black font-semibold h-[72px] flex items-center justify-center text-lg hover:bg-yellow-400 transition-colors cursor-pointer">
              Edit
            </div>
          </a>
        </div>

        {/* Shortcuts */}
        <div className="bg-[#1b1b1b] rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6 text-center border-b border-[#2a2a2a]">
            <h2 className="text-xl font-semibold">Shortcuts</h2>
          </div>
          
          <div className="flex flex-col">
            <a href="/membership" className="block">
              <div className="bg-[#1b1b1b] text-white font-medium h-[72px] flex items-center px-6 border-b border-[#2a2a2a] hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer">
                Membership
              </div>
            </a>
            <a href="/payments" className="block">
              <div className="bg-[#1b1b1b] text-white font-medium h-[72px] flex items-center px-6 border-b border-[#2a2a2a] hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer">
                Payments
              </div>
            </a>
            <a href="/classes" className="block">
              <div className="bg-[#1b1b1b] text-white font-medium h-[72px] flex items-center px-6 border-b border-[#2a2a2a] hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer">
                Classes
              </div>
            </a>
            <a href="/trainers" className="block">
              <div className="bg-[#1b1b1b] text-white font-medium h-[72px] flex items-center px-6 hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer">
                Trainers
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Booked Classes */}
      <div className="bg-[#1b1b1b] rounded-3xl shadow-xl mt-8 max-w-6xl mx-auto overflow-hidden">
        <div className="p-6 text-center border-b border-[#2a2a2a]">
          <h2 className="text-xl font-semibold">Booked Classes</h2>
        </div>

        {bookedClasses.length > 0 ? (
          <div className="w-full">
            {bookedClasses.map((c, i) => (
              <div key={i} className="flex w-full border-b border-[#2a2a2a] last:border-b-0">
                {/* Class Info */}
                <div className="flex-1 bg-[#1b1b1b] p-6">
                  <p className="font-semibold text-lg">{c.className}</p>
                  <p className="text-gray-400 text-sm mt-1">
                    {c.trainer} – {c.category}
                  </p>
                </div>

                {/* Cancel Button */}
                <div
                  className="bg-red-500 w-32 flex items-center justify-center text-white font-semibold hover:bg-red-400 transition-colors cursor-pointer"
                  onClick={() => handleRemoveClick(i)}
                >
                  Cancel
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No classes booked yet.</p>
        )}
      </div>

      {/* Confirm Modal */}
      <ConfirmModal
        open={modalOpen}
        message="Are you sure you want to remove this class?"
        onConfirm={handleConfirmRemove}
        onCancel={handleCancelRemove}
      />
    </div>
  );
}