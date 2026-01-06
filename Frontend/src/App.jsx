import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Loader from './components/common/Loader';
import ScrollToHash from './components/common/ScrollToHash';

// Pages
import Main from './pages/Main';
import Team from './pages/Team';
import Passes from './pages/Passes';
import Gallery from './pages/Gallery';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // 🔹 ONE-TIME loader (real page load)
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="animate-fade-in">
          <Navbar />
          <ScrollToHash />

          <Routes location={location}>
            <Route path="/" element={<Main />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/passes" element={<Passes />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;