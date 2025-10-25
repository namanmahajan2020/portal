import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusCircle, Trash2, BookOpen } from "lucide-react";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
  });
  const [loading, setLoading] = useState(true);

  // Fetch Books
  useEffect(() => {
    fetch("http://localhost:8080/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.content);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Add Book
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newBook) => {
        setBooks([...books, newBook]);
        setFormData({ title: "", author: "", category: "", price: "" });
      });
  };

  // Delete Book
  const deleteBook = (id) => {
    fetch(`http://localhost:8080/api/books/${id}`, { method: "DELETE" })
      .then(() => setBooks(books.filter((b) => b.id !== id)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-10"
      >
        <div>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            📚 Book Management
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Manage your library with ease — add, view, and delete books.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document.getElementById("bookForm").scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-xl transition-all"
        >
          <PlusCircle size={20} />
          Add Book
        </motion.button>
      </motion.div>

      {/* Add Form */}
      <motion.form
        id="bookForm"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-xl border border-gray-200 p-8 rounded-2xl shadow-lg mb-10 max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Add New Book 📘
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Book Title"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Author"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Category"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price (₹)"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="mt-6 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-xl transition"
        >
          Add Book
        </motion.button>
      </motion.form>

      {/* Book Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="overflow-x-auto"
      >
        {loading ? (
          <p className="text-center text-gray-500 text-lg">Loading books...</p>
        ) : books.length > 0 ? (
          <table className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 w-full max-w-6xl mx-auto">
            <thead className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white text-left">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Title</th>
                <th className="p-4">Author</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {books.map((b, index) => (
                  <motion.tr
                    key={b.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4">{b.id}</td>
                    <td className="p-4 font-semibold text-gray-800">{b.title}</td>
                    <td className="p-4 text-gray-600">{b.author}</td>
                    <td className="p-4 text-gray-600">{b.category}</td>
                    <td className="p-4 font-medium text-gray-700">₹{b.price}</td>
                    <td className="p-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => deleteBook(b.id)}
                        className="text-red-500 hover:text-red-700 flex items-center gap-1"
                      >
                        <Trash2 size={16} /> Delete
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-16 text-gray-500"
          >
            <BookOpen size={60} className="mx-auto mb-4 text-gray-400" />
            <p className="text-lg">No books found. Add some to get started!</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
