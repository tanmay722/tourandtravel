import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

//data
import transportation from "../data/transportation";

//images
import heroImg from "../assets/Transportation.jpeg";

const Transportation = () => {
  const location = useLocation();
  const sectionRefs = {
    cabs: useRef(null),
    rentals: useRef(null),
    buses: useRef(null),
    boats: useRef(null),
  };

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that section
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = sectionRefs[id]?.current;

      if (element) {
        const yOffset = -80; // Header height + some padding
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="pt-12 md:pt-16">
      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16 lg:py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImg})`,
        }}
      >
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transportation Services
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-gray-200 max-w-3xl mx-auto">
              Travel comfortably and conveniently throughout Varanasi and beyond
              with our premium transportation options
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-4 sm:py-6 md:py-8 bg-gray-50 sticky top-12 md:top-16 z-20 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {transportation.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="px-2 sm:px-4 lg:px-6 py-1 lg:py-2 rounded-full bg-white text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Categories */}
      {transportation.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          ref={sectionRefs[category.id]}
          className={`py-8 sm:py-12 md:py-16 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {category.options.map((option, optionIndex) => (
                <motion.div
                  key={optionIndex}
                  variants={fadeIn}
                  className="card overflow-hidden"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        {option.name}
                      </h3>
                      <span className="bg-primary-100 text-primary-700 text-xs md:text-sm font-medium px-3 py-1 rounded-full">
                        {option.duration}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm md:text-base mb-2 md:mb-4">
                      {option.description}
                    </p>

                    <div className="bg-gray-50 p-2 sm:p-3 md:p-4 rounded-md mb-2 md:mb-4">
                      <p className="font-semibold text-gray-900 mb-1 md:mb-2">
                        Price
                      </p>
                      <p className="text-primary-600 font-bold">
                        {option.price}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <p className="font-semibold text-gray-900 mb-1 md:mb-2">
                        Features
                      </p>
                      <ul className="space-y-1">
                        {option.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-gray-600"
                          >
                            <svg
                              className="h-4 w-4 text-primary-500 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Booking Buttons */}
                    <div className="space-y-2">
                      <a
                        href="tel:+919415255168"
                        className="flex items-center justify-center w-full py-2 px-4 bg-secondary-500 text-white rounded-md hover:bg-secondary-600 transition-colors"
                      >
                        <FaPhoneAlt className="mr-2" />
                        Call to Book
                      </a>

                      <a
                        href="https://wa.me/919415255168"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                      >
                        <FaWhatsapp className="mr-2" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Custom Packages */}
      <section className="py-8 sm:py-12 md:py-16 bg-secondary-500">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
                Need a Custom Transportation Package?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-8 text-center">
                We offer tailor-made transportation solutions for individuals,
                families, and groups. Contact us with your specific
                requirements, and we'll create a customized package just for
                you.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:+919415255168"
                  className="btn bg-secondary-500 text-white hover:bg-secondary-600 text-sm sm:text-base md:text-lg"
                >
                  <FaPhoneAlt className="mr-2" />
                  Call for Custom Quote
                </a>

                <Link
                  to="/contact"
                  className="btn bg-primary-400 text-white hover:bg-primary-500 text-sm sm:text-base md:text-lg"
                >
                  Send Inquiry
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Transportation;
