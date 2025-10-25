import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white p-6 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        className="flex flex-col items-center"
      >
        <AlertTriangle size={80} className="text-yellow-400 mb-6 drop-shadow-lg" />
        <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-3">Oops! Page Not Found 😢</h2>
        <p className="text-gray-200 mb-8 max-w-lg">
          The page you’re looking for doesn’t exist or has been moved.  
          But don’t worry — you can always return to safety.
        </p>
        <Link
          to="/"
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105"
        >
          ⬅ Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
