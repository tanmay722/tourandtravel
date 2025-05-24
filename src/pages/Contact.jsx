import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

//images
import heroImg from "../assets/sectionHero.jpg";

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
              Contact Us
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-gray-200 max-w-3xl mx-auto">
              We're here to help you plan the perfect Varanasi experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-2xl md:text-3xl text-center md:text-left font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-500 mr-4">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className="text-md md:text-lg font-semibold text-gray-900 mb-1">
                      Our Office
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      2nd Floor, Plot No - 52, Patel Nagar, Mint Road, Nadesar,
                      Varanasi, Uttar Pradesh 221002, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-500 mr-4">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <h3 className="text-md md:text-lg font-semibold text-gray-900 mb-1">
                      Phone Numbers
                    </h3>
                    <p className="text-gray-600 mb-1">
                      <a
                        href="tel:+919415255168"
                        className="hover:text-primary-500 transition-colors"
                      >
                        +91 9415255168
                      </a>{" "}
                      (Bookings & Inquiries)
                    </p>
                    <p className="text-gray-600 text-sm md:text-base">
                      <a
                        href="tel:+919876543211"
                        className="hover:text-primary-500 transition-colors"
                      >
                        +91 9876543211
                      </a>{" "}
                      (Customer Support)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-500 mr-4">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="text-md md:text-lg font-semibold text-gray-900 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600 mb-1">
                      <a
                        href="mailto:officialtoursup@gmail.com"
                        className="hover:text-primary-500 transition-colors"
                      >
                        officialtoursup@gmail.com
                      </a>{" "}
                      (General Inquiries)
                    </p>
                    <p className="text-gray-600 text-sm md:text-base">
                      <a
                        href="mailto:officialtoursup@gmail.com"
                        className="hover:text-primary-500 transition-colors"
                      >
                        officialtoursup@gmail.com
                      </a>{" "}
                      (Bookings)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-500 mr-4">
                    <FaWhatsapp size={20} />
                  </div>
                  <div>
                    <h3 className="text-md md:text-lg font-semibold text-gray-900 mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      <a
                        href="https://wa.me/919415255168"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-500 transition-colors"
                      >
                        +91 9415255168
                      </a>{" "}
                      (Quick Response)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-500 mr-4">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h3 className="text-md md:text-lg font-semibold text-gray-900 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600 mb-1">
                      Monday - Saturday: 9:00 AM - 8:00 PM
                    </p>
                    <p className="text-gray-600 text-sm md:text-base">
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-md md:text-lg font-semibold text-gray-900 mb-3">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Contact Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6"
            >
              {/* Call Us Card */}
              <div className="bg-white rounded-lg shadow-luxury p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-4">
                  Call Us Now
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  Speak directly with our travel experts for immediate
                  assistance and personalized recommendations.
                </p>
                <a
                  href="tel:+919415255168"
                  className="inline-flex items-center justify-center w-full bg-primary-500 text-white py-2 md:py-4 px-2 sm:px-4 md:px-6 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  <FaPhoneAlt className="mr-2" />
                  +91 9415255168
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white rounded-lg shadow-luxury p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-4">
                  WhatsApp Us
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  Send us a message on WhatsApp for quick responses and easy
                  communication.
                </p>
                <a
                  href="https://wa.me/919415255168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-green-500 text-white py-2 md:py-4 px-2 sm:px-4 md:px-6 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp className="mr-2" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-lg shadow-luxury p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-4">
                  Email Us
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  Send us an email for detailed inquiries and special requests.
                </p>
                <a
                  href="mailto:officialtoursup@gmail.com"
                  className="inline-flex items-center justify-center w-full bg-accent-500 text-white py-2 md:py-4 px-2 sm:px-4 md:px-6 rounded-lg hover:bg-accent-600 transition-colors"
                >
                  <FaEnvelope className="mr-2" />
                  officialtoursup@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="rounded-lg overflow-hidden shadow-luxury h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d14424.276900325458!2d82.98038!3d25.335458!3m2!1i1024!2i768!4f13.1!2m1!1s2nd%20Floor%2C%20Plot%20No%20-%2052%2C%20Patel%20Nagar%2C%20Mint%20Road%2C%20Nadesar%2C%20Varanasi%2C%20Uttar%20Pradesh%20221002%2C%C2%A0India!5e0!3m2!1sen!2sus!4v1747918884488!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Varanasi Tour and Travels Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
