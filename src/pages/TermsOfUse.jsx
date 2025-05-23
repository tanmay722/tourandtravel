import { motion } from "framer-motion";
// images
import heroImg from "../assets/sectionHero.jpg";

const TermsOfUse = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="pt-10 md:pt-16 bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative py-10 sm:py-14 lg:py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImg})`,
        }}
      >
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Terms of Use
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container-custom px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10"
          >
            <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
              {[
                {
                  title: "1. Acceptance of Terms",
                  content: `By accessing or using the services provided by Varanasi Tour and Travels ("we," "us," or "our"), including our website, booking services, or tour operations, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.`,
                },
                {
                  title: "2. Booking and Reservation Policy",
                  content: [
                    "2.1. Booking Confirmation: All bookings are subject to availability and confirmation. A booking is confirmed only after we have received the required deposit or full payment and issued a written confirmation.",
                    "2.2. Payment: We accept payments via bank transfer, credit card, and other specified payment methods. The payment terms will be specified at the time of booking.",
                    "2.3. Prices: All prices are quoted in Indian Rupees (INR) unless otherwise specified. Prices are subject to change due to unforeseen circumstances such as currency fluctuations, fuel price increases, or government tax changes.",
                  ],
                },
                {
                  title: "3. Cancellation and Refund Policy",
                  content: [
                    "3.1. Cancellation by Customer: Cancellation of confirmed bookings must be made in writing. Refunds will be processed according to our Refund Policy, which can be found on our website.",
                    "3.2. Cancellation by Company: We reserve the right to cancel or modify a tour due to unforeseen circumstances, safety concerns, or insufficient participation. In such cases, we will offer a suitable alternative or a full refund.",
                  ],
                },
                {
                  title: "4. Travel Documentation",
                  content: [
                    "4.1. Travel Insurance: We strongly recommend that all customers obtain comprehensive travel insurance that covers medical expenses, trip cancellation, loss of belongings, and other potential travel risks.",
                    "4.2. Identification: Customers are responsible for carrying valid identification documents (such as passport, visa, etc.) as required for domestic and international travel.",
                  ],
                },
                {
                  title: "5. Liability and Limitations",
                  content: [
                    "5.1. Safety: While we take all reasonable measures to ensure the safety of our customers, participation in tours and activities is at the customer's own risk. Customers should follow safety instructions provided by our guides and staff.",
                    "5.2. Limitation of Liability: Varanasi Tour and Travels shall not be liable for any injury, loss, damage, accident, delay, or irregularity that may be caused during any tour or activity.",
                    "5.3. Force Majeure: We are not liable for any delay, cancellation, or alteration of services due to events beyond our control, including but not limited to natural disasters, political unrest, strikes, or pandemic situations.",
                  ],
                },
                {
                  title: "6. Customer Responsibilities",
                  content: [
                    "6.1. Code of Conduct: Customers must conduct themselves in a manner that does not disrupt the enjoyment of others or disrespect local customs and traditions. We reserve the right to terminate the tour of any customer whose behavior is deemed inappropriate, with no refund provided.",
                    "6.2. Physical Requirements: Customers should inform us of any medical conditions, disabilities, or special requirements at the time of booking. Some tours may have physical requirements that should be considered before booking.",
                  ],
                },
                {
                  title: "7. Intellectual Property",
                  content:
                    "All content on our website, including text, graphics, logos, button icons, images, audio clips, and software, is the property of Varanasi Tour and Travels or its content suppliers and is protected by international copyright laws.",
                },
                {
                  title: "8. Privacy Policy",
                  content:
                    "Our Privacy Policy, which can be found on our website, explains how we collect, use, and protect your personal information.",
                },
                {
                  title: "9. Governing Law",
                  content:
                    "These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Varanasi, Uttar Pradesh.",
                },
                {
                  title: "10. Amendments",
                  content:
                    "We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes indicates your acceptance of the modified terms.",
                },
                {
                  title: "11. Contact Information",
                  content: (
                    <>
                      If you have any questions or concerns about these Terms of
                      Use, please contact us at:
                      <br />
                      <span className="text-gray-600 text-xs sm:text-sm">
                        Varanasi Tour and Travels
                        <br />
                        2nd Floor, Plot No - 52, Patel Nagar, Mint Road,
                        Nadesar, Varanasi, Uttar Pradesh 221002, India
                        <br />
                        Email: officialtoursup@gmail.com
                        <br />
                        Phone: +91 9415255168
                      </span>
                    </>
                  ),
                },
              ].map((section, index) => (
                <div key={index}>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                    {section.title}
                  </h2>
                  {Array.isArray(section.content) ? (
                    section.content.map((para, idx) => (
                      <p key={idx} className="mb-3">
                        {para}
                      </p>
                    ))
                  ) : (
                    <p className="mb-3">{section.content}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
