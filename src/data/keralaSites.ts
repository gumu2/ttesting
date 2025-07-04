import { ReligiousSite } from '../types';

export const keralaSites: ReligiousSite[] = [
  // TEMPLES
  {
    id: 'sabarimala-ayyappan-temple',
    name: 'Sabarimala Ayyappan Temple',
    type: 'Temple',
    typeColor: 'bg-orange-100 text-orange-800',
    state: 'Kerala',
    location: 'Pathanamthitta district',
    description: 'Sabarimala Sree Dharma Sastha Temple is one of the most famous pilgrimage centers in India, dedicated to Lord Ayyappan. Situated amidst the dense forests and hills of the Western Ghats at an altitude of 3000 feet above sea level, it is surrounded by 18 hills and requires devotees to undertake a rigorous pilgrimage (Vratam) to seek blessings.',
    image: 'https://imgs.search.brave.com/FTXnB3leHbqGoBJk3Vpu8OHAKcH49EFOnJOwRBu8y1g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNDg3/MzE3MC5qcGc',
    timings: 'Open only during specific periods: Mandala-Makaravilakku Festival (Mid-November to Mid-January), Vishu (Mid-April), First 5 days of each Malayalam month, Onam festival',
    prasad: 'Aravana, Appam, Nei Payasam',
    amenities: [
      'Basic dormitory and guest house facilities',
      'Medical facilities and first-aid centers',
      'Annadanam (free meals)',
      'Restrooms along trekking path',
      'Pamba River for sacred bathing',
      'Parking at Nilakkal'
    ],
    festivals: [
      'Mandala-Makaravilakku Festival',
      'Makara Jyothi',
      'Makaravilakku',
      'Vishu',
      'Onam'
    ],
    contact: '+91 4734 202100',
    website: 'https://www.sabarimalatemple.org',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 170 km',
      railway: 'Chengannur Railway Station (CNGR) - 90 km',
      bus: 'Pamba Base Camp - 4 km trek to temple'
    },
    nearbyAttractions: [
      'Pamba River',
      'Sannidhanam',
      'Neelimala Viewpoint',
      'Pampa Ganapathi Temple'
    ],
    nearbyHotels: [
      'KTDC Periyar House Pamba',
      'Sabari Lodge Pamba',
      'Various dormitories at Sannidhanam'
    ],
    nearbyRestaurants: [
      'Annadanam centers',
      'Small eateries at Pamba',
      'Temple food stalls'
    ],
    specialFeatures: [
      'One of the most famous pilgrimage centers in India',
      '41-day Vratam (austerity) required before pilgrimage',
      'Unique secular aspect - open to all castes and religions',
      'Makara Jyothi celestial light phenomenon',
      'Dense forest trekking path to reach temple'
    ]
  },
  {
    id: 'guruvayoor-sree-krishna-temple',
    name: 'Guruvayoor Sree Krishna Temple',
    type: 'Temple',
    typeColor: 'bg-orange-100 text-orange-800',
    state: 'Kerala',
    location: 'Guruvayoor, Thrissur district',
    description: 'Guruvayoor Sree Krishna Temple is one of the most important Hindu pilgrimage centers in Kerala, dedicated to Lord Krishna, worshipped as Guruvayoorappan. Often referred to as the "Dwarka of the South," this temple is believed to be over 5,000 years old and is famous for its Krishnanattam traditional temple art form.',
    image: 'https://static.toiimg.com/thumb/102174103/Guruvayoor_Temple_1.jpg?width=636&height=358&resize=4',
    timings: 'Morning: 3:00 AM to 1:30 PM, Evening: 4:30 PM to 9:30 PM',
    prasad: 'Unni Appam, Nei Payasam, Laddu',
    amenities: [
      'Numerous lodges and guesthouses',
      'Prasadam counter',
      'Annadanam (free meals)',
      'Public restrooms',
      'Cloakrooms for belongings',
      'Designated parking areas'
    ],
    festivals: [
      'Guruvayoor Ekadasi',
      'Janmashtami',
      'Navarathri',
      'Vishu',
      'Krishnanattam performances'
    ],
    contact: '+91 487 2556335',
    website: 'https://www.guruvayoortemple.org',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 78 km',
      railway: 'Guruvayoor Railway Station (GV) - 1 km',
      bus: 'Guruvayoor Bus Stand - 0.5 km'
    },
    nearbyAttractions: [
      'Mammiyoor Mahadeva Temple',
      'Punnathur Kotta Elephant Sanctuary',
      'Chavakkad Beach',
      'Parthasarathy Temple'
    ],
    nearbyHotels: [
      'KTDC Mayura Guruvayoor',
      'Hotel Sopanam Heritage',
      'Bhasuri Inn',
      'Various pilgrim lodges'
    ],
    nearbyRestaurants: [
      'Annadanam centers',
      'Krishna Inn Restaurant',
      'Saravana Bhavan',
      'Local vegetarian eateries'
    ],
    specialFeatures: [
      'Over 5,000 years old temple',
      'Idol worshipped by Lord Brahma and Narada',
      'Famous for Krishnanattam temple art form',
      'Known as "Dwarka of the South"',
      'Elephant sanctuary nearby'
    ]
  },
  {
    id: 'chottanikkara-bhagavathy-temple',
    name: 'Chottanikkara Bhagavathy Temple',
    type: 'Temple',
    typeColor: 'bg-orange-100 text-orange-800',
    state: 'Kerala',
    location: 'Chottanikkara, Ernakulam district',
    description: 'Chottanikkara Bhagavathy Temple is a prominent Hindu temple dedicated to Goddess Bhagavathy (Durga and Lakshmi) and Lord Mahavishnu. The temple is especially renowned for its healing powers, particularly for mental illnesses and exorcism, with unique dual deity concept in upper and lower shrines.',
    image: 'https://imgs.search.brave.com/9_ruSZeFmr4wifh1HEhPLrI7VEuCAgjGcmQXzO2ODqw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/ZXJuYWt1bGFtLzA0/LzA0ODRwNDg0c3Rk/OTAwMDAwNC9jYXRh/bG9ndWUvc3JpLWNo/b3R0YW5pa2thcmEt/YmhhZ2F2YXRoeS10/ZW1wbGUtY2hvdHRh/bmlrYXJhLWVybmFr/dWxhbS10ZW1wbGVz/LTE3b2FtaC5wbmc_/dz0zODQwJnE9NzU',
    timings: 'Morning: 4:00 AM to 12:30 PM, Evening: 4:00 PM to 8:30 PM',
    prasad: 'Payasam, Appam, Coconut offerings',
    amenities: [
      'Guesthouses and hotels nearby',
      'Prasadam counter',
      'Annadanam (free meals)',
      'Basic restroom facilities',
      'Parking around temple',
      'Healing consultation centers'
    ],
    festivals: [
      'Makam Thozhal',
      'Navarathri',
      'Kumbha Bharani',
      'Guruthi Pooja',
      'Annual festival'
    ],
    contact: '+91 484 2810234',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 35 km',
      railway: 'Ernakulam Junction (ERS) - 17 km',
      bus: 'Chottanikkara Bus Stop - 1 km'
    },
    nearbyAttractions: [
      'Vypin Island',
      'Fort Kochi',
      'Mattancherry Palace',
      'Marine Drive Kochi'
    ],
    nearbyHotels: [
      'Hotels in Kochi city',
      'Local guesthouses',
      'Homestays in Ernakulam'
    ],
    nearbyRestaurants: [
      'Annadanam centers',
      'Local Kerala restaurants',
      'Kochi city eateries'
    ],
    specialFeatures: [
      'Renowned for healing powers and exorcism',
      'Dual deity concept - Mela Kavu and Kizhukavu',
      'Famous Guruthi Pooja ritual',
      'Significant pilgrimage site for mental health',
      'Unique temple architecture'
    ]
  },
  {
    id: 'thirunavaya-navamukunda-temple',
    name: 'Thirunavaya Navamukunda Temple',
    type: 'Temple',
    typeColor: 'bg-orange-100 text-orange-800',
    state: 'Kerala',
    location: 'Thirunavaya, Malappuram district',
    description: 'Thirunavaya Navamukunda Temple is an ancient and historically significant Hindu temple dedicated to Lord Vishnu, worshipped as Navamukundan. Located on the banks of the Bharathapuzha River, it is one of the 108 Divya Desams and famous for the historic Mamankam festival held once every 12 years.',
    image: 'https://imgs.search.brave.com/Q-TEX4SnpsWErDs_vm-TqIRyJ4B2XZ8UZch_no3iwvI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rYWx5/YW5nZWV0aGEud29y/ZHByZXNzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/OC9wb29ybmF0aHJh/eWVlc2EtdGVtcGxl/LnBuZz93PTU4MA',
    timings: 'Morning: 5:00 AM to 12:00 PM, Evening: 5:00 PM to 7:00 PM',
    prasad: 'Payasam, Appam, River offerings',
    amenities: [
      'Prasadam counter',
      'Basic restroom facilities',
      'River access for rituals',
      'Parking facilities'
    ],
    festivals: [
      'Mamankam (once in 12 years)',
      'Ekadasi',
      'Vishu',
      'Navarathri',
      'Pithru Tharpanam'
    ],
    contact: '+91 494 2462789',
    nearestTransport: {
      airport: 'Calicut International Airport (CCJ) - 45 km',
      railway: 'Tirunnavaya Railway Station (TUA) - Walking distance',
      bus: 'Thirunavaya Bus Stop - 0.5 km'
    },
    nearbyAttractions: [
      'Bharathapuzha River',
      'Kuttippuram',
      'Ponnani',
      'Malappuram town'
    ],
    nearbyHotels: [
      'Hotels in Malappuram',
      'Kuttippuram lodges',
      'Local guesthouses'
    ],
    nearbyRestaurants: [
      'Local Kerala eateries',
      'Riverbank food stalls',
      'Traditional restaurants'
    ],
    specialFeatures: [
      'One of 108 Divya Desams',
      'Historic Mamankam festival venue',
      'Located on Bharathapuzha riverbank',
      'Important site for Pithru Tharpanam',
      'Idol consecrated by nine sages'
    ]
  },
  {
    id: 'vadakkunnathan-temple-thrissur',
    name: 'Vadakkunnathan Temple, Thrissur',
    type: 'Temple',
    typeColor: 'bg-orange-100 text-orange-800',
    state: 'Kerala',
    location: 'Thrissur city',
    description: 'Vadakkunnathan Temple is an ancient Hindu temple dedicated to Lord Shiva, located in the heart of Thrissur city on a hillock called Thekkinkadu Maidan. A UNESCO World Heritage Site and classic example of Kerala architecture, it is the central venue for the famous Thrissur Pooram festival.',
    image: 'https://imgs.search.brave.com/rfxDP9eZiIIJogG1oiuxsIgTlgPMy1SftfzKGqmACgU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yb2hp/bmkudXMvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMTAvVmFk/YWtrdW1uYXRoYW4t/VGVtcGxlLVRocmlz/c3VyLmpwZw',
    timings: 'Morning: 4:00 AM to 11:00 AM, Evening: 5:00 PM to 8:30 PM',
    prasad: 'Payasam, Appam, Prasadam',
    amenities: [
      'Limited parking around Maidan',
      'Restroom facilities',
      'Religious item shops',
      'Circumambulation path',
      'Heritage museum'
    ],
    festivals: [
      'Thrissur Pooram',
      'Sivarathri',
      'Navarathri',
      'Annual festival',
      'Elephant processions'
    ],
    contact: '+91 487 2421452',
    website: 'https://www.vadakkunnathan.org',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 53 km',
      railway: 'Thrissur Railway Station (TCR) - 1.5 km',
      bus: 'Thrissur KSRTC Bus Stand - 1 km'
    },
    nearbyAttractions: [
      'Thrissur Zoo',
      'Archaeological Museum',
      'Shakthan Thampuran Palace',
      'Athirapally Falls'
    ],
    nearbyHotels: [
      'KTDC Yatri Nivas',
      'Hotel Luciya Palace',
      'Joys Palace',
      'Various city hotels'
    ],
    nearbyRestaurants: [
      'Pathans Restaurant',
      'Hotel Bharath',
      'Local Kerala cuisine restaurants',
      'Street food stalls'
    ],
    specialFeatures: [
      'UNESCO World Heritage Site',
      'Built by Parasurama',
      'Classic Kerala architecture',
      'Central venue for Thrissur Pooram',
      'Exquisite murals and carvings'
    ]
  },
  {
    id: 'paramekkavu-bhagavathy-temple',
    name: 'Paramekkavu Bhagavathy Temple, Thrissur',
    type: 'Temple',
    typeColor: 'bg-orange-100 text-orange-800',
    state: 'Kerala',
    location: 'Swaraj Round, Thrissur city',
    description: 'Paramekkavu Bhagavathy Temple is one of the two major temples participating in the Thrissur Pooram festival, dedicated to Goddess Bhagavathy. Located adjacent to the Vadakkunnathan Temple complex, it leads the Paramekkavu faction in the grand Pooram procession with elaborately decorated elephants.',
    image: 'https://imgs.search.brave.com/hTouLVNVwFqXXSz3Htq_zEw4lD3XqF4R11G4lU7Tflc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEudGhyaWxsb3Bo/aWxpYS5jb20vZmls/ZXN0b3JlL3JiZHFu/ZmRjbnJ5dDQycGt0/cnN2c252dWN3MHVf/MTU1MDc0NjAxM19r/ZXJhbGEtZm9sa2xv/cmUtdGhlYXRlci1h/bmQtbXVzZXVtLWtv/Y2hpLTIuanBnLmpw/Zz93PTE0NDAmZHBy/PTI',
    timings: 'Morning: 4:00 AM to 12:30 PM, Evening: 4:00 PM to 8:30 PM',
    prasad: 'Payasam, Appam, Goddess offerings',
    amenities: [
      'Prasadam counter',
      'Limited street parking',
      'Religious item shops nearby',
      'Restroom facilities'
    ],
    festivals: [
      'Thrissur Pooram',
      'Navarathri',
      'Annual festival',
      'Melam and Panchavadyam performances',
      'Elephant processions'
    ],
    contact: '+91 487 2421789',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 55 km',
      railway: 'Thrissur Railway Station (TCR) - 2 km',
      bus: 'Thrissur KSRTC Bus Stand - 1.5 km'
    },
    nearbyAttractions: [
      'Vadakkunnathan Temple',
      'Thiruvambadi Temple',
      'Thrissur Round',
      'City center attractions'
    ],
    nearbyHotels: [
      'Hotels in Thrissur city',
      'KTDC accommodations',
      'Private lodges'
    ],
    nearbyRestaurants: [
      'Thrissur city restaurants',
      'Traditional Kerala eateries',
      'Festival food stalls'
    ],
    specialFeatures: [
      'Major participant in Thrissur Pooram',
      'Leads Paramekkavu faction',
      'Elaborate elephant decorations',
      'Traditional percussion ensembles',
      'Sister temple to Kodungallur Bhagavathy'
    ]
  },
  {
    id: 'thiruvambadi-sri-krishna-temple',
    name: 'Thiruvambadi Sri Krishna Temple, Thrissur',
    type: 'Temple',
    typeColor: 'bg-orange-100 text-orange-800',
    state: 'Kerala',
    location: 'Thrissur city',
    description: 'Thiruvambadi Sri Krishna Temple is another pivotal participant in the Thrissur Pooram, dedicated to Lord Krishna. Located in the heart of Thrissur city opposite the Vadakkunnathan Temple from Paramekkavu, it represents the Thiruvambadi faction with its own set of caparisoned elephants and traditional musical performances.',
    image: 'https://imgs.search.brave.com/aC637ERcNEGUeJEGww-gOp4DkpIhstr-THgtYrhOHHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYXJt/NS5zdGF0aWNmbGlj/a3IuY29tLzQ4NjMv/NDU2ODA1OTUxOTVf/N2UyNDVlYTcyNF9u/LmpwZw',
    timings: 'Morning: 4:30 AM to 12:00 PM, Evening: 5:00 PM to 8:30 PM',
    prasad: 'Krishna Prasadam, Payasam, Butter offerings',
    amenities: [
      'Prasadam counter',
      'Limited street parking',
      'Religious item shops nearby',
      'Restroom facilities'
    ],
    festivals: [
      'Thrissur Pooram',
      'Janmashtami',
      'Navarathri',
      'Annual festival',
      'Traditional music performances'
    ],
    contact: '+91 487 2421890',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 55 km',
      railway: 'Thrissur Railway Station (TCR) - 2 km',
      bus: 'Thrissur KSRTC Bus Stand - 1.5 km'
    },
    nearbyAttractions: [
      'Vadakkunnathan Temple',
      'Paramekkavu Temple',
      'Thrissur Round',
      'City attractions'
    ],
    nearbyHotels: [
      'Thrissur city hotels',
      'KTDC properties',
      'Local accommodations'
    ],
    nearbyRestaurants: [
      'City restaurants',
      'Kerala cuisine eateries',
      'Pooram festival food stalls'
    ],
    specialFeatures: [
      'Key participant in Thrissur Pooram',
      'Represents Thiruvambadi faction',
      'Beautiful Krishna idol',
      'Competitive spirit with Paramekkavu',
      'Traditional musical performances'
    ]
  },
  {
    id: 'ambalapuzha-sree-krishna-temple',
    name: 'Ambalapuzha Sree Krishna Temple',
    type: 'Temple',
    typeColor: 'bg-orange-100 text-orange-800',
    state: 'Kerala',
    location: 'Ambalapuzha, Alappuzha district',
    description: 'Ambalapuzha Sree Krishna Temple is a famous Hindu temple dedicated to Lord Krishna, particularly renowned for its unique "Palpayasam" (sweet milk porridge) offering. The temple dates back to the 15th-16th century and houses the same idol believed to be worshipped by Arjuna in the Mahabharata era.',
    image: 'https://i.pinimg.com/736x/4f/66/b2/4f66b26ba29164710cb5a75cb879ac44.jpg',
    timings: 'Morning: 3:00 AM to 12:00 PM, Evening: 5:00 PM to 7:00 PM',
    prasad: 'Famous Ambalapuzha Palpayasam, Appam, Payasam',
    amenities: [
      'Famous Palpayasam for purchase',
      'Basic restroom facilities',
      'Parking near temple',
      'Prasadam counter'
    ],
    festivals: [
      'Champakulam Boat Race',
      'Janmashtami',
      'Annual festival',
      'Arattu festival',
      'Boat race connections'
    ],
    contact: '+91 477 2272456',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 85 km',
      railway: 'Ambalappuzha Railway Station (AMPA) - 1.5 km',
      bus: 'Ambalapuzha Bus Stand - 1 km'
    },
    nearbyAttractions: [
      'Alappuzha Backwaters',
      'Champakulam',
      'Kumarakom',
      'Backwater cruises'
    ],
    nearbyHotels: [
      'Backwater resorts',
      'Alappuzha hotels',
      'Houseboats',
      'Local lodges'
    ],
    nearbyRestaurants: [
      'Backwater restaurants',
      'Kerala cuisine eateries',
      'Local fish curry restaurants',
      'Traditional food stalls'
    ],
    specialFeatures: [
      'Famous for unique Palpayasam offering',
      'Idol from Mahabharata era',
      'Connection to Champakulam Boat Race',
      'Promise fulfillment legend',
      '15th-16th century history'
    ]
  },
  {
    id: 'ettumanoor-mahadeva-temple',
    name: 'Ettumanoor Mahadeva Temple',
    type: 'Temple',
    typeColor: 'bg-orange-100 text-orange-800',
    state: 'Kerala',
    location: 'Ettumanoor, Kottayam district',
    description: 'Ettumanoor Mahadeva Temple is an ancient and prominent Shiva temple famous for its beautiful murals, especially the "Pradosham" mural depicting Shiva\'s cosmic dance (Nataraja). Believed to be one of the 108 Shiva temples consecrated by Parasurama, it features the famous "ezharaponnana" (seven and a half golden elephants).',
    image: 'https://imgs.search.brave.com/Y7WsmcE-WQjCXAhH_XFM35zcYHpTK4v0BEuj3u0YObw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2VyYWxhdG91cmlz/bS5vcmcvX25leHQv/aW1hZ2UvP3VybD1o/dHRwOi8vMTI3LjAu/MC4xL2t0YWRtaW4v/aW1nL3BhZ2VzL2xh/cmdlLWRlc2t0b3Av/ZXR0dW1hbm9vci1t/YWhhZGV2YS10ZW1w/bGUtMTcyMzU1MDA4/NF84ZTc5ZDE0Y2Vm/YjZjMjVkZGNjMC53/ZWJwJnc9Mzg0MCZx/PTc1',
    timings: 'Morning: 4:00 AM to 12:00 PM, Evening: 5:00 PM to 8:00 PM',
    prasad: 'Payasam, Appam, Shiva offerings',
    amenities: [
      'Prasadam counter',
      'Basic restroom facilities',
      'Parking around temple',
      'Mural viewing areas'
    ],
    festivals: [
      'Arattu festival (February-March)',
      'Sivarathri',
      'Ezharaponnana procession',
      'Annual festival',
      'Pradosham celebrations'
    ],
    contact: '+91 481 2572345',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 75 km',
      railway: 'Ettumanoor Railway Station (ETM) - 2 km',
      bus: 'Ettumanoor Bus Stand - 1 km'
    },
    nearbyAttractions: [
      'Kottayam town',
      'Vaikom Mahadeva Temple',
      'Kumarakom Bird Sanctuary',
      'Vembanad Lake'
    ],
    nearbyHotels: [
      'Kottayam hotels',
      'Local guesthouses',
      'Kumarakom resorts',
      'Budget accommodations'
    ],
    nearbyRestaurants: [
      'Kottayam restaurants',
      'Traditional Kerala eateries',
      'Local food stalls',
      'Vegetarian restaurants'
    ],
    specialFeatures: [
      'One of 108 Shiva temples by Parasurama',
      'Famous Nataraja mural',
      'Ezharaponnana golden elephants',
      '16th century structure',
      'Exceptional Kerala art examples'
    ]
  },
  {
    id: 'haripad-sree-subrahmanya-swamy-temple',
    name: 'Haripad Sree Subrahmanya Swamy Temple',
    type: 'Temple',
    typeColor: 'bg-orange-100 text-orange-800',
    state: 'Kerala',
    location: 'Haripad, Alappuzha district',
    description: 'Haripad Sree Subrahmanya Swamy Temple is one of the oldest and most important temples dedicated to Lord Subrahmanya (Kartikeya) in Kerala. The temple is known for its annual "Paipally Palliyodam" (snake boat) festival and is believed to have been consecrated by Parasurama with an idol found in Kayamkulam backwaters.',
    image: 'https://i.pinimg.com/736x/71/b2/31/71b231d971ba9fe8dc81b748414fa68c.jpg',
    timings: 'Morning: 4:00 AM to 12:00 PM, Evening: 5:00 PM to 8:00 PM',
    prasad: 'Payasam, Appam, Subrahmanya offerings',
    amenities: [
      'Prasadam counter',
      'Basic restroom facilities',
      'Parking facilities',
      'Boat race viewing areas'
    ],
    festivals: [
      'Subrahmanya Shashti',
      'Paipally Palliyodam festival',
      'Snake boat processions',
      'Annual festival',
      'Skanda Shashti'
    ],
    contact: '+91 477 2282567',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 100 km',
      railway: 'Haripad Railway Station (HPAD) - 3 km',
      bus: 'Haripad Bus Stand - 2 km'
    },
    nearbyAttractions: [
      'Achankovil River',
      'Kayamkulam backwaters',
      'Alappuzha backwaters',
      'Snake boat race venues'
    ],
    nearbyHotels: [
      'Alappuzha hotels',
      'Local guesthouses',
      'Backwater resorts',
      'Budget accommodations'
    ],
    nearbyRestaurants: [
      'Local Kerala restaurants',
      'Backwater eateries',
      'Traditional food stalls',
      'Fish curry specialists'
    ],
    specialFeatures: [
      'One of oldest Subrahmanya temples',
      'Consecrated by Parasurama',
      'Idol found in backwaters',
      'Famous snake boat festival',
      'Achankovil River processions'
    ]
  },
  {
    id: 'chengannur-mahadeva-temple',
    name: 'Chengannur Mahadeva Temple',
    type: 'Temple',
    typeColor: 'bg-orange-100 text-orange-800',
    state: 'Kerala',
    location: 'Chengannur, Alappuzha district',
    description: 'Chengannur Mahadeva Temple is a significant Hindu temple complex dedicated to Lord Shiva and Goddess Parvati (as Bhagavathy). The temple is unique for its connection to the menstrual cycle of the deity, with the famous "Thripputhu" phenomenon where a red stain appears on the goddess\'s cloth, symbolizing menstruation.',
    image: 'https://i.pinimg.com/736x/4d/0b/1b/4d0b1bcb7f399780bdc39538e51394c6.jpg',
    timings: 'Morning: 4:00 AM to 11:30 AM, Evening: 5:00 PM to 8:00 PM (varies during Thripputhu period)',
    prasad: 'Payasam, Appam, Special offerings during Thripputhu',
    amenities: [
      'Prasadam counter',
      'Basic restroom facilities',
      'Parking facilities',
      'Separate shrine for purification rituals'
    ],
    festivals: [
      'Thripputhu (menstruation period)',
      'Sivarathri',
      'Navarathri',
      'Annual festival',
      'Special women prayers'
    ],
    contact: '+91 479 2452678',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 115 km',
      railway: 'Chengannur Railway Station (CNGR) - 1.5 km',
      bus: 'Chengannur Bus Stand - 1 km'
    },
    nearbyAttractions: [
      'Sabarimala (base point)',
      'Pamba River',
      'Aranmula',
      'Pandalam'
    ],
    nearbyHotels: [
      'Sabarimala pilgrimage hotels',
      'Chengannur lodges',
      'Local guesthouses',
      'Pilgrim accommodations'
    ],
    nearbyRestaurants: [
      'Pilgrim restaurants',
      'Local Kerala eateries',
      'Vegetarian restaurants',
      'Traditional food stalls'
    ],
    specialFeatures: [
      'Unique Thripputhu menstruation phenomenon',
      'Red stain appears on deity cloth',
      'Special purification rituals',
      'Women offer special prayers',
      'Attracts devotees from across India'
    ]
  },

  // CHURCHES
  {
    id: 'st-francis-church-kochi',
    name: 'St. Francis Church, Kochi',
    type: 'Church',
    typeColor: 'bg-purple-100 text-purple-800',
    state: 'Kerala',
    location: 'Fort Kochi',
    description: 'The oldest European church in India, built in 1503 by Portuguese Franciscan friars. Vasco da Gama was originally buried here before his remains were moved to Lisbon. The church showcases a blend of European and local architectural styles and is a significant historical landmark.',
    image: 'https://i.pinimg.com/736x/9f/4d/f5/9f4df5fb386484fe98ee34895abfe9fc.jpg',
    timings: 'Daily: 9:00 AM to 5:30 PM, Sunday services',
    prasad: 'Holy Communion, Blessed items, Prayer offerings',
    amenities: [
      'Historical museum displays',
      'Vasco da Gama memorial',
      'Tourist information center',
      'Photography permitted',
      'Guided tours available',
      'Heritage walk connections'
    ],
    festivals: [
      'Christmas',
      'Easter',
      'Good Friday',
      'St. Francis feast',
      'Heritage celebrations'
    ],
    contact: '+91 484 2217104',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 40 km',
      railway: 'Ernakulam Junction (ERS) - 15 km',
      bus: 'Fort Kochi Bus Stand - 1 km'
    },
    nearbyAttractions: [
      'Chinese Fishing Nets',
      'Mattancherry Palace',
      'Jewish Synagogue',
      'Santa Cruz Cathedral',
      'Fort Kochi Beach'
    ],
    nearbyHotels: [
      'Brunton Boatyard',
      'Old Harbour Hotel',
      'Fort House Hotel',
      'Heritage accommodations'
    ],
    nearbyRestaurants: [
      'Fort House Restaurant',
      'Kashi Art Cafe',
      'Oceanos Restaurant',
      'Colonial era eateries'
    ],
    specialFeatures: [
      'Oldest European church in India',
      'Built in 1503 by Portuguese',
      'Vasco da Gama burial site',
      'Blend of European and local architecture',
      'Significant historical landmark',
      'UNESCO World Heritage area'
    ]
  },
  {
    id: 'santa-cruz-cathedral-kochi',
    name: 'Santa Cruz Cathedral, Kochi',
    type: 'Church',
    typeColor: 'bg-purple-100 text-purple-800',
    state: 'Kerala',
    location: 'Fort Kochi',
    description: 'One of the eight basilicas in Kerala, this cathedral was originally built by the Portuguese in 1558. The current structure was rebuilt in 1905 and is known for its beautiful interior paintings and Gothic architecture. It serves as the cathedral of the Diocese of Cochin.',
    image: 'https://i.pinimg.com/736x/58/4f/cc/584fcc74cfac2c95bfcb858deeb4bdbf.jpg',
    timings: 'Daily: 6:00 AM to 7:00 PM, Multiple masses daily',
    prasad: 'Holy Communion, Blessed items, Cathedral offerings',
    amenities: [
      'Beautiful interior paintings',
      'Gothic architectural features',
      'Cathedral status facilities',
      'Diocese administrative center',
      'Religious art displays',
      'Tourist-friendly services'
    ],
    festivals: [
      'Christmas',
      'Easter',
      'Good Friday',
      'Feast of Santa Cruz',
      'Diocese celebrations'
    ],
    contact: '+91 484 2215577',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 40 km',
      railway: 'Ernakulam Junction (ERS) - 15 km',
      bus: 'Fort Kochi Bus Stand - 1 km'
    },
    nearbyAttractions: [
      'St. Francis Church',
      'Chinese Fishing Nets',
      'Mattancherry Palace',
      'Fort Kochi Beach',
      'Heritage walk routes'
    ],
    nearbyHotels: [
      'Brunton Boatyard',
      'Old Harbour Hotel',
      'Fort House Hotel',
      'Colonial heritage hotels'
    ],
    nearbyRestaurants: [
      'Heritage restaurants',
      'Fort Kochi eateries',
      'Colonial cuisine',
      'Waterfront dining'
    ],
    specialFeatures: [
      'One of eight basilicas in Kerala',
      'Originally built by Portuguese in 1558',
      'Rebuilt in 1905',
      'Beautiful interior paintings',
      'Gothic architecture',
      'Cathedral of Diocese of Cochin'
    ]
  },
  {
    id: 'st-marys-forane-church-kuravilangad',
    name: 'St. Mary\'s Forane Church, Kuravilangad',
    type: 'Church',
    typeColor: 'bg-purple-100 text-purple-800',
    state: 'Kerala',
    location: 'Kuravilangad, Kottayam District',
    description: 'One of the oldest Syro-Malabar Catholic churches in Kerala, believed to have been established by St. Thomas the Apostle in 52 AD. The church is famous for its miraculous statue of Mother Mary and attracts pilgrims from across India.',
    image: 'https://i.pinimg.com/736x/0b/c0/f5/0bc0f5008e250ca02bde2a0e992d3740.jpg',
    timings: 'Daily: 5:00 AM to 8:00 PM, Multiple masses daily',
    prasad: 'Holy Communion, Blessed oil, Miraculous medals',
    amenities: [
      'Miraculous statue of Mother Mary',
      'Pilgrimage facilities',
      'Syro-Malabar liturgy',
      'Healing prayer services',
      'Accommodation for pilgrims',
      'Candle lighting areas'
    ],
    festivals: [
      'Feast of St. Mary (September 8)',
      'Christmas',
      'Easter',
      'Good Friday',
      'Syro-Malabar celebrations'
    ],
    contact: '+91 481 2572890',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 70 km',
      railway: 'Kottayam Railway Station (KTYM) - 15 km',
      bus: 'Kuravilangad Bus Stop - 1 km'
    },
    nearbyAttractions: [
      'Kottayam town',
      'Kumarakom Bird Sanctuary',
      'Vembanad Lake',
      'Ettumanoor Temple'
    ],
    nearbyHotels: [
      'Kottayam hotels',
      'Pilgrimage guest houses',
      'Kumarakom resorts',
      'Local accommodations'
    ],
    nearbyRestaurants: [
      'Pilgrimage restaurants',
      'Kottayam eateries',
      'Traditional Kerala cuisine',
      'Vegetarian options'
    ],
    specialFeatures: [
      'Established by St. Thomas in 52 AD',
      'One of oldest Syro-Malabar churches',
      'Miraculous statue of Mother Mary',
      'Famous for healing miracles',
      'Major pilgrimage destination',
      'Ancient Christian heritage'
    ]
  },
  {
    id: 'st-alphonsa-church-bharananganam',
    name: 'St. Alphonsa Church, Bharananganam',
    type: 'Church',
    typeColor: 'bg-purple-100 text-purple-800',
    state: 'Kerala',
    location: 'Bharananganam, Kottayam District',
    description: 'The shrine of St. Alphonsa, the first canonized saint of Indian origin. Built at the place where she lived and died, this church attracts thousands of pilgrims seeking her intercession for healing and miracles.',
    image: 'https://imgs.search.brave.com/If3cfJ_MepfDQxFH7ESI5coksI-Q9Y9cvP3oBUVVYTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/a290dGF5YW0vczUv/OTk5OXB4NDgxLng0/ODEuMTcxMjIxMDA1/NTU5LmY3czUvY2F0/YWxvZ3VlL3NhaW50/LWFscGhvbnNhLXN5/cm8tbWFsYWJhci1j/YXRob2xpYy1jaHVy/Y2gtYmhhcmFuYW5n/YW5hbS1rb3R0YXlh/bS1jaHVyY2hlcy15/dHV0bGp4MjkyLmpw/Zz93PTM4NDAmcT03/NQ',
    timings: 'Daily: 5:00 AM to 8:00 PM, Special prayer services',
    prasad: 'Holy Communion, Blessed items, St. Alphonsa relics',
    amenities: [
      'Shrine of St. Alphonsa',
      'Relic chapel',
      'Pilgrimage facilities',
      'Healing prayer services',
      'Museum of St. Alphonsa',
      'Accommodation for pilgrims'
    ],
    festivals: [
      'Feast of St. Alphonsa (July 28)',
      'Christmas',
      'Easter',
      'Good Friday',
      'Canonization anniversary'
    ],
    contact: '+91 481 2573456',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 75 km',
      railway: 'Kottayam Railway Station (KTYM) - 20 km',
      bus: 'Bharananganam Bus Stop - 1 km'
    },
    nearbyAttractions: [
      'Kottayam town',
      'St. Mary\'s Forane Church',
      'Kumarakom',
      'Vembanad Lake'
    ],
    nearbyHotels: [
      'Pilgrimage guest houses',
      'Kottayam hotels',
      'Local accommodations',
      'Spiritual retreat centers'
    ],
    nearbyRestaurants: [
      'Pilgrimage restaurants',
      'Local Kerala eateries',
      'Vegetarian restaurants',
      'Traditional food stalls'
    ],
    specialFeatures: [
      'Shrine of first Indian canonized saint',
      'St. Alphonsa lived and died here',
      'Famous for healing miracles',
      'Major pilgrimage destination',
      'Relic chapel',
      'International pilgrimage site'
    ]
  },
  {
    id: 'st-george-church-edappally',
    name: 'St. George Church, Edappally',
    type: 'Church',
    typeColor: 'bg-purple-100 text-purple-800',
    state: 'Kerala',
    location: 'Edappally, Kochi',
    description: 'One of the most famous St. George churches in Kerala, known for its annual feast that attracts hundreds of thousands of devotees. The church is believed to have miraculous powers and is a major pilgrimage site for Christians in Kerala.',
    image: 'https://i.pinimg.com/736x/6a/5e/b4/6a5eb4c4c67449ee5a36a0c0786f71fa.jpg',
    timings: 'Daily: 5:00 AM to 8:00 PM, Multiple masses daily',
    prasad: 'Holy Communion, Blessed oil, St. George medals',
    amenities: [
      'Large church complex',
      'Pilgrimage facilities',
      'Feast celebration grounds',
      'Parking for thousands',
      'Medical facilities during feast',
      'Accommodation facilities'
    ],
    festivals: [
      'St. George Feast (April/May)',
      'Christmas',
      'Easter',
      'Good Friday',
      'Annual celebrations'
    ],
    contact: '+91 484 2345123',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 25 km',
      railway: 'Ernakulam Junction (ERS) - 10 km',
      bus: 'Edappally Bus Stand - 1 km'
    },
    nearbyAttractions: [
      'Lulu Mall',
      'Kochi city center',
      'Marine Drive',
      'Wonderla Amusement Park'
    ],
    nearbyHotels: [
      'Kochi city hotels',
      'Edappally accommodations',
      'Pilgrimage guest houses',
      'Modern hotels'
    ],
    nearbyRestaurants: [
      'Feast food stalls',
      'Kochi restaurants',
      'Traditional Kerala cuisine',
      'Multi-cuisine eateries'
    ],
    specialFeatures: [
      'Famous annual St. George feast',
      'Hundreds of thousands of devotees',
      'Believed to have miraculous powers',
      'Major pilgrimage site',
      'Largest St. George celebration in Kerala',
      'Community harmony symbol'
    ]
  },

  // MOSQUES
  {
    id: 'cheraman-juma-masjid-kodungallur',
    name: 'Cheraman Juma Masjid, Kodungallur',
    type: 'Mosque',
    typeColor: 'bg-green-100 text-green-800',
    state: 'Kerala',
    location: 'Kodungallur, Thrissur District',
    description: 'Believed to be the first mosque in India, built in 629 AD during the lifetime of Prophet Muhammad. According to tradition, it was built by Malik Ibn Dinar after King Cheraman Perumal converted to Islam. The mosque showcases traditional Kerala architecture with Islamic elements.',
    image: 'https://i.pinimg.com/736x/05/30/2a/05302a25becb010360637553452d7c0b.jpg',
    timings: 'Five daily prayers, special Friday congregations',
    prasad: 'Community meals during festivals, Charitable distributions',
    amenities: [
      'Historic prayer hall',
      'Traditional Kerala architecture',
      'Museum of Islamic heritage',
      'Pilgrimage facilities',
      'Educational center',
      'Community gathering spaces'
    ],
    festivals: [
      'Eid al-Fitr',
      'Eid al-Adha',
      'Milad-un-Nabi',
      'Cheraman Perumal commemoration',
      'Islamic heritage celebrations'
    ],
    contact: '+91 480 2801234',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 45 km',
      railway: 'Irinjalakuda Railway Station (IJK) - 15 km',
      bus: 'Kodungallur Bus Stand - 2 km'
    },
    nearbyAttractions: [
      'Kodungallur Bhagavathy Temple',
      'Thrissur city',
      'Guruvayoor Temple',
      'Historical sites'
    ],
    nearbyHotels: [
      'Kodungallur accommodations',
      'Thrissur hotels',
      'Pilgrimage guest houses',
      'Local lodges'
    ],
    nearbyRestaurants: [
      'Traditional Muslim cuisine',
      'Local Kerala eateries',
      'Halal restaurants',
      'Community dining'
    ],
    specialFeatures: [
      'First mosque in India (629 AD)',
      'Built during Prophet Muhammad\'s lifetime',
      'King Cheraman Perumal conversion story',
      'Traditional Kerala architecture',
      'Built by Malik Ibn Dinar',
      'UNESCO heritage significance'
    ]
  },
  {
    id: 'juma-masjid-kozhikode',
    name: 'Juma Masjid, Kozhikode',
    type: 'Mosque',
    typeColor: 'bg-green-100 text-green-800',
    state: 'Kerala',
    location: 'Kozhikode (Calicut)',
    description: 'A historic mosque in the port city of Kozhikode, reflecting the rich Islamic heritage of the Malabar coast. Built during the medieval period, it serves as an important religious and cultural center for the Muslim community.',
    image: 'https://i.pinimg.com/736x/eb/a2/88/eba2884cecbabeebd3878c2f1af0a988.jpg',
    timings: 'Five daily prayers, Friday Juma prayers',
    prasad: 'Community Iftar, Festival meals',
    amenities: [
      'Historic prayer hall',
      'Community center',
      'Islamic education facilities',
      'Cultural programs venue',
      'Social service center',
      'Youth activities'
    ],
    festivals: [
      'Eid al-Fitr',
      'Eid al-Adha',
      'Milad-un-Nabi',
      'Ramadan programs',
      'Malabar cultural celebrations'
    ],
    contact: '+91 495 2345678',
    nearestTransport: {
      airport: 'Calicut International Airport (CCJ) - 25 km',
      railway: 'Kozhikode Railway Station (CLT) - 3 km',
      bus: 'Kozhikode KSRTC Bus Stand - 2 km'
    },
    nearbyAttractions: [
      'Kozhikode Beach',
      'Mananchira Square',
      'Kappad Beach',
      'Beypore Port'
    ],
    nearbyHotels: [
      'Kozhikode city hotels',
      'Beach resorts',
      'Business accommodations',
      'Heritage hotels'
    ],
    nearbyRestaurants: [
      'Malabar cuisine restaurants',
      'Halal eateries',
      'Traditional Muslim food',
      'Coastal specialties'
    ],
    specialFeatures: [
      'Historic Malabar coast mosque',
      'Medieval period construction',
      'Port city Islamic heritage',
      'Cultural center for Muslims',
      'Traditional architecture',
      'Community service focus'
    ]
  },
  {
    id: 'malik-dinar-mosque-kasaragod',
    name: 'Malik Dinar Mosque, Kasaragod',
    type: 'Mosque',
    typeColor: 'bg-green-100 text-green-800',
    state: 'Kerala',
    location: 'Kasaragod',
    description: 'Named after the legendary Islamic missionary Malik Ibn Dinar, this mosque represents the early Islamic heritage of Kerala. It serves the Muslim community in the northernmost district of Kerala.',
    image: 'https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fmalik-dinar-mosque-kasaragod-1727678198_f7a51019c64add4780d2.webp&w=1920&q=75',
    timings: 'Five daily prayers, special congregational prayers',
    prasad: 'Community meals, Charitable distributions',
    amenities: [
      'Prayer hall',
      'Community center',
      'Islamic education',
      'Cultural programs',
      'Social service initiatives',
      'Youth development'
    ],
    festivals: [
      'Eid al-Fitr',
      'Eid al-Adha',
      'Milad-un-Nabi',
      'Malik Dinar commemoration',
      'Islamic celebrations'
    ],
    contact: '+91 4994 234567',
    nearestTransport: {
      airport: 'Mangaluru International Airport (IXE) - 50 km',
      railway: 'Kasaragod Railway Station (KGQ) - 3 km',
      bus: 'Kasaragod Bus Stand - 2 km'
    },
    nearbyAttractions: [
      'Bekal Fort',
      'Kasaragod beaches',
      'Ananthapura Lake Temple',
      'Chandragiri Fort'
    ],
    nearbyHotels: [
      'Kasaragod hotels',
      'Beach resorts',
      'Local accommodations',
      'Heritage properties'
    ],
    nearbyRestaurants: [
      'Halal restaurants',
      'Coastal cuisine',
      'Traditional Muslim food',
      'Local eateries'
    ],
    specialFeatures: [
      'Named after Malik Ibn Dinar',
      'Early Islamic heritage',
      'Northernmost Kerala district',
      'Missionary legacy',
      'Community development focus',
      'Cultural preservation'
    ]
  },
  {
    id: 'juma-masjid-kochi',
    name: 'Juma Masjid, Kochi',
    type: 'Mosque',
    typeColor: 'bg-green-100 text-green-800',
    state: 'Kerala',
    location: 'Mattancherry, Kochi',
    description: 'A historic mosque in the spice trading area of Mattancherry, reflecting the cosmopolitan nature of Kochi. Built during the period of Arab traders, it showcases the Islamic heritage of this important port city.',
    image: 'https://imgs.search.brave.com/BQQ24axs-_YS5T3dgqJYe5-wAQAUF8zB-3SzjkNhNys/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/ZXJuYWt1bGFtL3c2/LzA0ODRweDQ4NC54/NDg0LjE5MTEyMDE5/NDYwOC5pMnc2L2Nh/dGFsb2d1ZS9rYWx2/YXRoeS1qdW1hLW1h/c2ppZC1hbmQtZmFy/ZWVkLWF1bGl5YS1k/YXJnYWgtZXJuYWt1/bGFtLW1vc3F1ZXMt/MW53N2dpcWhqZi5q/cGc_dz0zODQwJnE9/NzU',
    timings: 'Five daily prayers, Friday congregations',
    prasad: 'Community meals, Festival distributions',
    amenities: [
      'Historic prayer hall',
      'Spice trade area location',
      'Community gathering spaces',
      'Cultural heritage center',
      'Educational facilities',
      'Interfaith dialogue venue'
    ],
    festivals: [
      'Eid al-Fitr',
      'Eid al-Adha',
      'Milad-un-Nabi',
      'Ramadan observances',
      'Cultural celebrations'
    ],
    contact: '+91 484 2456789',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 40 km',
      railway: 'Ernakulam Junction (ERS) - 12 km',
      bus: 'Mattancherry Bus Stand - 1 km'
    },
    nearbyAttractions: [
      'Mattancherry Palace',
      'Jewish Synagogue',
      'Spice markets',
      'Chinese Fishing Nets',
      'Fort Kochi'
    ],
    nearbyHotels: [
      'Heritage hotels',
      'Mattancherry accommodations',
      'Fort Kochi hotels',
      'Spice route themed stays'
    ],
    nearbyRestaurants: [
      'Spice trade restaurants',
      'Halal eateries',
      'Multi-cultural cuisine',
      'Traditional Muslim food'
    ],
    specialFeatures: [
      'Spice trading area heritage',
      'Arab trader period construction',
      'Cosmopolitan Kochi location',
      'Port city Islamic heritage',
      'Interfaith harmony symbol',
      'Cultural diversity representation'
    ]
  },
  {
    id: 'beemapally-mosque-thiruvananthapuram',
    name: 'Beemapally Mosque, Thiruvananthapuram',
    type: 'Mosque',
    typeColor: 'bg-green-100 text-green-800',
    state: 'Kerala',
    location: 'Beemapally, Thiruvananthapuram',
    description: 'A famous mosque and dargah dedicated to Beema Beevi, believed to be a descendant of Prophet Muhammad. The annual Uroos festival attracts thousands of devotees from different faiths, showcasing Kerala\'s religious harmony.',
    image: 'https://i.pinimg.com/736x/0d/27/38/0d2738f4c93d8d714b5d3ab8a5936fec.jpg',
    timings: 'Open throughout the day, special prayers during festivals',
    prasad: 'Blessed food (Tabarruk), Festival meals, Charitable distributions',
    amenities: [
      'Dargah of Beema Beevi',
      'Festival celebration grounds',
      'Pilgrimage facilities',
      'Community kitchen',
      'Accommodation for devotees',
      'Interfaith gathering spaces'
    ],
    festivals: [
      'Beemapally Uroos (annual festival)',
      'Eid al-Fitr',
      'Eid al-Adha',
      'Milad-un-Nabi',
      'Sufi celebrations'
    ],
    contact: '+91 471 2567890',
    nearestTransport: {
      airport: 'Trivandrum International Airport (TRV) - 8 km',
      railway: 'Thiruvananthapuram Central (TVC) - 12 km',
      bus: 'Beemapally Bus Stop - 1 km'
    },
    nearbyAttractions: [
      'Kovalam Beach',
      'Padmanabhaswamy Temple',
      'Napier Museum',
      'Shanghumukham Beach'
    ],
    nearbyHotels: [
      'Kovalam beach resorts',
      'Thiruvananthapuram hotels',
      'Pilgrimage accommodations',
      'Coastal hotels'
    ],
    nearbyRestaurants: [
      'Festival food stalls',
      'Halal restaurants',
      'Coastal cuisine',
      'Traditional Muslim eateries'
    ],
    specialFeatures: [
      'Dargah of Beema Beevi',
      'Descendant of Prophet Muhammad',
      'Annual Uroos festival',
      'Interfaith pilgrimage site',
      'Religious harmony symbol',
      'Thousands of devotees annually'
    ]
  },

  // GURUDWARAS
  {
    id: 'gurudwara-guru-singh-sabha-kochi',
    name: 'Gurudwara Guru Singh Sabha, Kochi',
    type: 'Gurudwara',
    typeColor: 'bg-blue-100 text-blue-800',
    state: 'Kerala',
    location: 'Kochi',
    description: 'The main Gurudwara in Kerala, serving the Sikh community in the state. Located in the commercial capital of Kerala, it provides spiritual guidance and community services while maintaining Sikh traditions.',
    image: 'https://i.pinimg.com/736x/10/7f/46/107f46aea3524527ae659400a3c45986.jpg',
    timings: 'Early morning to evening prayers',
    prasad: 'Langar (community kitchen), Karah Prasad',
    amenities: [
      'Darbar Sahib (prayer hall)',
      'Langar hall for community meals',
      'Community center',
      'Religious education facilities',
      'Guest accommodation',
      'Parking facilities'
    ],
    festivals: [
      'Guru Nanak Jayanti',
      'Baisakhi',
      'Guru Gobind Singh Jayanti',
      'Diwali',
      'Hola Mohalla'
    ],
    contact: '+91 484 2567890',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 30 km',
      railway: 'Ernakulam Junction (ERS) - 5 km',
      bus: 'Kochi city buses - nearby'
    },
    nearbyAttractions: [
      'Marine Drive',
      'Fort Kochi',
      'Mattancherry Palace',
      'Chinese Fishing Nets',
      'Lulu Mall'
    ],
    nearbyHotels: [
      'Kochi city hotels',
      'Marine Drive accommodations',
      'Business hotels',
      'Heritage properties'
    ],
    nearbyRestaurants: [
      'Gurudwara Langar',
      'Punjabi restaurants',
      'Kochi multi-cuisine',
      'Vegetarian eateries'
    ],
    specialFeatures: [
      'Main Sikh center in Kerala',
      'Commercial capital location',
      'Community service programs',
      'Cultural preservation',
      'Interfaith harmony',
      'Modern facilities'
    ]
  },
  {
    id: 'gurudwara-sahib-thiruvananthapuram',
    name: 'Gurudwara Sahib, Thiruvananthapuram',
    type: 'Gurudwara',
    typeColor: 'bg-blue-100 text-blue-800',
    state: 'Kerala',
    location: 'Thiruvananthapuram',
    description: 'A Gurudwara serving the Sikh community in Kerala\'s capital city. It provides spiritual services and community support in this important administrative and cultural center.',
    image: 'https://cdn.pixabay.com/photo/2021/05/24/12/02/gurudwara-6278838_1280.jpg',
    timings: 'Morning and evening prayers',
    prasad: 'Langar (community kitchen), Karah Prasad',
    amenities: [
      'Prayer hall',
      'Community facilities',
      'Basic amenities',
      'Religious education',
      'Cultural programs',
      'Social service initiatives'
    ],
    festivals: [
      'Guru Nanak Jayanti',
      'Baisakhi',
      'Guru Gobind Singh Jayanti',
      'Diwali',
      'Community celebrations'
    ],
    contact: '+91 471 2678901',
    nearestTransport: {
      airport: 'Trivandrum International Airport (TRV) - 8 km',
      railway: 'Thiruvananthapuram Central (TVC) - 5 km',
      bus: 'City bus services - nearby'
    },
    nearbyAttractions: [
      'Padmanabhaswamy Temple',
      'Napier Museum',
      'Kovalam Beach',
      'Shanghumukham Beach'
    ],
    nearbyHotels: [
      'Capital city hotels',
      'Government accommodations',
      'Business hotels',
      'Budget lodges'
    ],
    nearbyRestaurants: [
      'Gurudwara Langar',
      'Capital city restaurants',
      'Traditional Kerala cuisine',
      'Multi-cuisine options'
    ],
    specialFeatures: [
      'Capital city Sikh center',
      'Administrative center location',
      'Government employee service',
      'Cultural activities',
      'Community integration',
      'Educational programs'
    ]
  },
  {
    id: 'gurudwara-sahib-kozhikode',
    name: 'Gurudwara Sahib, Kozhikode',
    type: 'Gurudwara',
    typeColor: 'bg-blue-100 text-blue-800',
    state: 'Kerala',
    location: 'Kozhikode (Calicut)',
    description: 'A Gurudwara in the historic port city of Kozhikode, serving the Sikh community in Malabar region. It provides religious services in this culturally diverse coastal city.',
    image: 'https://cdn.pixabay.com/photo/2022/10/07/16/10/golden-temple-7505424_1280.jpg',
    timings: 'Morning and evening prayers',
    prasad: 'Langar (community kitchen), Karah Prasad',
    amenities: [
      'Prayer hall',
      'Community center',
      'Basic facilities',
      'Religious education',
      'Cultural programs',
      'Coastal community service'
    ],
    festivals: [
      'Guru Nanak Jayanti',
      'Baisakhi',
      'Guru Gobind Singh Jayanti',
      'Sikh festivals',
      'Malabar cultural events'
    ],
    contact: '+91 495 2789012',
    nearestTransport: {
      airport: 'Calicut International Airport (CCJ) - 25 km',
      railway: 'Kozhikode Railway Station (CLT) - 5 km',
      bus: 'Kozhikode KSRTC Bus Stand - 3 km'
    },
    nearbyAttractions: [
      'Kozhikode Beach',
      'Kappad Beach',
      'Mananchira Square',
      'Beypore Port'
    ],
    nearbyHotels: [
      'Kozhikode city hotels',
      'Beach resorts',
      'Heritage accommodations',
      'Business hotels'
    ],
    nearbyRestaurants: [
      'Gurudwara Langar',
      'Malabar cuisine',
      'Coastal restaurants',
      'Multi-cuisine eateries'
    ],
    specialFeatures: [
      'Historic port city location',
      'Malabar region service',
      'Coastal community focus',
      'Cultural diversity',
      'Maritime heritage area',
      'Interfaith harmony'
    ]
  },
  {
    id: 'gurudwara-sahib-thrissur',
    name: 'Gurudwara Sahib, Thrissur',
    type: 'Gurudwara',
    typeColor: 'bg-blue-100 text-blue-800',
    state: 'Kerala',
    location: 'Thrissur',
    description: 'A Gurudwara in the cultural capital of Kerala, serving the Sikh community in this temple-rich city. It provides spiritual services in the heart of Kerala\'s cultural activities.',
    image: 'https://i.pinimg.com/736x/c2/53/79/c253798c2659e2237bf01a01e284d008.jpg',
    timings: 'Morning and evening prayers',
    prasad: 'Langar (community kitchen), Karah Prasad',
    amenities: [
      'Prayer hall',
      'Community facilities',
      'Cultural program venue',
      'Religious education',
      'Festival participation',
      'Interfaith dialogue'
    ],
    festivals: [
      'Guru Nanak Jayanti',
      'Baisakhi',
      'Guru Gobind Singh Jayanti',
      'Thrissur Pooram participation',
      'Cultural celebrations'
    ],
    contact: '+91 487 2890123',
    nearestTransport: {
      airport: 'Cochin International Airport (COK) - 55 km',
      railway: 'Thrissur Railway Station (TCR) - 3 km',
      bus: 'Thrissur KSRTC Bus Stand - 2 km'
    },
    nearbyAttractions: [
      'Vadakkunnathan Temple',
      'Thrissur Pooram venues',
      'Archaeological Museum',
      'Guruvayoor Temple'
    ],
    nearbyHotels: [
      'Thrissur city hotels',
      'Cultural center accommodations',
      'KTDC properties',
      'Local lodges'
    ],
    nearbyRestaurants: [
      'Gurudwara Langar',
      'Thrissur restaurants',
      'Kerala cuisine',
      'Cultural area eateries'
    ],
    specialFeatures: [
      'Cultural capital location',
      'Temple city service',
      'Thrissur Pooram connections',
      'Cultural integration',
      'Festival participation',
      'Religious harmony'
    ]
  },
  {
    id: 'gurudwara-sahib-kannur',
    name: 'Gurudwara Sahib, Kannur',
    type: 'Gurudwara',
    typeColor: 'bg-blue-100 text-blue-800',
    state: 'Kerala',
    location: 'Kannur',
    description: 'A Gurudwara serving the Sikh community in the northern Kerala district of Kannur. It provides religious services and community support in this historically significant coastal region.',
    image: 'https://i.pinimg.com/736x/cb/89/bc/cb89bcdffe54974480d7235c28940aae.jpg',
    timings: 'Morning and evening prayers',
    prasad: 'Langar (community kitchen), Karah Prasad',
    amenities: [
      'Prayer hall',
      'Community center',
      'Basic facilities',
      'Religious education',
      'Social programs',
      'Coastal community service'
    ],
    festivals: [
      'Guru Nanak Jayanti',
      'Baisakhi',
      'Guru Gobind Singh Jayanti',
      'Community festivals',
      'Regional celebrations'
    ],
    contact: '+91 497 2901234',
    nearestTransport: {
      airport: 'Kannur International Airport (CNN) - 25 km',
      railway: 'Kannur Railway Station (CAN) - 3 km',
      bus: 'Kannur Bus Stand - 2 km'
    },
    nearbyAttractions: [
      'St. Angelo Fort',
      'Payyambalam Beach',
      'Arakkal Museum',
      'Theyyam performances'
    ],
    nearbyHotels: [
      'Kannur city hotels',
      'Coastal resorts',
      'Heritage properties',
      'Local accommodations'
    ],
    nearbyRestaurants: [
      'Gurudwara Langar',
      'Kannur local cuisine',
      'Coastal restaurants',
      'Traditional eateries'
    ],
    specialFeatures: [
      'Northern Kerala location',
      'Coastal region service',
      'Historical area significance',
      'Theyyam culture area',
      'Community development',
      'Regional integration'
    ]
  }
];