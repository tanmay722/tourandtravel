import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import places from "../data/places";
import PopularPlaceCard from "../components/PopularPlaceCard";

//images
import heroImg from "../assets/sectionHero.jpg";

const PopularPlaces = () => {
  const [filter, setFilter] = useState("all");
  const [filteredPlaces, setFilteredPlaces] = useState(places);
  const placesSectionRef = useRef(null); // Reference for the places section

  useEffect(() => {
    if (filter === "all") {
      setFilteredPlaces(places);
    } else {
      setFilteredPlaces(
        places.filter((place) => place.categories.includes(filter))
      );
    }
    // Scroll to the places section when the filter changes
    if (placesSectionRef.current) {
      placesSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [filter]);

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
              Popular Places in Varanasi
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-gray-200 max-w-3xl mx-auto">
              Explore the spiritual, historical, and cultural landmarks that
              make Varanasi one of the world's most fascinating cities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-4 sm:py-6 md:py-8 bg-gray-50 sticky top-12 md:top-16 z-20 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-2 sm:px-4 lg:px-6 py-1 lg:py-2 rounded-full transition-colors ${
                filter === "all"
                  ? "bg-primary-400 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              All Places
            </button>
            <button
              onClick={() => setFilter("religious")}
              className={`px-2 sm:px-4 lg:px-6 py-1 lg:py-2 rounded-full transition-colors ${
                filter === "religious"
                  ? "bg-primary-400 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Religious
            </button>
            <button
              onClick={() => setFilter("historical")}
              className={`px-2 sm:px-4 lg:px-6 py-1 lg:py-2 rounded-full transition-colors ${
                filter === "historical"
                  ? "bg-primary-400 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Historical
            </button>
            <button
              onClick={() => setFilter("cultural")}
              className={`px-2 sm:px-4 lg:px-6 py-1 lg:py-2 rounded-full transition-colors ${
                filter === "cultural"
                  ? "bg-primary-400 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Cultural
            </button>
            <button
              onClick={() => setFilter("educational")}
              className={`px-2 sm:px-4 lg:px-6 py-1 lg:py-2 rounded-full transition-colors ${
                filter === "educational"
                  ? "bg-primary-400 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Educational
            </button>
          </div>
        </div>
      </section>

      {/* Places Grid */}
      <section ref={placesSectionRef} className="py-8 sm:py-12 md:py-16">
        <div className="container-custom">
          {filteredPlaces.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPlaces.map((place) => (
                <PopularPlaceCard
                  key={place.id}
                  place={place}
                  variants={fadeIn}
                />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                No places found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category
              </p>
            </div>
          )}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Visit These Places?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Book a guided tour with our expert local guides for an authentic
              Varanasi experience
            </p>
            <a
              href="tel:+919415255168"
              className="btn bg-white text-secondary-500 hover:bg-gray-100 text-base sm:text-lg mr-4 mb-2"
            >
              Call to Book: +91 9415255168
            </a>
            <a
              href="https://wa.me/919415255168"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-primary-400 text-white hover:bg-primary-500 text-base sm:text-lg"
            >
              WhatsApp Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PopularPlaces;
