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
        <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] overflow-hidden">
            <div className="w-full max-w-md p-8 md:p-10 bg-[#1b1b1b] rounded-3xl shadow-xl flex flex-col items-center">
                <img 
                    src={logo} 
                    alt="Logo" 
                    className="w-48 h-48 mb-8 rounded-2xl object-cover"
                />
                <h1 className="text-3xl font-semibold text-center mb-8 text-white">
                    LOGIN
                </h1>

                {error && (
                    <div className="bg-red-500 text-white p-2 rounded mb-4 w-full text-center">{error}</div>
                )}

                <div className="w-full space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none"
                    />

                    <button
                        onClick={handleLogin}
                        disabled={loading}
                        className="w-full bg-yellow-500 text-black py-3 rounded-xl text-lg font-semibold hover:bg-yellow-400 transition"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                    <button
                        onClick={() => navigate("/signup")}
                        className="w-full bg-[#333] text-white py-3 rounded-xl hover:bg-[#444] transition"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}
