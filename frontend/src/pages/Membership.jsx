export default function Membership() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white p-6">

            <h1 className="text-4xl font-semibold text-center mb-10">MEMBERSHIPS</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                {[
                    { title: "Premium", price: "$XX.XX" },
                    { title: "Standard", price: "$XX.XX" },
                ].map((plan, index) => (
                    <div key={index} className="bg-[#1b1b1b] rounded-3xl p-8 shadow-xl">
                        <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
                        <p className="text-3xl font-bold text-yellow-400 mb-4">{plan.price}</p>

                        <p className="text-gray-400 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer id lorem et sapien pellentesque volutpat.
                        </p>

                        <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400">
                            Subscribe
                        </button>
                    </div>
                ))}

            </div>
        </div>
    );
}
