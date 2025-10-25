import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  BriefcaseBusiness,
  TrendingUp,
  Database,
  Layers,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-6 py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Welcome to Admin Dashboard 🧠
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Manage Students, Books, and Employees — all from one unified,
          interactive portal.
        </p>
      </motion.div>

      {/* STAT CARDS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
      >
        <StatCard
          title="Total Students"
          value="128"
          icon={<Users className="text-indigo-600" size={36} />}
          gradient="from-indigo-500 to-indigo-700"
        />
        <StatCard
          title="Books in Library"
          value="532"
          icon={<BookOpen className="text-pink-600" size={36} />}
          gradient="from-pink-500 to-pink-700"
        />
        <StatCard
          title="Active Employees"
          value="42"
          icon={<BriefcaseBusiness className="text-violet-600" size={36} />}
          gradient="from-violet-500 to-violet-700"
        />
      </motion.div>

      {/* ANALYTICS / PERFORMANCE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Portal Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <QuickCard
            title="Student Analytics"
            desc="Visualize performance, attendance, and growth trends."
            icon={<TrendingUp className="text-indigo-500" size={32} />}
          />
          <QuickCard
            title="Book Circulation"
            desc="Track borrowed books, availability, and category stats."
            icon={<Database className="text-pink-500" size={32} />}
          />
          <QuickCard
            title="Employee Overview"
            desc="View staff distribution, roles, and work metrics at a glance."
            icon={<Layers className="text-violet-500" size={32} />}
          />
        </div>
      </motion.div>

      {/* QUICK ACCESS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Quick Access
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <QuickCard
            title="Manage Students"
            desc="View, edit, and manage all student data efficiently."
            icon={<Users className="text-indigo-500" size={32} />}
          />
          <QuickCard
            title="Library Management"
            desc="Add, update, or track books available in the portal."
            icon={<BookOpen className="text-pink-500" size={32} />}
          />
          <QuickCard
            title="Employee Records"
            desc="Access employee data, assign roles, and manage resources."
            icon={<BriefcaseBusiness className="text-violet-500" size={32} />}
          />
        </div>
      </motion.div>
    </div>
  );
}

/* ----------------------- COMPONENTS ----------------------- */

function StatCard({ title, value, icon, gradient }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-2xl shadow-lg bg-gradient-to-br ${gradient} text-white flex items-center justify-between transition-all duration-300`}
    >
      <div>
        <h3 className="text-lg font-semibold opacity-90">{title}</h3>
        <p className="text-3xl font-bold mt-2">{value}</p>
      </div>
      <div className="bg-white/20 p-3 rounded-xl">{icon}</div>
    </motion.div>
  );
}

function QuickCard({ title, desc, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-2xl p-6 transition-all duration-300 border border-gray-100 text-left"
    >
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
