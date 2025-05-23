import img1 from "../assets/dashashwamedh-ghat/1.jpg";
import img2 from "../assets/dashashwamedh-ghat/2.jpg";
import img3 from "../assets/dashashwamedh-ghat/3.jpg";
import img4 from "../assets/dashashwamedh-ghat/4.jpg";
import img5 from "../assets/dashashwamedh-ghat/5.jpg";

import img6 from "../assets/manikarnika-ghat/1.jpg";
import img7 from "../assets/manikarnika-ghat/2.jpg";
import img8 from "../assets/manikarnika-ghat/3.jpg";

import img9 from "../assets/kashi-vishwanath-temple/1.jpg";
import img10 from "../assets/kashi-vishwanath-temple/2.jpg";
import img11 from "../assets/kashi-vishwanath-temple/3.jpg";
import img12 from "../assets/kashi-vishwanath-temple/4.jpg";

import img13 from "../assets/sarnath/1.jpg";
import img14 from "../assets/sarnath/2.jpg";
import img15 from "../assets/sarnath/3.jpg";
import img16 from "../assets/sarnath/4.webp";

import img17 from "../assets/banaras-hindu-university/1.jpg";
import img18 from "../assets/banaras-hindu-university/2.jpg";
import img19 from "../assets/banaras-hindu-university/3.jpg";
import img20 from "../assets/banaras-hindu-university/4.jpg";

import img21 from "../assets/ramnagar-fort/1.jpg";
import img22 from "../assets/ramnagar-fort/2.jpg";
import img23 from "../assets/ramnagar-fort/3.jpg";
import img24 from "../assets/ramnagar-fort/4.jpg";

