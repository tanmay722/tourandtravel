import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingWidget from "../components/BookingWidget";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Fixed booking widget for quick contact */}
      <BookingWidget />

      {/* Scroll to top button */}
      <ScrollToTop />

      <Footer />
    </div>
  );
};

export default MainLayout;
