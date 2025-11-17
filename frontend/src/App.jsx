import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Membership from "./pages/Membership";
import Classes from "./pages/Classes";
import Trainers from "./pages/Trainers";
import Payments from "./pages/Payments";
import Cancellation from "./pages/Cancellation";
import AdminPanel from "./pages/AdminPanel";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/trainers" element={<Trainers />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/cancellation" element={<Cancellation />} />
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
