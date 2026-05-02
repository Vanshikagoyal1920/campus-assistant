import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/Chatbot";
import Events from "./pages/Events";
import Timetable from "./pages/Timetable";
import Navigation from "./pages/Navigation";
import Admin from "./pages/Admin";
import AIAssistant from "./pages/AIAssistant";
import Signup from "./pages/Signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/events" element={<Events />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/ai" element={<AIAssistant />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;