import { motion } from "framer-motion";
import { Cpu, Wrench, Building2, Zap, Radio, Atom, Laptop, Database } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      name: "Computer Science Engineering",
      code: "CSE101",
      desc: "Focuses on software development, algorithms, AI, and data-driven systems.",
      icon: <Laptop size={40} className="text-blue-600" />,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      name: "Electrical Engineering",
      code: "EEE102",
      desc: "Covers circuit design, power systems, control theory, and renewable energy.",
      icon: <Zap size={40} className="text-yellow-500" />,
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      name: "Mechanical Engineering",
      code: "ME103",
      desc: "Involves thermodynamics, robotics, and mechanical system design.",
      icon: <Wrench size={40} className="text-red-600" />,
      gradient: "from-red-500 to-rose-600",
    },
    {
      name: "Civil Engineering",
      code: "CE104",
      desc: "Deals with construction, structural analysis, and sustainable design.",
      icon: <Building2 size={40} className="text-emerald-600" />,
      gradient: "from-green-500 to-emerald-700",
    },
    {
      name: "Electronics & Communication Engineering",
      code: "ECE105",
      desc: "Focuses on embedded systems, signal processing, and wireless networks.",
      icon: <Radio size={40} className="text-purple-600" />,
      gradient: "from-purple-500 to-fuchsia-600",
    },
    {
      name: "Chemical Engineering",
      code: "CHE106",
      desc: "Studies chemical processes, materials, and environmental technologies.",
      icon: <Atom size={40} className="text-pink-500" />,
      gradient: "from-pink-500 to-rose-600",
    },
    {
      name: "Information Technology",
      code: "IT107",
      desc: "Specializes in networking, cloud computing, cybersecurity, and web systems.",
      icon: <Database size={40} className="text-indigo-500" />,
      gradient: "from-indigo-500 to-blue-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          🎓 Engineering Courses
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Explore various disciplines of engineering and their core areas of study.
        </p>
      </motion.div>

      {/* Course Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-2xl shadow-xl bg-gradient-to-br ${course.gradient} text-white hover:shadow-2xl transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white/20 p-3 rounded-xl">{course.icon}</div>
              <span className="bg-white/30 text-sm px-3 py-1 rounded-full font-medium">
                {course.code}
              </span>
            </div>
            <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
            <p className="text-white/90 text-sm leading-relaxed">{course.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-16 text-gray-500"
      >
        <p>✨ More courses coming soon with semester-wise details and enrollment options.</p>
      </motion.div>
    </div>
  );
}
