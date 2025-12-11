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
            const response = await fetch("http://localhost:8080/api/users/register", { // replace with your backend endpoint
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: fullName,  // or map differently if backend expects 'username'
                    email,
                    password,
                    role: "ROLE_USER"     // default role for normal users
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Registration failed");
            }

            // success
            navigate("/"); // redirect to login page

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
            <div className="bg-[#1b1b1b] p-10 rounded-3xl shadow-xl w-full max-w-md">

                <img 
                    src={logo} 
                    alt="Logo" 
                    className="w-48 h-48 mx-auto mb-8 rounded-2xl object-cover"
                />

                <h1 className="text-3xl font-semibold text-center mb-4 tracking-wide text-white">
                    SIGN UP
                </h1>

                {error && (
                    <div className="bg-red-500 text-white p-2 rounded mb-4">
                        {error}
                    </div>
                )}

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none"
                    />

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

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none"
                    />

                    <button
                        onClick={handleRegister}
                        disabled={loading}
                        className="w-full bg-yellow-500 text-black py-3 rounded-xl text-lg font-semibold hover:bg-yellow-400 transition"
                    >
                        {loading ? "Registering..." : "Create Account"}
                    </button>

                    <button
                        onClick={() => navigate("/")}
                        className="w-full bg-[#333] py-3 rounded-xl hover:bg-[#444] transition"
                    >
                        Back to Login
                    </button>
                </div>

            </div>
        </div>
    );
}
