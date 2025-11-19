export default function Signup() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
            <div className="bg-[#1b1b1b] p-10 rounded-3xl shadow-xl w-full max-w-md">

                <h1 className="text-3xl font-semibold text-center mb-8 tracking-wide">
                    SIGN UP
                </h1>

                <div className="space-y-5">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none"
                    />

                    <button
                        onClick={() => (window.location.href = "/dashboard")}
                        className="w-full bg-yellow-500 text-black py-3 rounded-xl text-lg font-semibold hover:bg-yellow-400 transition"
                    >
                        Create Account
                    </button>

                    <button
                        onClick={() => (window.location.href = "/")}
                        className="w-full bg-[#333] py-3 rounded-xl hover:bg-[#444] transition"
                    >
                        Back to Login
                    </button>
                </div>

            </div>
        </div>
    );
}
