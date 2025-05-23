import { motion } from "framer-motion";
import heroImg from "../assets/sectionHero.jpg";

const PrivacyPolicy = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="pt-12 md:pt-16 bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16 lg:py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImg})`,
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto">
              How we collect, use, and protect your personal information
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8"
          >
            <div className="space-y-6 text-gray-800 text-sm sm:text-base leading-relaxed">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                1. Introduction
              </h2>
              <p>
                Varanasi Tour and Travels ("we," "us," or "our") is committed to
                protecting your privacy...
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                2. Information We Collect
              </h2>
              <p>2.1. Personal Information: ...</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Contact information</li>
                <li>Identification information</li>
                <li>Payment information</li>
              </ul>
              <p>2.2. Automatically Collected Information: ...</p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Process and confirm bookings</li>
                <li>Provide support</li>
                <li>Improve services</li>
              </ul>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                4. Disclosure of Your Information
              </h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Service providers</li>
                <li>Payment processors</li>
              </ul>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational
                measures...
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                6. Your Rights
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access, correction, deletion</li>
                <li>Data portability, objection</li>
              </ul>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                7. Cookies and Similar Technologies
              </h2>
              <p>We use cookies to enhance your experience...</p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                8. International Data Transfers
              </h2>
              <p>Your information may be transferred internationally...</p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                9. Children's Privacy
              </h2>
              <p>
                We do not knowingly collect data from individuals under 18...
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                10. Changes to This Policy
              </h2>
              <p>We may update this Privacy Policy from time to time...</p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                11. Contact Us
              </h2>
              <p>If you have any questions, please contact us:</p>
              <p className="text-xs sm:text-sm text-gray-600">
                Varanasi Tour and Travels
                <br />
                2nd Floor, Plot No - 52, Patel Nagar, Mint Road, Nadesar,
                Varanasi, Uttar Pradesh 221002, India
                <br />
                Email: officialtoursup@gmail.com
                <br />
                Phone: +91 9415255168
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