const places = [
  {
    id: "dashashwamedh-ghat",
    name: "Dashashwamedh Ghat",
    shortDescription:
      "The main and oldest ghat of Varanasi located on the Ganges River.",
    description: `Dashashwamedh Ghat is the main ghat in Varanasi on the Ganges River. It is located close to Vishwanath Temple and is probably the most spectacular ghat. Two Hindu mythologies are associated with it: According to one, Lord Brahma created it to welcome Lord Shiva. According to another, Lord Brahma sacrificed ten horses during a yajna here.

    Every evening at sunset, thousands gather to witness the spectacular Ganga Aarti ceremony, where priests perform a synchronized worship ritual with fire, incense, flowers, and bells. The air fills with chants and the riverfront glows with the light of hundreds of small lamps.
    
    Dashashwamedh Ghat is not just a religious site but also a cultural hub where visitors can experience local life, take boat rides, and interact with sadhus and local vendors.`,
    image: img1,
    gallery: [img2, img3, img4, img5],
    location: "Dashashwamedh Ghat Road, Varanasi, Uttar Pradesh",
    type: "Ghat",
    timings: "Open 24 hours, Ganga Aarti: 6:30 PM - 7:30 PM daily",
    entryFee: "Free",
    bestTimeToVisit:
      "October to March, Sunrise or during the evening Ganga Aarti",
    nearbyAttractions: [
      "Kashi Vishwanath Temple",
      "Manikarnika Ghat",
      "Godowlia Market",
    ],
    categories: ["religious", "popular", "featured"],
  },
  {
    id: "kashi-vishwanath-temple",
    name: "Kashi Vishwanath Temple",
    shortDescription:
      "One of the most famous Hindu temples dedicated to Lord Shiva.",
    description: `The Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva and is located in Vishwanath Gali of Varanasi, Uttar Pradesh, India. The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas, the holiest of Shiva temples.

    The main deity is known by the name Vishwanatha or Vishweshwara meaning Ruler of the Universe. The temple complex consists of a series of smaller shrines, located in a small lane called the Vishwanatha Galli, near the river. The linga of the main deity at the shrine is 60 cm tall and 90 cm in circumference housed in a silver altar.
    
    The temple structure was destroyed multiple times by invaders throughout history and was rebuilt several times. The current structure was built in 1780 by Queen Ahilyabai Holkar of Indore. The magnificent new Kashi Vishwanath Corridor project, completed in 2021, has transformed the area around the temple, creating a vast and beautiful complex that enhances the spiritual experience.`,
    image: img9,
    gallery: [img10, img11, img12],
    location: "Lahori Tola, Varanasi, Uttar Pradesh",
    type: "Temple",
    timings: "3:00 AM - 11:00 PM daily",
    entryFee: "Free",
    bestTimeToVisit: "October to March, Early morning for Mangala Aarti",
    nearbyAttractions: [
      "Dashashwamedh Ghat",
      "Manikarnika Ghat",
      "Annapurna Temple",
    ],
    categories: ["religious", "popular", "featured"],
  },
  {
    id: "sarnath",
    name: "Sarnath",
    shortDescription:
      "The place where Buddha delivered his first sermon after attaining enlightenment.",
    description: `Sarnath is a place located 10 kilometers north-east of Varanasi near the confluence of the Ganges and the Varuna rivers. The deer park in Sarnath is where Gautama Buddha first taught the Dharma, and where the Buddhist Sangha came into existence through the enlightenment of Kondanna.

    Sarnath is home to the iconic Dhamek Stupa, which marks the spot where Buddha gave his first sermon. The site also includes the Ashoka Pillar, whose lion capital has been adopted as India's national emblem. The Archaeological Museum houses a rich collection of Buddhist sculptures, including the famous Ashoka Lion Capital.
    
    The site continues to be an important place of pilgrimage for Buddhists from around the world. The peaceful surroundings and the spiritual significance make it a must-visit location for those interested in Buddhist history and philosophy.`,
    image: img13,
    gallery: [img14, img15, img16],
    location: "Sarnath, Varanasi, Uttar Pradesh",
    type: "Archaeological Site",
    timings:
      "Museum: 9:00 AM - 5:00 PM (Closed on Fridays), Site: Sunrise to Sunset",
    entryFee:
      "Archaeological Site: ₹20 for Indians, ₹200 for foreigners; Museum: ₹15 for Indians, ₹200 for foreigners",
    bestTimeToVisit: "October to March",
    nearbyAttractions: [
      "Varanasi City",
      "Mulagandha Kuti Vihar",
      "Chaukhandi Stupa",
    ],
    categories: ["historical", "popular", "featured"],
  },
  {
    id: "manikarnika-ghat",
    name: "Manikarnika Ghat",
    shortDescription:
      "The primary site for Hindu cremation ceremonies in Varanasi.",
    description: `Manikarnika Ghat is one of the holiest cremation grounds among the sacred riverfronts (ghats), alongside the river Ganges, in the city of Varanasi. It is believed that a dead human's soul finds salvation (moksha) when cremated here.

    According to Hindu mythology, Manikarnika Ghat is especially sacred because it is believed that Lord Vishnu dug a pit with his chakra and filled it with his perspiration while performing various penances. Later, when Lord Shiva was wandering with the body of his wife Sati, his earring (manikarnika) fell at this place.
    
    The Ghat is characterized by the constant burning of funeral pyres and the presence of sacred rituals. While it may seem overwhelming to some visitors, witnessing the ceremonies from a respectful distance can be a profound experience, offering insight into Hindu beliefs about life, death, and the cycle of rebirth.`,
    image: img6,
    gallery: [img7, img8],
    location: "Manikarnika Ghat Road, Varanasi, Uttar Pradesh",
    type: "Ghat",
    timings: "Open 24 hours",
    entryFee: "Free",
    bestTimeToVisit: "Early morning for a boat ride view",
    nearbyAttractions: [
      "Kashi Vishwanath Temple",
      "Dashashwamedh Ghat",
      "Scindia Ghat",
    ],
    categories: ["religious", "cultural"],
  },
  {
    id: "banaras-hindu-university",
    name: "Banaras Hindu University",
    shortDescription:
      "One of the largest residential universities in Asia with a beautiful campus.",
    description: `Banaras Hindu University (BHU) is a public central university located in Varanasi. Established in 1916 by Pandit Madan Mohan Malaviya, it is one of the largest residential universities in Asia with over 30,000 students.

    The sprawling campus houses the famous Bharat Kala Bhavan museum, which contains a vast collection of paintings, rare manuscripts, and sculptures dating back to several centuries. The New Vishwanath Temple within the campus is a replica of the original Kashi Vishwanath Temple and is a popular place of worship.
    
    The university is renowned for its academic excellence and cultural contributions. Its beautiful campus with wide roads, lush gardens, and notable architecture makes it a peaceful retreat in the bustling city of Varanasi. Visitors often come to admire the blend of traditional Indian architecture and modern educational facilities.`,
    image: img17,
    gallery: [img18, img19, img20],
    location: "BHU Campus, Varanasi, Uttar Pradesh",
    type: "Educational Institution",
    timings:
      "Campus: Open daily, Museum: 10:00 AM - 5:00 PM (Closed on Sundays)",
    entryFee: "Campus: Free, Museum: Nominal fee",
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Assi Ghat", "Tulsi Manas Temple", "Durga Temple"],
    categories: ["educational", "cultural"],
  },
  {
    id: "ramnagar-fort",
    name: "Ramnagar Fort",
    shortDescription:
      "A 17th-century fort and palace on the eastern bank of the Ganges River.",
    description: `Ramnagar Fort is a fortification in Ramnagar, Varanasi, built in the 18th century by Kashi Naresh Raja Balwant Singh. The fort is a typical example of Mughal architecture with carved balconies, open courtyards, and scenic pavilions.

    The fort houses a museum displaying the royal collection, including vintage cars, royal costumes, ivory works, antique clocks, and an impressive armory of swords and old guns. The Veda Vyasa Temple and the famous Dakshin Mukhi Hanuman Temple are also located inside the fort complex.
    
    One of the main attractions at Ramnagar Fort is the Ram Leela, which is a dramatic folk reenactment of the Ramayana held annually during the festival of Dussehra. The royal family of Benares still resides in the fort, maintaining their traditions and cultural heritage.`,
    image: img21,
    gallery: [img22, img23, img24],
    location: "Ramnagar, Varanasi, Uttar Pradesh",
    type: "Fort & Museum",
    timings: "10:00 AM - 5:00 PM (Closed on Fridays)",
    entryFee: "₹20 for Indians, ₹200 for foreigners",
    bestTimeToVisit: "October to March, During Ram Leela in October-November",
    nearbyAttractions: [
      "Chet Singh Ghat",
      "Assi Ghat",
      "Banaras Hindu University",
    ],
    categories: ["historical", "cultural"],
  },
];

export default places;
