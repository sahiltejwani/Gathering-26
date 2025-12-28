import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [activeHash, setActiveHash] = useState("#theme");

  useEffect(() => {
    const sections = ["theme", "events", "sports"];

    const handleScroll = () => {
      let current = "theme";

      sections.forEach(id => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
        }
      });

      const newHash = `#${current}`;

      // ✅ update navbar state
      setActiveHash(newHash);

      // ✅ update URL without reload / jump
      if (location.hash !== newHash) {
        window.history.replaceState(null, "", newHash);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.hash]);

  const linkClass = hash =>
    `text-lg font-medium transition duration-200 ${
      activeHash === hash
        ? "text-blue-400 border-b-2 border-blue-400 pb-1"
        : "text-white/80 hover:text-blue-400"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full py-4 bg-black z-50 shadow-md">
      <div className="w-[90%] mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/#home" className="text-white text-3xl font-bold">
          GatherFest<span className="text-blue-400">2025</span>
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-8">
          <li>
            <Link to="/#theme" className={linkClass("#theme")}>
              Theme
            </Link>
          </li>

          <li>
            <Link to="/#sports" className={linkClass("#sports")}>
              Sports
            </Link>
          </li>

          <li>
            <Link to="/#events" className={linkClass("#events")}>
              Events
            </Link>
          </li>

          <li>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-200 ${
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                    : "text-white/80 hover:text-blue-400"
                }`
              }
            >
              Team
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-200 ${
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                    : "text-white/80 hover:text-blue-400"
                }`
              }
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/passes"
              className={({ isActive }) =>
                `text-lg font-medium transition duration-200 ${
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                    : "text-white/80 hover:text-blue-400"
                }`
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
