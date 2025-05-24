import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaHotel,
  FaCar,
  FaShip,
  FaPhoneAlt,
} from "react-icons/fa";
import places from "../data/places";

// Components
import PopularPlaceCard from "../components/PopularPlaceCard";
import TestimonialCard from "../components/TestimonialCard";

//Images
import Parallax from "../assets/Parallax.jpg";

const Home = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
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

  // Filter featured places
  const featuredPlaces = places
    .filter((place) => place.categories.includes("featured"))
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-12 lg:mb-6">
              Discover the <span className="text-primary-400">Spiritual</span>{" "}
              Heart of India
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-12 lg:mb-8 max-w-3xl mx-auto">
              Experience the mystical charm of Varanasi with our expertly
              curated tours and premium services
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/popular-places"
                className="btn btn-primary text-base lg:text-lg"
              >
                Explore Popular Places
              </Link>
              <a
                href="tel:+919415255168"
                className="btn btn-outline text-white border-white hover:bg-white hover:text-secondary-500 text-base lg:text-lg"
              >
                <FaPhoneAlt className="mr-2" />
                Book Now
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="animate-bounce"
          >
            <a
              href="#services"
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              From spiritual journeys to luxury accommodations, we offer
              comprehensive travel services tailored to your needs
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {/* Service 1 */}
            <motion.div
              variants={fadeInUp}
              className="card p-4 sm:p-6 text-center"
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary-400 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <FaMapMarkerAlt size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Guided Tours
              </h3>
              <p className="text-gray-600 mb-4 text-sm lg:text-base">
                Explore Varanasi's spiritual and cultural landmarks with our
                knowledgeable local guides
              </p>
              <Link
                to="/popular-places"
                className="text-primary-500 font-medium hover:text-primary-600 transition-colors"
              >
                Learn More →
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              variants={fadeInUp}
              className="card p-4 sm:p-6 text-center"
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <FaHotel size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Premium Accommodation
              </h3>
              <p className="text-gray-600 mb-4 text-sm lg:text-base">
                Stay in comfort with our curated selection of luxury, boutique,
                and heritage hotels
              </p>
              <Link
                to="/accommodation"
                className="text-secondary-500 font-medium hover:text-secondary-600 transition-colors"
              >
                Learn More →
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              variants={fadeInUp}
              className="card p-4 sm:p-6 text-center"
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <FaCar size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Transportation
              </h3>
              <p className="text-gray-600 mb-4 text-sm lg:text-base">
                Travel comfortably with our fleet of vehicles and experienced
                drivers for all your needs
              </p>
              <Link
                to="/transportation"
                className="text-accent-500 font-medium hover:text-accent-600 transition-colors"
              >
                Learn More →
              </Link>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              variants={fadeInUp}
              className="card p-4 sm:p-6 text-center"
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <FaShip size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                River Experiences
              </h3>
              <p className="text-gray-600 mb-4 text-sm lg:text-base">
                Witness the magic of the Ganges with our sunrise, sunset, and
                evening Aarti boat tours
              </p>
              <Link
                to="/transportation#boats"
                className="text-earth-500 font-medium hover:text-earth-600 transition-colors"
              >
                Learn More →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Places Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations in Varanasi
            </h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the most iconic and mystical places that make Varanasi a
              truly unique destination
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {featuredPlaces.map((place) => (
              <PopularPlaceCard
                key={place.id}
                place={place}
                variants={fadeInUp}
              />
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <Link to="/popular-places" className="btn btn-primary">
              View All Destinations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Parallax Section */}
      <section
        ref={targetRef}
        className="py-24 bg-fixed bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Parallax})`,
        }}
      >
        <div className="container-custom relative z-10">
          <motion.div style={{ opacity, y }} className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Experience the Magic of Varanasi
            </h2>
            <p className="text-base lg:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              "Banaras is older than history, older than tradition, older even
              than legend, and looks twice as old as all of them put together."
            </p>
            <p className="text-base lg:text-lg text-primary-300 italic">
              - Mark Twain
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from travelers who have experienced our services and explored
              Varanasi with us
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            <TestimonialCard
              name="Rajiv Sharma"
              location="Mumbai, India"
              testimonial="The sunrise boat ride on the Ganges was a life-changing experience. Our guide was knowledgeable and showed us hidden gems of the city."
              rating={5}
              variants={fadeInUp}
            />

            <TestimonialCard
              name="Sarah Johnson"
              location="London, UK"
              testimonial="Everything was perfectly arranged - from airport pickup to accommodation and tours. The evening Ganga Aarti was magical!"
              rating={5}
              variants={fadeInUp}
            />

            <TestimonialCard
              name="David Chen"
              location="Singapore"
              testimonial="Professional service and authentic experiences. The hotel they recommended had amazing views of the Ganges. Will definitely use their services again."
              rating={4}
              variants={fadeInUp}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary-400">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Experience Varanasi?
            </h2>
            <p className="text-base lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact us today to plan your perfect spiritual journey in the
              oldest living city in the world
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 lg:gap-4">
              <a
                href="tel:+919415255168"
                className="btn bg-white text-primary-500 hover:bg-gray-100 text-base lg:text-lg"
              >
                <FaPhoneAlt className="mr-2" />
                Call Now: +91 9415255168
              </a>
              <Link
                to="/contact"
                className="btn bg-secondary-500 text-white hover:bg-secondary-600 text-base lg:text-lg"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
