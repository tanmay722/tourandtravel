import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'

const PopularPlaceCard = ({ place, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="card overflow-hidden group"
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={place.image} 
          alt={place.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center text-white/90 text-sm mb-2">
            <FaMapMarkerAlt className="mr-1 text-primary-400" />
            <span>{place.location}</span>
          </div>
          <h3 className="text-xl font-bold text-white">{place.name}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">
          {place.shortDescription}
        </p>
        <Link 
          to={`/popular-places/${place.id}`}
          className="inline-block font-medium text-secondary-500 hover:text-secondary-600 transition-colors"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  )
}

export default PopularPlaceCard