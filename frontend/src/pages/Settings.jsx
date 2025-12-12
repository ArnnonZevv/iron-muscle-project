import { useState } from "react";
import { useToast } from "../ToastContext";

export default function Settings() {
    const { addToast } = useToast();
    const user = JSON.parse(localStorage.getItem("user"));
    const [fullName, setFullName] = useState(user?.username || "");
    const [description, setDescription] = useState(user?.description || "");
    const email = user?.email || "";

    const [activeTab, setActiveTab] = useState("Profile");

    // Password change state
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSaveProfile = () => {
        const updatedUser = { ...user, username: fullName, description };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        addToast("Profile updated!", "success");
    };

    const handleChangePassword = async () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            addToast("Please fill all password fields", "error");
            return;
        }

        if (newPassword !== confirmPassword) {
            addToast("New password and confirmation do not match!", "error");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/users/change-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: user.email,
                    currentPassword,
                    newPassword
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                addToast(data.message || "Password change failed", "error");
                return;
            }

            const updatedUser = { ...user, password: newPassword };
            localStorage.setItem("user", JSON.stringify(updatedUser));

            addToast("Password changed successfully!", "success");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } catch (err) {
            console.error(err);
            addToast("An error occurred while changing the password", "error");
        }
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white p-6 pt-11">
            <h1 className="text-3xl font-semibold mb-10">Settings</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

                {/* LEFT MENU */}
                <div className="bg-[#1b1b1b] rounded-3xl shadow-xl overflow-hidden h-fit">
                    <div
                        onClick={() => setActiveTab("Profile")}
                        className={`w-full h-[72px] flex items-center px-6 font-medium cursor-pointer transition-colors ${
                            activeTab === "Profile" 
                                ? "bg-yellow-500 text-black" 
                                : "bg-[#1b1b1b] text-white hover:bg-[#2a2a2a]"
                        }`}
                    >
                        Profile
                    </div>
                    <div
                        onClick={() => setActiveTab("Password")}
                        className={`w-full h-[72px] flex items-center px-6 font-medium cursor-pointer transition-colors ${
                            activeTab === "Password" 
                                ? "bg-yellow-500 text-black" 
                                : "bg-[#1b1b1b] text-white hover:bg-[#2a2a2a]"
                        }`}
                    >
                        Password
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="bg-[#1b1b1b] rounded-3xl p-10 shadow-xl md:col-span-3">
                    {activeTab === "Profile" && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-8">Profile Settings</h2>
                            <div className="space-y-6 max-w-xl">
                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">Full Name</label>
                                    <input
                                        className="w-full p-3 rounded-xl bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">Description</label>
                                    <input
                                        className="w-full p-3 rounded-xl bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Add a description..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">Email</label>
                                    <input
                                        className="w-full p-3 rounded-xl bg-gray-700 text-gray-400 outline-none cursor-not-allowed"
                                        value={email}
                                        disabled
                                    />
                                </div>

                                <button
                                    onClick={handleSaveProfile}
                                    className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-colors mt-4"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === "Password" && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-8">Change Password</h2>
                            <div className="space-y-6 max-w-xl">
                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">Current Password</label>
                                    <input
                                        type="password"
                                        className="w-full p-3 rounded-xl bg-[#2a2a2a] text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">New Password</label>
                                    <input
                                        type="password"
                                        className={`w-full p-3 rounded-xl outline-none transition-shadow ${
                                            currentPassword 
                                                ? "bg-[#2a2a2a] text-white focus:ring-2 focus:ring-yellow-500" 
                                                : "bg-gray-700 text-gray-400 cursor-not-allowed"
                                        }`}
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        disabled={!currentPassword}
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">Confirm New Password</label>
                                    <input
                                        type="password"
                                        className={`w-full p-3 rounded-xl outline-none transition-shadow ${
                                            currentPassword 
                                                ? "bg-[#2a2a2a] text-white focus:ring-2 focus:ring-yellow-500" 
                                                : "bg-gray-700 text-gray-400 cursor-not-allowed"
                                        }`}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        disabled={!currentPassword}
                                    />
                                </div>

                                <button
                                    onClick={handleChangePassword}
                                    className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-colors mt-4"
                                >
                                    Change Password
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}