import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setError("");

        if (!email || !password) {
            setError("Email and password are required");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:8080/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Login failed");
            }

            const userData = await response.json();
            localStorage.setItem("user", JSON.stringify(userData));
            navigate("/dashboard");

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] overflow-hidden p-6">
            <div className="w-full max-w-md bg-[#1b1b1b] rounded-3xl shadow-xl overflow-hidden">
                {/* Logo and Title Section */}
                <div className="p-10 flex flex-col items-center">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="w-48 h-48 mb-6 rounded-2xl object-cover"
                    />
                    <h1 className="text-3xl font-semibold text-white">
                        LOGIN
                    </h1>
                </div>

                {/* Form Section */}
                <div className="px-10 pb-10">
                    {error && (
                        <div className="bg-red-500 text-white p-3 rounded-xl mb-6 text-center font-medium">
                            {error}
                        </div>
                    )}

                    <div className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                            className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
                        />
                    </div>
                </div>

                {/* Login Button */}
                <div className="flex w-full">
                    <div
                        onClick={loading ? null : handleLogin}
                        className={`w-full bg-yellow-500 h-[72px] flex items-center justify-center text-black text-lg font-semibold transition-colors ${
                            loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-yellow-400 cursor-pointer'
                        }`}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </div>
                </div>

                {/* Register Button */}
                <div className="flex w-full">
                    <div
                        onClick={() => navigate("/signup")}
                        className="w-full bg-[#333] h-[72px] flex items-center justify-center text-white text-lg font-semibold hover:bg-[#444] transition-colors cursor-pointer"
                    >
                        Register
                    </div>
                </div>
            </div>
        </div>
    );
}