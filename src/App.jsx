import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Mentors from "./pages/Mentors";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import MentorProvider from "./context/MentorContext";
import MentorProfile from "./pages/MentorProfile";

export default function App() {
  return (
    <MentorProvider>
      <Router>
        {/* 🔥 Apply light/dark background + text globally */}
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/mentors/:id" element={<MentorProfile />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MentorProvider>
  );
}
