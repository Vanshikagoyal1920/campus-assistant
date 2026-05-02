import { BrowserRouter, Routes, Route } from "react-router-dom";

/* AUTH PAGES */
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* MAIN PAGES */
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/Chatbot";
import Events from "./pages/Events";
import Timetable from "./pages/Timetable";
import Navigation from "./pages/Navigation";
import AIAssistant from "./pages/AIAssistant";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH ROUTES */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* MAIN APP ROUTES */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/events" element={<Events />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/ai" element={<AIAssistant />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;