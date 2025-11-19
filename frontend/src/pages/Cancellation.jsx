export default function Cancellation() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-semibold mb-6">Cancellation / Refund</h1>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Request Cancellation</h2>

        <textarea
          placeholder="Please enter your reason for cancellation"
          className="w-full p-4 mb-4 bg-gray-700 text-white rounded outline-none resize-none h-32"
        />

        <div className="flex gap-4">
          <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">
            Submit Request
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
            Cancel
          </button>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Your Requests</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Request #1 — Submitted on 2025-10-15 — Pending</li>
            <li>Request #2 — Submitted on 2025-08-10 — Approved (Refunded)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
