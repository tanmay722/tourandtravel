import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Layouts
import MainLayout from './layouts/MainLayout'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import PopularPlaces from './pages/PopularPlaces'
import PlaceDetail from './pages/PlaceDetail'
import Transportation from './pages/Transportation'
import Accommodation from './pages/Accommodation'
import Contact from './pages/Contact'
import TermsOfUse from './pages/TermsOfUse'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="popular-places" element={<PopularPlaces />} />
          <Route path="popular-places/:id" element={<PlaceDetail />} />
          <Route path="transportation" element={<Transportation />} />
          <Route path="accommodation" element={<Accommodation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App