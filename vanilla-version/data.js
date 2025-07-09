// States data
const states = [
  {
    id: 'west-bengal',
    name: 'West Bengal',
    image: '/dakshineswar-kali-temple.webp'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    image: '/files_4493969-1751434555315-Coorg.jpg'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    image: '/tamil-nadu.jpeg/Nataraja Temple, Chidambaram_.jpeg'
  },
  {
    id: 'telangana',
    name: 'Telangana',
    image: '/telangana.jpeg/what-is-telangana-famous-for.jpg'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    image: '/kerala.jpeg/God, gold and lagoons_ a snapshot of Kerala, India – in pictures.jpeg'
  },
  {
    id: 'andaman-nicobar',
    name: 'Andaman and Nicobar Islands',
    image: '/andaman-nicobar.jpeg/WhatsApp Image 2025-07-02 at 11.12.00_528b19aa.jpg'
  },
  {
    id: 'puducherry',
    name: 'Puducherry',
    image: '/bd8f6ee56072989648594876c0e86192.jpg'
  }
];

// Sample sites data (you'll need to add the full data from your TypeScript files)
const westBengalSites = [
  {
    id: 'dakshineswar-kali-temple',
    name: 'Dakshineswar Kali Temple',
    type: 'Temple',
    typeColor: 'bg-orange-100 text-orange-800',
    state: 'West Bengal',
    location: 'Dakshineswar, Kolkata',
    description: 'A Hindu navaratna temple located on the eastern bank of the Hooghly River. The presiding deity of the temple is Bhavatarini, a form of Mahadevi or Parashakti Adya Kali, otherwise known as Adishakti Kalika.',
    image: 'https://images.pexels.com/photos/8078375/pexels-photo-8078375.jpeg',
    timings: '6:00 AM to 12:30 PM and 3:00 PM to 8:30 PM',
    prasad: 'Kali prasadam, Traditional sweets',
    amenities: [
      'Large temple complex',
      'Parking facilities',
      'Restrooms',
      'Drinking water',
      'Shoe keeping facility'
    ],
    festivals: [
      'Kali Puja',
      'Durga Puja',
      'Diwali',
      'Poila Boishakh'
    ],
    contact: '+91 33 2654 4250',
    nearestTransport: {
      airport: 'Netaji Subhas Chandra Bose International Airport - 25 km',
      railway: 'Dakshineswar Railway Station - 1 km',
      bus: 'Dakshineswar Bus Stand - 500m'
    },
    nearbyAttractions: [
      'Belur Math',
      'Hooghly River',
      'Ramakrishna Mission'
    ],
    nearbyHotels: [
      'Hotel Sonar Bangla',
      'The Lalit Great Eastern Kolkata',
      'ITC Sonar'
    ],
    nearbyRestaurants: [
      'Oh! Calcutta',
      'Bhojohori Manna',
      'Kewpies Kitchen'
    ],
    specialFeatures: [
      'Associated with Sri Ramakrishna',
      'Navaratna temple architecture',
      'Historic significance',
      'Spiritual importance'
    ]
  }
];

const andamanSites = [
  {
    id: 'sri-vetrimalai-murugan-temple',
    name: 'Sri Vetrimalai Murugan Temple',
    type: 'Temple',
    typeColor: 'bg-orange-100 text-orange-800',
    state: 'Andaman and Nicobar Islands',
    location: 'Shadipur, Port Blair',
    description: 'One of the famous religious places to visit in Andaman is Sri Vetrimalai Murugan temple, which is located in Port Blair. The temple is dedicated to Lord Murugan, who is greatly worshipped by the Tamils.',
    image: 'https://images.pexels.com/photos/8078375/pexels-photo-8078375.jpeg',
    timings: '5:00 AM to 12:00 PM and 4:00 PM to 9:00 PM',
    prasad: 'Traditional offerings, Coconut prasadam',
    amenities: [
      'Clean premises',
      'Drinking water facilities',
      'Basic restrooms',
      'Peaceful environment'
    ],
    festivals: [
      'Thaipusam',
      'Skanda Sashti',
      'Tamil New Year'
    ],
    contact: '+91 3192 232456',
    nearestTransport: {
      airport: 'Veer Savarkar International Airport - 5-6 km',
      railway: 'No railway connectivity',
      bus: 'Central Bus Terminus - nearby'
    },
    nearbyAttractions: [
      'Marina Park',
      'Cellular Jail',
      'Aberdeen Bazaar'
    ],
    nearbyHotels: [
      'Hotel Sentinel',
      'Sea Princess Beach Resort'
    ],
    nearbyRestaurants: [
      'Annapurna Restaurant',
      'New Lighthouse Restaurant'
    ],
    specialFeatures: [
      'Tamil community hub',
      'Traditional architecture',
      'Cultural preservation'
    ]
  }
];

const puducherrySites = [
  {
    id: 'manakula-vinayagar-temple',
    name: 'Manakula Vinayagar Temple',
    type: 'Temple',
    typeColor: 'bg-orange-100 text-orange-800',
    state: 'Puducherry',
    location: 'White Town, Puducherry',
    description: 'A very famous and ancient temple dedicated to Lord Ganesha, located in the heart of Puducherry\'s French Quarter.',
    image: 'https://images.pexels.com/photos/8078380/pexels-photo-8078380.jpeg',
    timings: '5:30 AM to 12:30 PM, 4:00 PM to 9:00 PM',
    prasad: 'Ganesha prasadam, Modak',
    amenities: [
      'Spacious mandapams',
      'Elephant blessings',
      'Tourist information'
    ],
    festivals: [
      'Ganesh Chaturthi',
      'Vinayaka Chaturthi'
    ],
    contact: '+91 413 2334567',
    nearestTransport: {
      airport: 'Puducherry Airport - 7 km',
      railway: 'Puducherry Railway Station - 2 km',
      bus: 'Puducherry Bus Stand - 1.5 km'
    },
    nearbyAttractions: [
      'Raj Niwas',
      'French Quarter',
      'Promenade Beach'
    ],
    nearbyHotels: [
      'Hotel Atithi',
      'The Promenade'
    ],
    nearbyRestaurants: [
      'Cafe des Arts',
      'Villa Shanti Restaurant'
    ],
    specialFeatures: [
      'Ancient temple',
      'French Quarter location',
      'Elephant blessings'
    ]
  }
];

// Function to get sites for a state
function getSitesForState(stateId) {
  switch (stateId) {
    case 'west-bengal':
      return westBengalSites;
    case 'andaman-nicobar':
      return andamanSites;
    case 'puducherry':
      return puducherrySites;
    default:
      return [];
  }
}