import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash && pathname !== "/") {
      navigate(`/${hash}`, { replace: true });
      return;
    }

    if (hash && pathname === "/") {
      setTimeout(() => {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // keep instant for page change
    });
  }, [hash, pathname, navigate]);

  return null;
};

export default ScrollToHash;