import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ name, location, testimonial, rating, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="card p-6 bg-white shadow-elegant"
    >
      <div className="flex justify-between items-start mb-4">
        <FaQuoteLeft className="text-primary-200 text-4xl" />
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
      </div>

      <p className="text-gray-600 mb-6 italic text-sm lg:text-base">
        "{testimonial}"
      </p>

      <div>
        <p className="font-semibold text-gray-800 text-sm md:text-base">
          {name}
        </p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
