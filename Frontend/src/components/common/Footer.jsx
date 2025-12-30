export default function Footer() {
  return (
    <footer className="relative bg-black pt-6 pb-4 overflow-hidden">

      {/* Fade from previous section */}
      <div className="absolute -top-10 left-0 w-full h-10 bg-gradient-to-b from-transparent to-black" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">

          {/* Brand */}
          <div className="flex-1">
            <h3 className="text-white text-lg font-semibold">
              College Gathering
            </h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Annual cultural and sports fest celebrating creativity,
              competition and community on campus.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 text-sm">
            <div>
              <h4 className="text-white mb-2">Explore</h4>
              <a href="#events" className="block text-gray-400 hover:text-white">Events</a>
              <a href="#sports" className="block text-gray-400 hover:text-white">Sports</a>
              <a href="/team" className="block text-gray-400 hover:text-white">Team</a>
              <a href="/gallery" className="block text-gray-400 hover:text-white">Gallery</a>
              <a href="/passes" className="block text-gray-400 hover:text-white">Passes</a>
            </div>

            <div>
              <h4 className="text-white mb-2">Contact</h4>
              <p className="text-gray-400">Student Activity Center</p>
              <p className="text-gray-400">fest@yourcollege.edu</p>
              <p className="text-gray-400">+91 99999 99999</p>
            </div>

            <div>
              <h4 className="text-white mb-2">Follow</h4>
              <a href="#" className="block text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="block text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="block text-gray-400 hover:text-white">X (Twitter)</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-gray-400">
          <span>© {new Date().getFullYear()} College Gathering</span>
          <span>Designed & Developed by Tech Team</span>
        </div>
      </div>
    </footer>
  );
}
