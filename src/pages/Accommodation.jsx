import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaStar } from "react-icons/fa";

//data
import accommodations from "../data/accommodation";

//images
import heroImg from "../assets/sectionhero.jpg";

const Accommodation = () => {
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
              Accommodation Options
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-gray-200 max-w-3xl mx-auto">
              Find your perfect stay in Varanasi, from luxury hotels to
              authentic riverside guesthouses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Your Home in the Sacred City
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8">
              Varanasi offers a diverse range of accommodation options to suit
              every traveler's needs and preferences. From international luxury
              hotels with modern amenities to boutique heritage properties
              overlooking the Ganges, and budget-friendly guesthouses that
              provide an authentic local experience.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              We partner with the best properties in each category to ensure our
              clients receive exceptional service, comfortable accommodations,
              and the best value for their budget. Let us help you find the
              perfect place to stay during your spiritual journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accommodation Categories */}
      {accommodations.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-8 sm:py-12 md:py-16 ${
            index % 2 === 0 ? "bg-gray-50" : "bg-white"
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
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
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        {option.name}
                      </h3>
                      <div className="flex">
                        {[...Array(option.stars)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-2 md:mb-4 text-sm md:text-base">
                      {option.description}
                    </p>

                    {/* Amenities */}
                    <div className="mb-4 md:mb-6">
                      <p className="font-semibold text-gray-900 mb-2">
                        Amenities
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {option.amenities.map((amenity, amenityIndex) => (
                          <span
                            key={amenityIndex}
                            className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
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

      {/* Custom Accommodation */}
      <section className="py-16 bg-primary-400">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center text-white"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Need Help Finding the Perfect Accommodation?
            </h2>
            <p className="text-base md:text-lg xl:text-xl mb-8 max-w-3xl mx-auto">
              Our local experts can recommend the best options based on your
              preferences, budget, and travel dates
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+919415255168"
                className="btn bg-white text-primary-500 hover:bg-gray-100 text-base md:text-lg"
              >
                <FaPhoneAlt className="mr-2" />
                Call for Recommendations
              </a>

              <a
                href="https://wa.me/919415255168"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-secondary-500 text-white hover:bg-secondary-600 text-base md:text-lg"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about accommodation in Varanasi
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-4 md:space-y-6"
          >
            <motion.div variants={fadeIn} className="card p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                When should I book my accommodation in Varanasi?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                We recommend booking your accommodation at least 1-2 months in
                advance, especially during peak season (October to March) and
                during major festivals like Dev Deepawali, Maha Shivaratri, and
                Holi when Varanasi gets extremely busy.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="card p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Which area is best to stay in Varanasi?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                The area around the ghats (especially Assi Ghat, Dashashwamedh
                Ghat, and Manikarnika Ghat) is ideal for experiencing the
                spiritual essence of Varanasi. The Cantonment area offers modern
                accommodations slightly away from the bustling old city. For a
                quieter stay, Sarnath (about 10 km from Varanasi) is peaceful
                and has good options.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="card p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Do hotels in Varanasi offer airport/railway station pickup?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Yes, most mid-range and luxury hotels offer airport and railway
                station transfers, often for an additional fee. We can arrange
                this service for you when booking your accommodation through us,
                regardless of which property you choose.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="card p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Are there any additional charges or taxes?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Hotel rates in India typically do not include GST (Goods and
                Services Tax), which is currently 12-18% depending on the room
                tariff. Some hotels may also charge additional service fees. We
                always provide transparent pricing with all taxes and fees
                included when you book through us.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
