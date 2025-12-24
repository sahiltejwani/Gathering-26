import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-black sticky top-0 z-50 shadow-md">
      <div className="w-[90%] mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-white text-3xl font-bold tracking-wide"
        >
          GatherFest<span className="text-blue-400 font-extrabold">2025</span>
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-8">
          
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-lg font-medium transition duration-200 
                ${isActive 
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1" 
                  : "text-white/80 hover:text-blue-400"}`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-200 
                ${isActive 
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1" 
                  : "text-white/80 hover:text-blue-400"}`
              }
            >
              Events
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/sports"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-200 
                ${isActive 
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1" 
                  : "text-white/80 hover:text-blue-400"}`
              }
            >
              Sports
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-200 
                ${isActive 
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1" 
                  : "text-white/80 hover:text-blue-400"}`
              }
            >
              Team
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-200 
                ${isActive 
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1" 
                  : "text-white/80 hover:text-blue-400"}`
              }
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/passes"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-200 
                ${isActive 
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1" 
                  : "text-white/80 hover:text-blue-400"}`
              }
            >
              Passes
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}
