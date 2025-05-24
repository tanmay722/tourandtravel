import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-footer-pattern bg-cover bg-center text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-span-2 md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-2xl font-heading font-bold mb-2 sm:mb-4 md:mb-6 text-primary-400">
              Varanasi Tour & Travels
            </h3>
            <p className="mb-4 text-gray-300">
              Your trusted partner for exploring the spiritual and cultural
              heart of India. We specialize in crafting unforgettable
              experiences in Varanasi and beyond.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-white hover:text-primary-400 transition-colors"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary-400 transition-colors"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary-400 transition-colors"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary-400 transition-colors"
              >
                <FaYoutube size={22} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-span-1 md:col-span-1 lg:col-span-1"
          >
            <h3 className="text-base md:text-xl font-heading font-bold mb-2 sm:mb-4 md:mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/popular-places"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Popular Places
                </Link>
              </li>
              <li>
                <Link
                  to="/transportation"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Transportation
                </Link>
              </li>
              <li>
                <Link
                  to="/accommodation"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Accommodation
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-span-1 md:col-span-1 lg:col-span-1"
          >
            <h3 className="text-base md:text-xl font-heading font-bold mb-2 sm:mb-4 md:mb-6 text-white">
              Legal
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  to="/terms-of-use"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-span-2 md:col-span-4 lg:col-span-1"
          >
            <h3 className="text-base md:text-xl font-heading font-bold mb-2 sm:mb-4 md:mb-6 text-white">
              Contact Us
            </h3>
            <ul className="space-y-2 md:space-y-4 text-sm md:text-base">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary-400 mt-1 mr-3" />
                <span className="text-gray-300 ">
                  2nd Floor, Plot No - 52, Patel Nagar, Mint Road, Nadesar,
                  Varanasi, Uttar Pradesh 221002, India
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-primary-400 mr-3" />
                <a
                  href="tel:+919415255168"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  +91 9415255168
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="text-primary-400 mr-3" />
                <a
                  href="https://wa.me/919415255168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  +91 9415255168
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary-400 mr-3" />
                <a
                  href="mailto:officialtoursup@gmail.com"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  officialtoursup@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Varanasi Tour & Travels. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
