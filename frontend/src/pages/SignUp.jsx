import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';

export default function Signup() {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        setError("");

        // Simple validation
        if (!fullName || !email || !password || !confirmPassword) {
            setError("All fields are required");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:8080/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: fullName,
                    email,
                    password,
                    role: "ROLE_USER"
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Registration failed");
            }

            // success
            navigate("/");

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
                        SIGN UP
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
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
                        />

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
                            className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
                        />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleRegister()}
                            className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
                        />
                    </div>
                </div>

                {/* Create Account Button */}
                <div className="flex w-full">
                    <div
                        onClick={loading ? null : handleRegister}
                        className={`w-full bg-yellow-500 h-[72px] flex items-center justify-center text-black text-lg font-semibold transition-colors ${
                            loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-yellow-400 cursor-pointer'
                        }`}
                    >
                        {loading ? "Registering..." : "Create Account"}
                    </div>
                </div>

                {/* Back to Login Button */}
                <div className="flex w-full">
                    <div
                        onClick={() => navigate("/")}
                        className="w-full bg-[#333] h-[72px] flex items-center justify-center text-white text-lg font-semibold hover:bg-[#444] transition-colors cursor-pointer"
                    >
                        Back to Login
                    </div>
                </div>
            </div>
        </div>
    );
}