import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, BookOpen, Library, BriefcaseBusiness, Menu } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const links = [
    { name: "Dashboard", path: "/", icon: <Home size={22} /> },
    { name: "Students", path: "/students", icon: <User size={22} /> },
    { name: "Courses", path: "/courses", icon: <BookOpen size={22} /> },
    { name: "Books", path: "/books", icon: <Library size={22} /> },
    { name: "Employees", path: "/employees", icon: <BriefcaseBusiness size={22} /> }, // 👈 Added Employee link
  ];

  return (
    <div
      className={`h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-fuchsia-900 text-white 
      ${open ? "w-72" : "w-20"} 
      p-5 flex flex-col justify-between transition-all duration-300 shadow-2xl`}
    >
      {/* Top Section */}
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1
            className={`font-bold tracking-wide text-2xl transition-all duration-300 ${
              open ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            🎓 Portal
          </h1>
          <button
            onClick={() => setOpen(!open)}
            className="hover:scale-110 transition-transform text-gray-300"
            title="Toggle Menu"
          >
            <Menu size={26} />
          </button>
        </div>

        {/* Nav Links */}
        <ul className="space-y-4">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 
                  ${
                    isActive
                      ? "bg-gradient-to-r from-pink-600 to-purple-600 shadow-lg scale-[1.04]"
                      : "hover:bg-white/10 hover:scale-[1.02] text-gray-200"
                  }`
                }
              >
                {link.icon}
                {open && <span className="whitespace-nowrap">{link.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-gray-700/40 pt-5">
        {open ? (
          <p className="text-sm text-gray-400 text-center">© 2025 Student Portal</p>
        ) : (
          <p className="text-gray-500 text-xs text-center rotate-90">©</p>
        )}
      </div>
    </div>
  );
}
