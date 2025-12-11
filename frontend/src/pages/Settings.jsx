import { useState } from "react";

export default function Settings() {
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
        alert("Profile updated!");
    };

    const handleChangePassword = async () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            alert("Please fill all password fields");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("New password and confirmation do not match!");
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
                alert(data.message || "Password change failed");
                return;
            }

            const updatedUser = { ...user, password: newPassword };
            localStorage.setItem("user", JSON.stringify(updatedUser));

            alert("Password changed successfully!");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } catch (err) {
            console.error(err);
            alert("An error occurred while changing the password");
        }
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white p-6">

            <h1 className="text-3xl font-semibold mb-10">Settings</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">

                {/* LEFT MENU */}
                <div className="bg-[#1b1b1b] rounded-3xl p-6 shadow-xl space-y-4 h-fit">
                    <button
                        onClick={() => setActiveTab("Profile")}
                        className={`w-full py-3 rounded-xl text-left px-4 ${activeTab === "Profile" ? "bg-gray-700" : "bg-[#2d2d2d]"} hover:bg-[#3a3a3a]`}
                    >
                        Profile
                    </button>
                    <button
                        onClick={() => setActiveTab("Password")}
                        className={`w-full py-3 rounded-xl text-left px-4 ${activeTab === "Password" ? "bg-gray-700" : "bg-[#2d2d2d]"} hover:bg-[#3a3a3a]`}
                    >
                        Password
                    </button>
                </div>

                {/* RIGHT PANEL */}
                <div className="bg-[#1b1b1b] rounded-3xl p-10 shadow-xl md:col-span-3 min-h-[400px]">
                    {activeTab === "Profile" && (
                        <>
                            <h2 className="text-2xl font-semibold mb-6">Profile Settings</h2>
                            <div className="space-y-6 max-w-xl">
                                <div>
                                    <label className="text-gray-300">Full Name</label>
                                    <input
                                        className="w-full mt-1 p-3 rounded-xl bg-[#2a2a2a] outline-none"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-300">Description</label>
                                    <input
                                        className="w-full mt-1 p-3 rounded-xl bg-[#2a2a2a] outline-none"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Add a description..."
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-300">Email</label>
                                    <input
                                        className="w-full mt-1 p-3 rounded-xl bg-gray-700 text-gray-400 outline-none cursor-not-allowed"
                                        value={email}
                                        disabled
                                    />
                                </div>

                                <button
                                    onClick={handleSaveProfile}
                                    className="bg-yellow-500 text-black px-6 py-3 rounded-xl hover:bg-yellow-400"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </>
                    )}

                    {activeTab === "Password" && (
                        <>
                            <h2 className="text-2xl font-semibold mb-6">Change Password</h2>
                            <div className="space-y-6 max-w-xl">
                                <div>
                                    <label className="text-gray-300">Current Password</label>
                                    <input
                                        type="password"
                                        className="w-full mt-1 p-3 rounded-xl bg-[#2a2a2a] outline-none"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-300">New Password</label>
                                    <input
                                        type="password"
                                        className={`w-full mt-1 p-3 rounded-xl outline-none ${currentPassword ? "bg-[#2a2a2a]" : "bg-gray-700 text-gray-400 cursor-not-allowed"}`}
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        disabled={!currentPassword}
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-300">Confirm New Password</label>
                                    <input
                                        type="password"
                                        className={`w-full mt-1 p-3 rounded-xl outline-none ${currentPassword ? "bg-[#2a2a2a]" : "bg-gray-700 text-gray-400 cursor-not-allowed"}`}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        disabled={!currentPassword}
                                    />
                                </div>

                                <button
                                    onClick={handleChangePassword}
                                    className="bg-yellow-500 text-black px-6 py-3 rounded-xl hover:bg-yellow-400"
                                >
                                    Change Password
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
