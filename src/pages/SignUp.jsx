import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: ''
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) newErrors.name = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            // In real app, make API call to register user
            // const response = await fetch('http://localhost:8080/api/users/register', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });
            
            // For demo purposes:
            alert('Account created successfully! Welcome to our gym!');
            navigate('/dashboard');
            
        } catch (error) {
            console.error('Signup error:', error);
            setErrors({ submit: 'Failed to create account. Please try again.' });
        }
    };

    return (
        <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
            <div className="bg-[#1b1b1b] p-10 rounded-3xl shadow-xl w-full max-w-md">
                <h1 className="text-3xl font-semibold text-center mb-8 tracking-wide">
                    SIGN UP
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none ${
                                errors.name ? 'border-2 border-red-500' : ''
                            }`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none ${
                                errors.email ? 'border-2 border-red-500' : ''
                            }`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none ${
                                errors.password ? 'border-2 border-red-500' : ''
                            }`}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <div>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl bg-[#2a2a2a] text-white outline-none ${
                                errors.confirmPassword ? 'border-2 border-red-500' : ''
                            }`}
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                    </div>

                    {errors.submit && (
                        <p className="text-red-500 text-center">{errors.submit}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-black py-3 rounded-xl text-lg font-semibold hover:bg-yellow-400 transition"
                    >
                        Create Account
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="w-full bg-[#333] py-3 rounded-xl hover:bg-[#444] transition"
                    >
                        Back to Login
                    </button>
                </form>
            </div>
        </div>
    );
}