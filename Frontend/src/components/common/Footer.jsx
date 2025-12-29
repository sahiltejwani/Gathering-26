// src/components/common/Footer.jsx
export default function Footer() {
  return (
    <footer className="fest-footer relative">
      {/* Gradient Fade Overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none -translate-y-full"></div>
      
      <div className="fest-footer__top">
        <div className="fest-footer__brand">
          <h3>College Gathering</h3>
          <p>
            Annual cultural and sports fest celebrating creativity,
            competition and community on campus.
          </p>
        </div>

        <div className="fest-footer__links">
          <div>
            <h4>Explore</h4>
            <a href="/#events">Events</a>
            <a href="/#sports">Sports</a>
            <a href="/team">Our Team</a>
            <a href="/gallery">Gallery</a>
            <a href="/passes">Passes</a>
          </div>

          <div>
            <h4>Contact</h4>
            <p>Student Activity Center, Campus</p>
            <p>Email: fest@yourcollege.edu</p>
            <p>Phone: +91-99999 99999</p>
          </div>

          <div>
            <h4>Follow us</h4>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              X (Twitter)
            </a>
          </div>
        </div>
      </div>

      <div className="fest-footer__bottom">
        <span>© {new Date().getFullYear()} College Gathering. All rights reserved.</span>
        <span>Designed & developed by the Tech Team.</span>
      </div>
    </footer>
  );
}