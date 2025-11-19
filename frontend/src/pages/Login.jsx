export default function Login() {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">

            <div className="bg-gray-800 p-10 rounded-xl shadow-xl w-full max-w-sm text-center">

                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-6"></div>

                <h1 className="text-2xl text-white font-semibold mb-6">Login</h1>

                <input
                    placeholder="Email"
                    className="w-full mb-4 px-4 py-3 rounded bg-gray-700 text-white outline-none"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-6 px-4 py-3 rounded bg-gray-700 text-white outline-none"
                />

                <button className="w-full bg-yellow-500 py-3 rounded font-bold text-black hover:bg-yellow-400">
                    Login
                </button>
            </div>

        </div>
    );
}
