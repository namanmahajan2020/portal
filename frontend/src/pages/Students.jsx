import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusCircle, Trash2, X } from "lucide-react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });

  // Fetch students from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  // Add new student
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newStudent) => {
        setStudents([...students, newStudent]);
        setFormData({ name: "", email: "", course: "" });
        setShowModal(false);
      });
  };

  // Delete student
  const deleteStudent = (id) => {
    fetch(`http://localhost:8080/api/students/${id}`, { method: "DELETE" })
      .then(() => setStudents(students.filter((s) => s.id !== id)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex justify-between items-center mb-10"
      >
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">
            👩‍🎓 Student Management
          </h1>
          <p className="text-gray-600 mt-2">
            View, add, and manage students seamlessly.
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl shadow-md hover:scale-105 transition"
        >
          <PlusCircle size={20} />
          Add Student
        </button>
      </motion.div>

      {/* Student Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="overflow-x-auto"
      >
        <table className="w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200">
          <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Course</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <motion.tr
                key={s.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="p-4">{s.id}</td>
                <td className="p-4 font-medium text-gray-800">{s.name}</td>
                <td className="p-4 text-gray-600">{s.email}</td>
                <td className="p-4 text-gray-600">{s.course}</td>
                <td className="p-4">
                  <button
                    onClick={() => deleteStudent(s.id)}
                    className="text-red-500 hover:text-red-700 transition flex items-center gap-1"
                  >
                    <Trash2 size={18} /> Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        {students.length === 0 && (
          <p className="text-center mt-6 text-gray-500">
            No students found. Add one to get started!
          </p>
        )}
      </motion.div>

      {/* Modal for Adding Student */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-xl w-[90%] md:w-[450px]"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Add New Student
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <X size={22} />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border w-full p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border w-full p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Course"
                  className="border w-full p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  value={formData.course}
                  onChange={(e) =>
                    setFormData({ ...formData, course: e.target.value })
                  }
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-lg hover:opacity-90 transition"
                >
                  Save Student
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
