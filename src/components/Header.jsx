import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Popular Places", path: "/popular-places" },
    { name: "Transportation", path: "/transportation" },
    { name: "Accommodation", path: "/accommodation" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className={`text-2xl font-bold font-heading ${
                scrolled || !isHomePage ? "text-primary-500" : "text-white"
              }`}
            >
              Varanasi
            </span>
            <span
              className={`ml-1 text-2xl font-light font-heading ${
                scrolled || !isHomePage ? "text-secondary-500" : "text-white"
              }`}
            >
              Tour & Travels
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                font-medium transition-colors duration-200
                ${
                  isActive
                    ? "text-primary-500"
                    : scrolled || !isHomePage
                    ? "text-gray-700 hover:text-primary-500"
                    : "text-white hover:text-primary-300"
                }
              `}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Quick Contact */}
        <div className="hidden lg:flex items-center space-x-4 mb-1">
          <a
            href="tel:+919415255168"
            className={`flex items-center lg:flex xl:hidden 2xl:flex font-medium ${
              scrolled || !isHomePage
                ? "text-secondary-500 hover:text-secondary-600"
                : "text-white hover:text-primary-300"
            }`}
          >
            <FaPhoneAlt className="mr-2" />
            <span>+91 9415255168</span>
          </a>
          <a
            href="https://wa.me/919415255168"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaWhatsapp className="mr-2" />
            <span>Book Now</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="xl:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes
              className={
                scrolled || !isHomePage ? "text-gray-800" : "text-white"
              }
            />
          ) : (
            <FaBars
              className={
                scrolled || !isHomePage ? "text-gray-800" : "text-white"
              }
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-md"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `py-2 px-4 font-medium ${
                      isActive
                        ? "text-primary-500 bg-primary-50 rounded"
                        : "text-gray-700 hover:text-primary-500"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <a
                  href="tel:+919415255168"
                  className="flex items-center font-medium text-secondary-500"
                >
                  <FaPhoneAlt className="mr-2" />
                  <span>+91 9415255168</span>
                </a>
                <a
                  href="https://wa.me/919415255168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaWhatsapp className="mr-2" />
                  <span>Book Now</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
