const transportation = [
  {
    id: 'cabs',
    title: 'Cabs & Taxis',
    description: 'Comfortable and convenient transportation for city tours and intercity travel.',
    options: [
      {
        name: 'City Tour Package',
        description: 'Explore all major attractions in Varanasi with a knowledgeable driver-guide in an air-conditioned car.',
        duration: '8 hours',
        price: '₹3,000 onwards',
        image: 'https://images.pexels.com/photos/193021/pexels-photo-193021.jpeg',
        features: ['AC Vehicle', 'Experienced Driver', 'Flexible Timings', 'Bottled Water', 'Pick & Drop from Hotel']
      },
      {
        name: 'Airport/Railway Station Transfer',
        description: 'Hassle-free transfers between your accommodation and airport or railway station.',
        duration: 'As needed',
        price: '₹800 onwards',
        image: 'https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg',
        features: ['AC Vehicle', '24/7 Service', 'Flight Tracking', 'Meet & Greet', 'Luggage Assistance']
      },
      {
        name: 'Intercity Travel',
        description: 'Comfortable car service for traveling to nearby cities like Allahabad, Ayodhya, or Lucknow.',
        duration: 'Variable',
        price: '₹12 per km',
        image: 'https://images.pexels.com/photos/4119562/pexels-photo-4119562.jpeg',
        features: ['AC Vehicle', 'Experienced Driver', 'Multiple Stops Allowed', 'Overnight Trips', 'Customizable Itinerary']
      }
    ]
  },
  {
    id: 'rentals',
    title: 'Vehicle Rentals',
    description: 'Self-drive and chauffeur-driven vehicles for flexibility and convenience.',
    options: [
      {
        name: 'Daily Car Rental',
        description: 'Rent a chauffeur-driven car for the day to explore at your own pace.',
        duration: '12 hours',
        price: '₹2,500 onwards',
        image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
        features: ['Multiple Car Options', 'Fuel Inclusive', 'Local Driver', 'No Hidden Charges', 'Flexible Timing']
      },
      {
        name: 'Weekly Car Rental',
        description: 'Long-term car rental with driver for extended stays in Varanasi.',
        duration: '7 days',
        price: '₹15,000 onwards',
        image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg',
        features: ['Unlimited Kilometers', 'Driver Accommodation', 'Multiple Car Options', 'Itinerary Planning Assistance', '24/7 Support']
      },
      {
        name: 'Two-Wheeler Rental',
        description: 'Scooters and motorcycles for independent exploration of the city.',
        duration: 'Daily/Weekly',
        price: '₹500 per day onwards',
        image: 'https://images.pexels.com/photos/2949293/pexels-photo-2949293.jpeg',
        features: ['Helmets Provided', 'Easy to Navigate', 'Fuel Efficient', 'Multiple Models Available', 'ID Required']
      }
    ]
  },
  {
    id: 'buses',
    title: 'Bus Tours & Services',
    description: 'Economical options for group travel and sightseeing tours.',
    options: [
      {
        name: 'Hop-On Hop-Off Tour',
        description: 'Explore major attractions in Varanasi at your own pace with all-day bus service.',
        duration: '1 day pass',
        price: '₹999 per person',
        image: 'https://images.pexels.com/photos/2539186/pexels-photo-2539186.jpeg',
        features: ['Multiple Stops', 'Audio Guide', 'Air-conditioned', 'Frequent Service', 'Valid for 24 hours']
      },
      {
        name: 'Group Tour Bus',
        description: 'Chartered bus service for large groups, families, or corporate events.',
        duration: 'As needed',
        price: 'Custom quotes',
        image: 'https://images.pexels.com/photos/68629/pexels-photo-68629.jpeg',
        features: ['Various Bus Sizes', 'Professional Driver', 'AC Comfort', 'Customizable Routes', 'Group Discounts']
      },
      {
        name: 'Spiritual Circuit Tour',
        description: 'Guided bus tour covering Varanasi, Sarnath, and other religious sites in one day.',
        duration: '10 hours',
        price: '₹1,200 per person',
        image: 'https://images.pexels.com/photos/6382/highway-street-car-vehicle.jpg',
        features: ['Professional Guide', 'AC Bus', 'Lunch Included', 'Entrance Fees Included', 'Hotel Pickup']
      }
    ]
  },
  {
    id: 'boats',
    title: 'River Boat Services',
    description: 'Traditional and modern boat experiences on the sacred Ganges River.',
    options: [
      {
        name: 'Sunrise Boat Ride',
        description: 'Experience the magical sunrise on the Ganges with a traditional boat ride along the ghats.',
        duration: '2 hours',
        price: '₹800 per boat (max 4 people)',
        image: 'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg',
        features: ['Traditional Wooden Boat', 'Experienced Boatman', 'View of Morning Rituals', 'Peaceful Experience', 'Photography Opportunities']
      },
      {
        name: 'Evening Aarti Boat Tour',
        description: 'Witness the spectacular Ganga Aarti ceremony from the river perspective.',
        duration: '2 hours',
        price: '₹1,000 per boat (max 4 people)',
        image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg',
        features: ['Perfect View of Ceremonies', 'Traditional Boat', 'Floating Candle Experience', 'Cultural Insights', 'Magical Atmosphere']
      },
      {
        name: 'Private Luxury Boat Tour',
        description: 'Explore the Ganges in comfort with a modern motorboat and personalized service.',
        duration: '3 hours',
        price: '₹5,000 onwards',
        image: 'https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg',
        features: ['Comfortable Seating', 'Refreshments Included', 'Knowledgeable Guide', 'Longer Range', 'Customizable Route']
      }
    ]
  }
]

export default transportation