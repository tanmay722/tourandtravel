import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaUserTie,
  FaHandshake,
  FaSmile,
} from "react-icons/fa";

//images
import heroImg from "../assets/sectionhero.jpg";
import aboutImage from "../assets/about.jpg";

const About = () => {
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              About Varanasi Tour & Travels
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-gray-200 max-w-3xl mx-auto">
              Your trusted partner for exploring the spiritual and cultural
              heart of India since 2005
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-2 md:mb-4">
                Varanasi Tour & Travels was founded in 2005 with a simple
                mission: to share the spiritual and cultural richness of
                Varanasi with travelers from around the world. What started as a
                small family business has grown into a trusted travel company
                specializing in authentic experiences in one of the world's
                oldest living cities.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-2 md:mb-4">
                Our founder, Mr. Rakesh Sharma, a Varanasi native with deep
                knowledge of the city's history and traditions, established the
                company to provide visitors with meaningful connections to the
                heart and soul of Varanasi. With his expertise and passion, he
                built a team of like-minded professionals who share his
                commitment to exceptional service and authentic experiences.
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Today, we are proud to have helped thousands of travelers from
                across the globe experience the magic of Varanasi, creating
                memories that last a lifetime. Our team continues to uphold our
                founding principles of authenticity, respect for local culture,
                and personalized service.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="rounded-lg overflow-hidden shadow-elegant"
            >
              <img
                src={aboutImage}
                alt="Varanasi Tour and Travels Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by our values, we strive to create meaningful travel
              experiences that honor the rich heritage of Varanasi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2 md:mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm lg:text-base">
                To provide travelers with authentic, respectful, and
                transformative experiences in Varanasi and beyond, connecting
                them with the spiritual and cultural essence of India while
                supporting local communities and preserving ancient traditions.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2 md:mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm lg:text-base">
                To be the most trusted name in cultural and spiritual tourism in
                Varanasi, setting the standard for responsible travel that
                benefits visitors and local communities alike, while sharing the
                timeless wisdom and beauty of the world's oldest living city.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
              Why Choose Us
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              What sets Varanasi Tour & Travels apart from other travel
              companies
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {/* Reason 1 */}
            <motion.div
              variants={fadeIn}
              className="card p-4 sm:p-6 text-center"
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary-400 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <FaMapMarkedAlt size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Local Expertise
              </h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Our team of local guides have deep knowledge of Varanasi's
                history, culture, and hidden gems
              </p>
            </motion.div>

            {/* Reason 2 */}
            <motion.div
              variants={fadeIn}
              className="card p-4 sm:p-6 text-center"
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <FaUserTie size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Personalized Service
              </h3>
              <p className="text-gray-600 text-sm lg:text-base">
                We create customized itineraries tailored to your interests,
                preferences, and travel style
              </p>
            </motion.div>

            {/* Reason 3 */}
            <motion.div
              variants={fadeIn}
              className="card p-4 sm:p-6 text-center"
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <FaHandshake size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Reliability
              </h3>
              <p className="text-gray-600 text-sm lg:text-base">
                With over 15 years of experience, we ensure smooth, hassle-free
                travel experiences for our clients
              </p>
            </motion.div>

            {/* Reason 4 */}
            <motion.div
              variants={fadeIn}
              className="card p-4 sm:p-6 text-center"
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-earth-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <FaSmile size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Our 95% customer satisfaction rate and numerous repeat clients
                speak to our commitment to excellence
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
              Meet Our Team
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind Varanasi Tour & Travels
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {/* Team Member 1 */}
            <motion.div variants={fadeIn} className="card overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Rakesh Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  Rakesh Sharma
                </h3>
                <p className="text-primary-500 mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm lg:text-base">
                  Varanasi native with 20+ years of experience in tourism and a
                  deep passion for sharing the city's rich heritage.
                </p>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div variants={fadeIn} className="card overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg"
                  alt="Priya Patel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">Priya Patel</h3>
                <p className="text-primary-500 mb-3">Operations Manager</p>
                <p className="text-gray-600 text-sm lg:text-base">
                  Tourism professional with expertise in creating seamless
                  travel experiences and managing logistics.
                </p>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div variants={fadeIn} className="card overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                  alt="Amar Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">Amar Singh</h3>
                <p className="text-primary-500 mb-3">Head Guide</p>
                <p className="text-gray-600 text-sm lg:text-base">
                  Expert on Varanasi's history and culture with a background in
                  religious studies and local traditions.
                </p>
              </div>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div variants={fadeIn} className="card overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                  alt="Neha Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">Neha Gupta</h3>
                <p className="text-primary-500 mb-3">Customer Relations</p>
                <p className="text-gray-600 text-sm lg:text-base">
                  Dedicated to ensuring exceptional customer experiences and
                  handling client communications.
                </p>
              </div>
            </motion.div>
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
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Explore Varanasi with Us?
            </h2>
            <p className="text-base lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our team today to plan your unforgettable journey through
              the spiritual capital of India
            </p>
            <a
              href="tel:+919415255168"
              className="btn bg-white text-primary-500 hover:bg-gray-100 text-base sm:text-lg mr-4"
            >
              Call Us Now
            </a>
            <a
              href="https://wa.me/919415255168"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-secondary-500 text-white hover:bg-secondary-600 text-base sm:text-lg"
            >
              WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
