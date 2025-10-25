export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white py-3 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-semibold">🎓 </h1>
      <div className="flex items-center gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 px-4 py-1.5 rounded-md transition">Logout</button>
      </div>
    </nav>
  );
}
