export default function Signup() {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
            <div className="bg-gray-800 p-10 rounded-xl shadow-xl w-full max-w-sm text-center">
                <h1 className="text-2xl text-white font-semibold mb-6">Sign Up</h1>

                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full mb-4 px-4 py-3 rounded bg-gray-700 text-white outline-none"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 px-4 py-3 rounded bg-gray-700 text-white outline-none"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 px-4 py-3 rounded bg-gray-700 text-white outline-none"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full mb-6 px-4 py-3 rounded bg-gray-700 text-white outline-none"
                />

                <button className="w-full bg-yellow-500 py-3 rounded font-bold text-black hover:bg-yellow-400">
                    Create Account
                </button>
            </div>
        </div>
    );
}
