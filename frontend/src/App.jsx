import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound"; // 👈 Import your new 404 page
import Books from "./pages/Books";
import Employees from "./pages/Employees";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8 bg-gradient-to-br from-gray-50 to-gray-200">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/books" element={<Books />} />
            <Route path="/employees" element={<Employees />} />
            {/* 👇 Catch-all route for invalid URLs */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
