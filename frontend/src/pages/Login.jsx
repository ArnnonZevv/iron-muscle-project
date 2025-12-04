import { useState } from 'react';
import logo from '../assets/logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // <-- Error state

  const handleLogin = async () => {
    setError(''); // reset error

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    //DEFAULT LOGIN DETAILS
    if(email === 'admin@example.com' && password === '123456'){
      window.location.href = '/dashboard';
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.text();

      if (data === 'Login successful') {
        window.location.href = '/dashboard';
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
      <div className="bg-[#1b1b1b] p-10 rounded-3xl shadow-xl w-full max-w-md">

        <img
          src={logo}
          alt="Logo"
          className="w-50 h-50 rounded-2xl mx-auto mb-8 object-cover"
        />

        <h1 className="text-3xl font-semibold text-center mb-8 tracking-wide">
          LOGIN
        </h1>

        <div className="space-y-4">
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

          {error && <p className="text-red-500 text-sm">{error}</p>} {/* <-- Error message */}

          <button
            onClick={handleLogin}
            className="w-full bg-yellow-500 text-black py-3 rounded-xl text-lg font-semibold hover:bg-yellow-400 transition"
          >
            Login
          </button>

          <button
            onClick={() => (window.location.href = "/signup")}
            className="w-full bg-[#2a2a2a] py-3 rounded-xl hover:bg-[#333] transition"
          >
            Register
          </button>
        </div>

      </div>
    </div>
  );
}
