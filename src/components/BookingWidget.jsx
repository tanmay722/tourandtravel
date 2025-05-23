import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaWhatsapp, FaTimes } from "react-icons/fa";

const BookingWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-card p-4 mb-4 w-64"
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-heading font-bold text-lg text-gray-800">
                Quick Booking
              </h4>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                <FaTimes />
              </button>
            </div>

            <div className="space-y-3">
              <a
                href="tel:+919415255168"
                className="flex items-center justify-center w-full py-3 px-4 bg-secondary-500 text-white rounded-md hover:bg-secondary-600 transition-colors"
              >
                <FaPhone className="mr-2" />
                Call Us Now
              </a>

              <a
                href="https://wa.me/919415255168"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-400 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-primary-500 transition-colors"
      >
        {isOpen ? <FaTimes size={24} /> : <FaPhone size={24} />}
      </motion.button>
    </div>
  );
};

export default BookingWidget;
