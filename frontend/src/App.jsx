import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Classes from "./pages/Classes";
import Trainers from "./pages/Trainers";
import Membership from "./pages/Membership";
import Payments from "./pages/Payments";
import Cancellation from "./pages/Cancellation";
import AdminPanel from "./pages/AdminPanel";
import Settings from "./pages/Settings";

import { ToastProvider } from "./ToastContext";

function Layout() {
    const location = useLocation();
    const noNavbar = ["/", "/signup"]; // no navbar on login & signup

    return (
        <>
            {!noNavbar.includes(location.pathname) && <Navbar />}

            <div className="pt-0">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/trainers" element={<Trainers />} />
                    <Route path="/membership" element={<Membership />} />
                    <Route path="/payments" element={<Payments />} />
                    <Route path="/cancellation" element={<Cancellation />} />
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </>
    );
}

export default function App() {
    return (
        <ToastProvider>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </ToastProvider>
    );
}
