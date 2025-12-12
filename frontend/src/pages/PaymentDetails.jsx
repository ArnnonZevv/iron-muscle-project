import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function PaymentDetails() {
  const { membershipId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const memberId = state?.memberId; // received from Membership.jsx
  const [membership, setMembership] = useState(null);
  const [method, setMethod] = useState("GCash");
  const [details, setDetails] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/memberships/${membershipId}`)
      .then((res) => res.json())
      .then((data) => setMembership(data))
      .catch((err) => console.error(err));
  }, [membershipId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!membership || !memberId) return;

    await fetch(
      `http://localhost:8080/api/payments?memberId=${memberId}&membershipId=${membership.id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: membership.price,
          method: method,
        }),
      }
    );

    navigate("/payments");
  };

  if (!membership) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6 pt-11">
      <h1 className="text-3xl font-semibold mb-6">Payment Details</h1>

      <div className="bg-[#1b1b1b] p-8 rounded-3xl max-w-xl mx-auto">
        <p className="text-xl mb-4">
          <span className="font-bold">{membership.name}</span> – ₱{membership.price}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-400">Payment Method</label>
            <select
              className="w-full p-3 rounded-xl bg-[#2a2a2a]"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option>GCash</option>
              <option>Credit Card</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-400">Account / Number</label>
            <input
              className="w-full p-3 rounded-xl bg-[#2a2a2a]"
              placeholder="GCash number or Card number"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
            />
          </div>

          <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 w-full">
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
}
