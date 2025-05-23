import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaCar,
  FaHotel,
} from "react-icons/fa";
import places from "../data/places";

const PlaceDetail = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundPlace = places.find((p) => p.id === id);
    if (foundPlace) {
      setPlace(foundPlace);
      setActiveImage(foundPlace.image);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (!place) {
    return (
      <div className="pt-12 md:pt-16 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Place Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The place you're looking for doesn't exist or may have been moved.
        </p>
        <Link to="/popular-places" className="btn btn-primary">
          View All Places
        </Link>
      </div>
    );
  }

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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${place.image})`,
        }}
      >
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 bg-primary-400 text-white rounded-full text-sm mb-4">
              {place.type}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {place.name}
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-gray-200 max-w-3xl mx-auto">
              {place.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Info */}
            <div className="lg:col-span-2">
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  About {place.name}
                </h2>
                <div className="prose max-w-none text-sm sm:text-base text-gray-600 mb-8">
                  {place.description.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Key Information */}
                <div className="bg-gray-50 rounded-lg p-4 md:p-6 mb-4 sm:mb-6 md:mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Key Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="text-primary-500 mt-1 mr-3">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <span className="block text-sm text-gray-500">
                          Location
                        </span>
                        <span className="text-gray-700 text-sm md:text-base">
                          {place.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-primary-500 mt-1 mr-3">
                        <FaClock />
                      </div>
                      <div>
                        <span className="block text-sm text-gray-500">
                          Opening Hours
                        </span>
                        <span className="text-gray-700 text-sm md:text-base">
                          {place.timings}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-primary-500 mt-1 mr-3">
                        <FaMoneyBillWave />
                      </div>
                      <div>
                        <span className="block text-sm text-gray-500">
                          Entry Fee
                        </span>
                        <span className="text-gray-700 text-sm md:text-base">
                          {place.entryFee}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-primary-500 mt-1 mr-3">
                        <FaCalendarAlt />
                      </div>
                      <div>
                        <span className="block text-sm text-gray-500">
                          Best Time to Visit
                        </span>
                        <span className="text-gray-700 text-sm md:text-base">
                          {place.bestTimeToVisit}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nearby Attractions */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Nearby Attractions
                  </h3>
                  <ul className="space-y-2">
                    {place.nearbyAttractions.map((attraction, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="text-secondary-500 mr-3">
                          <FaMapMarkedAlt />
                        </div>
                        <span className="text-gray-700 text-sm md:text-base">
                          {attraction}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Gallery & Booking */}
            <div>
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                {/* Main Image */}
                <div className="rounded-lg overflow-hidden mb-4">
                  <img
                    src={activeImage}
                    alt={place.name}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-2 mb-8">
                  {[place.image, ...place.gallery].map((img, idx) => (
                    <div
                      key={idx}
                      className={`cursor-pointer rounded-md overflow-hidden ${
                        activeImage === img ? "ring-2 ring-primary-500" : ""
                      }`}
                      onClick={() => setActiveImage(img)}
                    >
                      <img
                        src={img}
                        alt={`${place.name} ${idx}`}
                        className="w-full h-20 object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Book Now */}
                <div className="bg-primary-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-primary-500 mb-4">
                    Book Your Visit
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Want to explore {place.name} with a knowledgeable local
                    guide? Contact us now to book your tour.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+919415255168"
                      className="flex items-center justify-center w-full py-3 px-4 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
                    >
                      <FaPhoneAlt className="mr-2" />
                      Call to Book
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
                </div>

                {/* Related Services */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Related Services
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/transportation"
                        className="flex items-center text-secondary-500 hover:text-secondary-600 transition-colors"
                      >
                        <FaCar className="mr-2" />
                        <span>Transportation Services</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/accommodation"
                        className="flex items-center text-secondary-500 hover:text-secondary-600 transition-colors"
                      >
                        <FaHotel className="mr-2" />
                        <span>Accommodation Options</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/popular-places"
                        className="flex items-center text-secondary-500 hover:text-secondary-600 transition-colors"
                      >
                        <FaMapMarkedAlt className="mr-2" />
                        <span>Explore More Places</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-secondary-500">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
              Ready to Experience {place.name}?
            </h2>
            <p className="text-sm md:text-base text-white/90 mb-8 max-w-3xl mx-auto">
              Book a guided tour with our expert local guides for an authentic
              Varanasi experience
            </p>
            <a
              href="tel:+919415255168"
              className="btn bg-white text-secondary-500 hover:bg-gray-100 text-base md:text-lg mr-4 mb-2"
            >
              Call Now: +91 9415255168
            </a>
            <Link
              to="/popular-places"
              className="btn bg-primary-400 text-white hover:bg-primary-500 text-base md:text-lg"
            >
              Explore More Places
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PlaceDetail;
