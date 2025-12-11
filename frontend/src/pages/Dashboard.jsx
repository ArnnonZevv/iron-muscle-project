import defaultProfile from '../assets/default.png';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const fullName = user?.username || "John Doe";
  const description = user?.description || "";

  const bookedClasses = JSON.parse(localStorage.getItem("bookedClasses") || "[]");

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">

      <h1 className="text-3xl font-semibold mb-10">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Profile */}
        <div className="bg-[#1b1b1b] rounded-3xl p-8 shadow-xl">
          <div className="bg-[#1b1b1b] rounded-3xl p-8 flex flex-col items-center">
            <img 
              src={defaultProfile} 
              alt="Profile" 
              className="w-40 h-40 rounded-3xl mb-6 object-cover"
            />
            <h2 className="text-2xl font-semibold">{fullName}</h2>
            {description && <p className="text-gray-400">{description}</p>}
            <a href="/settings">
              <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-xl hover:bg-yellow-400">
                Edit
              </button>
            </a>
          </div>
        </div>

        {/* Shortcuts */}
        <div className="bg-[#1b1b1b] rounded-3xl p-8 shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Shortcuts</h2>
          <div className="space-y-4">
            <a href="/membership" className="block">
              <button className="w-full bg-[#333] p-4 rounded-xl text-left">
                Membership
              </button>
            </a>
            <a href="/payments" className="block">
              <button className="w-full bg-[#333] p-4 rounded-xl text-left">
                Payments
              </button>
            </a>
            <a href="/classes" className="block">
              <button className="w-full bg-[#333] p-4 rounded-xl text-left">
                Classes
              </button>
            </a>
            <a href="/trainers" className="block">
              <button className="w-full bg-[#333] p-4 rounded-xl text-left">
                Trainers
              </button>
            </a>
          </div>
        </div>

      </div>

      {/* Booked Classes */}
      <div className="bg-[#1b1b1b] rounded-3xl p-8 shadow-xl mt-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Booked Classes</h2>
        {bookedClasses.length > 0 ? (
          <ul className="space-y-2">
            {bookedClasses.map((c, i) => (
              <li key={i} className="bg-[#2a2a2a] p-3 rounded-xl flex justify-between items-center">
                <div>
                  <p className="font-semibold">{c.className}</p>
                  <p className="text-gray-400 text-sm">{c.trainer} – {c.category}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No classes booked yet.</p>
        )}
      </div>

    </div>
  );
}
