import { useState } from "react";

export default function Settings() {
    const [activeTab, setActiveTab] = useState('general');
    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        language: 'en',
        notifications: true
    });
    const [saved, setSaved] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        setSaved(false);
    };

    const handleSave = () => {
        // In real app, make API call to save settings
        console.log('Saving settings:', formData);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
        alert('Settings saved successfully!');
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'general':
                return (
                    <div className="space-y-6 max-w-xl">
                        <div>
                            <label className="text-gray-300 block mb-2">Full Name</label>
                            <input 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl bg-[#2a2a2a] outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-gray-300 block mb-2">Email</label>
                            <input 
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl bg-[#2a2a2a] outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-gray-300 block mb-2">
                                <input 
                                    type="checkbox"
                                    name="notifications"
                                    checked={formData.notifications}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Receive email notifications
                            </label>
                        </div>
                    </div>
                );

            case 'password':
                return (
                    <div className="space-y-6 max-w-xl">
                        <div>
                            <label className="text-gray-300 block mb-2">Current Password</label>
                            <input 
                                name="currentPassword"
                                type="password"
                                value={formData.currentPassword}
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl bg-[#2a2a2a] outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-gray-300 block mb-2">New Password</label>
                            <input 
                                name="newPassword"
                                type="password"
                                value={formData.newPassword}
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl bg-[#2a2a2a] outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-gray-300 block mb-2">Confirm New Password</label>
                            <input 
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl bg-[#2a2a2a] outline-none"
                            />
                        </div>
                    </div>
                );

            case 'language':
                return (
                    <div className="space-y-6 max-w-xl">
                        <div>
                            <label className="text-gray-300 block mb-2">Language</label>
                            <select 
                                name="language"
                                value={formData.language}
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl bg-[#2a2a2a] outline-none"
                            >
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                            </select>
                        </div>
                    </div>
                );

            case 'account':
                return (
                    <div className="space-y-6 max-w-xl">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Account Management</h3>
                            <p className="text-gray-400 mb-6">Manage your account settings and data.</p>
                            
                            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl mr-4">
                                Delete Account
                            </button>
                            
                            <button className="bg-[#333] hover:bg-[#444] px-6 py-3 rounded-xl">
                                Export Data
                            </button>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
            <h1 className="text-3xl font-semibold mb-10">Settings</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {/* LEFT MENU */}
                <div className="bg-[#1b1b1b] rounded-3xl p-6 shadow-xl space-y-4 h-fit">
                    {['general', 'password', 'language', 'account'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`w-full py-3 rounded-xl text-left px-4 transition ${
                                activeTab === tab 
                                    ? 'bg-yellow-500 text-black font-semibold' 
                                    : 'bg-[#2d2d2d] hover:bg-[#3a3a3a]'
                            }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* RIGHT PANEL */}
                <div className="bg-[#1b1b1b] rounded-3xl p-10 shadow-xl md:col-span-3 min-h-[400px]">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold">
                            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Settings
                        </h2>
                        {saved && (
                            <span className="text-green-400">✓ Saved!</span>
                        )}
                    </div>

                    {renderTabContent()}

                    <div className="mt-10 pt-6 border-t border-gray-700">
                        <button 
                            onClick={handleSave}
                            className="bg-yellow-500 text-black px-6 py-3 rounded-xl hover:bg-yellow-400"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}