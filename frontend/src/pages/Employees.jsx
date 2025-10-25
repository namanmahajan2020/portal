import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trash2, PlusCircle, Users } from "lucide-react";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({ id: "", name: "", role: "" });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Fetch employees
  useEffect(() => {
    fetch("http://localhost:8080/api/employees")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching employees:", err);
        setMessage("⚠️ Failed to load employee data.");
        setLoading(false);
      });
  }, []);

  // Add Employee
  const addEmployee = (e) => {
    e.preventDefault();
    if (!formData.id || !formData.name || !formData.role) {
      setMessage("Please fill out all fields!");
      return;
    }

    fetch("http://localhost:8080/api/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add employee");
        setEmployees([...employees, formData]);
        setFormData({ id: "", name: "", role: "" });
        setMessage("✅ Employee added successfully!");
      })
      .catch(() => setMessage("❌ Error adding employee."));
  };

  // Delete Employee
  const deleteEmployee = (id) => {
    fetch(`http://localhost:8080/api/employees/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete employee");
        setEmployees(employees.filter((e) => e.id !== id));
        setMessage("🗑️ Employee deleted successfully!");
      })
      .catch(() => setMessage("❌ Error deleting employee."));
  };

  return (
    <div className="p-10 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent flex items-center gap-3">
          <Users size={38} /> Employee Management
        </h1>
      </motion.div>

      {/* Status Message */}
      {message && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 text-center text-sm font-medium text-gray-700 bg-gray-100 p-3 rounded-lg shadow-sm"
        >
          {message}
        </motion.p>
      )}

      {/* Add Form */}
      <motion.form
        onSubmit={addEmployee}
        className="bg-white p-6 rounded-2xl shadow-xl mb-10 max-w-lg border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Add New Employee</h2>
        <div className="grid grid-cols-1 gap-3">
          <input
            type="text"
            placeholder="Employee ID"
            value={formData.id}
            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="text"
            placeholder="Role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition"
          >
            <PlusCircle size={18} /> Add Employee
          </button>
        </div>
      </motion.form>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100"
      >
        {loading ? (
          <p className="text-center py-6 text-gray-500">Loading employees...</p>
        ) : employees.length === 0 ? (
          <p className="text-center py-6 text-gray-500">No employees found 😔</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((e, index) => (
                <motion.tr
                  key={e.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3 font-medium text-gray-700">{e.id}</td>
                  <td className="p-3">{e.name}</td>
                  <td className="p-3">{e.role}</td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteEmployee(e.id)}
                      className="text-red-500 hover:text-red-700 flex items-center gap-1 font-medium"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        )}
      </motion.div>
    </div>
  );
}
