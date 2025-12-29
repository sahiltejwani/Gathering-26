import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const location = useLocation();
  const [activeHash, setActiveHash] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const isNavigating = useRef(false);

  useEffect(() => {
    // Only set hash if we're on the home page (Main component)
    if (location.pathname === "/") {
      const initialHash = location.hash || "#home";
      setActiveHash(initialHash);
      
      // If no hash in URL, set it to #home
      if (!location.hash) {
        window.history.replaceState(null, "", "#home");
      }
    } else {
      // Clear activeHash when on other pages
      setActiveHash("");
    }
  }, [location.pathname]);

  // Update activeHash when location.hash changes (from clicking links)
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      setActiveHash(location.hash);
    }
  }, [location.hash, location.pathname]);

  useEffect(() => {
    // Only run scroll detection on the home page
    if (location.pathname !== "/") return;

    const sections = ["home", "theme", "events", "sports"];

    const handleScroll = () => {
      // Don't update hash if we're currently navigating
      if (isNavigating.current) return;

      let current = "home";

      sections.forEach(id => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
        }
      });

      const newHash = `#${current}`;
      setActiveHash(newHash);

      if (location.hash !== newHash) {
        window.history.replaceState(null, "", newHash);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.hash, location.pathname]);

  // Handle link clicks
  const handleLinkClick = (hash) => {
    setActiveHash(hash);
    setIsOpen(false);
    isNavigating.current = true;
    
    // Re-enable scroll detection after smooth scroll completes
    setTimeout(() => {
      isNavigating.current = false;
    }, 1000);
  };

  const linkClass = hash =>
    `text-base sm:text-lg font-medium transition-all duration-300 px-3 py-1 ${
      activeHash === hash
        ? "text-blue-400 border-b-2 border-blue-400"
        : "text-white/90 hover:text-blue-400 hover:bg-transparent"
    }`;

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <nav className="fixed top-0 left-0 w-full py-3 sm:py-4 backdrop-blur-2xl bg-black/30 hover:bg-black/50 border-b border-white/5 z-50 shadow-2xl transition-all duration-300">
        <div className="w-[95%] sm:w-[90%] max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-0">
          
          {/* Logo - Acts as Home button */}
          <Link 
            to="/#home" 
            onClick={() => handleLinkClick("#home")}
            className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight shrink-0 hover:opacity-80 transition-opacity"
          >
            GatherFest<span className="text-blue-400">2025</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1 sm:gap-2 lg:gap-4 xl:gap-6">
            <li><Link to="/#theme" onClick={() => handleLinkClick("#theme")} className={linkClass("#theme")}>Theme</Link></li>
            <li><Link to="/#events" onClick={() => handleLinkClick("#events")} className={linkClass("#events")}>Events</Link></li>
            <li><Link to="/#sports" onClick={() => handleLinkClick("#sports")} className={linkClass("#sports")}>Sports</Link></li>
            <li>
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `text-base sm:text-lg font-medium transition-all duration-300 px-3 py-1 ${
                    isActive
                      ? "text-blue-400 border-b-2 border-blue-400"
                      : "text-white/90 hover:text-blue-400 hover:bg-transparent"
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
                  `text-base sm:text-lg font-medium transition-all duration-300 px-3 py-1 ${
                    isActive
                      ? "text-blue-400 border-b-2 border-blue-400"
                      : "text-white/90 hover:text-blue-400 hover:bg-transparent"
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
                  `text-base sm:text-lg font-medium transition-all duration-300 px-3 py-1 ${
                    isActive
                      ? "text-blue-400 border-b-2 border-blue-400"
                      : "text-white/90 hover:text-blue-400 hover:bg-transparent"
                  }`
                }
              >
                Passes
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className={`w-6 h-6 transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown - Clean No Boxes */}
        <div className={`md:hidden absolute top-full left-0 w-full backdrop-blur-2xl bg-black/60 border-t border-white/10 shadow-2xl transform transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 translate-y-0 max-h-96 py-4' 
            : 'opacity-0 -translate-y-2 max-h-0 py-0 overflow-hidden'
        }`}>
          <div className="w-[95%] max-w-7xl mx-auto px-4 space-y-1">
            <Link to="/#theme" onClick={() => handleLinkClick("#theme")} className={`${linkClass("#theme")} block w-full text-left py-2 px-3`}>Theme</Link>
            <Link to="/#events" onClick={() => handleLinkClick("#events")} className={`${linkClass("#events")} block w-full text-left py-2 px-3`}>Events</Link>
            <Link to="/#sports" onClick={() => handleLinkClick("#sports")} className={`${linkClass("#sports")} block w-full text-left py-2 px-3`}>Sports</Link>
            <NavLink to="/team" className={({ isActive }) => `text-base font-medium transition-all duration-300 block w-full text-left py-2 px-3 ${isActive ? 'text-blue-400 border-l-4 border-blue-400 bg-white/5 ml-2' : 'text-white/90 hover:text-blue-400 hover:bg-white/5'}`} onClick={() => setIsOpen(false)}>
              Team
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `text-base font-medium transition-all duration-300 block w-full text-left py-2 px-3 ${isActive ? 'text-blue-400 border-l-4 border-blue-400 bg-white/5 ml-2' : 'text-white/90 hover:text-blue-400 hover:bg-white/5'}`} onClick={() => setIsOpen(false)}>
              Gallery
            </NavLink>
            <NavLink to="/passes" className={({ isActive }) => `text-base font-medium transition-all duration-300 block w-full text-left py-2 px-3 ${isActive ? 'text-blue-400 border-l-4 border-blue-400 bg-white/5 ml-2' : 'text-white/90 hover:text-blue-400 hover:bg-white/5'}`} onClick={() => setIsOpen(false)}>
              Passes
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}