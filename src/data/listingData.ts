export interface PhotoItem {
  id: string;
  url: string;
  alt: string;
  category:
    | 'All'
    | 'Living Room'
    | 'Living room 1'
    | 'Living room 2'
    | 'Full kitchen'
    | 'Bedroom'
    | 'Full bathroom'
    | 'Jacuzzi & Deck'
    | 'Kitchen'
    | 'Gym'
    | 'Exterior'
    | 'Pool'
    | 'Additional photos';
  caption: string;
}

export interface AmenityItem {
  name: string;
  description?: string;
  iconName: string;
  category: string;
  isFeatured?: boolean;
}

export interface ReviewItem {
  id: string;
  author: {
    name: string;
    avatar: string;
    location: string;
    yearsOnAirbnb: string;
  };
  rating: number;
  date: string;
  stayDetails?: string;
  comment: string;
  hostResponse?: {
    date: string;
    comment: string;
  };
}

export interface BedroomItem {
  id: string;
  title: string;
  bedType: string;
  iconName: string;
  imageUrl?: string;
}

export interface SimilarListing {
  id: string;
  title: string;
  type: string;
  rating: number;
  reviewCount: number;
  pricePerNight: number;
  imageUrl: string;
  dates: string;
}

export interface ListingDetails {
  id: string;
  title: string;
  tagline: string;
  location: {
    neighborhood: string;
    city: string;
    region: string;
    country: string;
    displayAddress: string;
    lat: number;
    lng: number;
    description: string;
    gettingAround: string;
  };
  stats: {
    guests: number;
    bedroom: number;
    beds: number;
    bathroom: number;
    propertyType: string;
  };
  rating: {
    overall: number;
    reviewCount: number;
    isGuestFavorite: boolean;
    categories: {
      cleanliness: number;
      accuracy: number;
      communication: number;
      location: number;
      checkIn: number;
      value: number;
    };
  };
  pricing: {
    basePricePerNight: number;
    currency: string;
    currencySymbol: string;
    cleaningFee: number;
    serviceFeeRate: number;
    taxRate: number;
    weeklyDiscountPercentage: number;
  };
  host: {
    name: string;
    avatar: string;
    isSuperhost: boolean;
    hostingSince: string;
    responseRate: string;
    responseTime: string;
    languages: string[];
    bio: string;
    coHosts: Array<{ name: string; avatar: string; role: string }>;
    stats: {
      reviews: number;
      rating: number;
      yearsHosting: number;
    };
  };
  highlights: Array<{
    title: string;
    description: string;
    iconName: string;
  }>;
  description: {
    summary: string;
  };
  bedrooms: BedroomItem[];
  photos: PhotoItem[];
  amenities: AmenityItem[];
  reviews: ReviewItem[];
  houseRules: {
    checkIn: string;
    checkOut: string;
    selfCheckIn: string;
    rulesList: string[];
  };
  safetyInfo: string[];
  cancellationPolicy: {
    summary: string;
    details: string;
  };
  similarListings: SimilarListing[];
}

export const LISTING_DATA: ListingDetails = {
  id: 'sky-villa-jacuzzi-1bhk-candolim',
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  tagline: 'Private rooftop jacuzzi villa with modern interiors in prime Candolim, North Goa',
  location: {
    neighborhood: 'Candolim Beach Area',
    city: 'Candolim',
    region: 'Goa',
    country: 'India',
    displayAddress: 'Candolim, India',
    lat: 15.518,
    lng: 73.763,
    description: 'The apartment is in a peaceful gated community just 800m from Candolim Beach. Walking distance to famous restaurants, beach shacks, supermarket, nightlife, and water sports hubs in North Goa.',
    gettingAround: 'Taxis, self-drive cars, and scooters are readily available right outside the community gate. Dabolim Airport is 38 km away, and Manohar International Airport (MOPA) is 32 km away.'
  },
  stats: {
    guests: 3,
    bedroom: 1,
    beds: 1,
    bathroom: 1,
    propertyType: 'Entire serviced apartment'
  },
  rating: {
    overall: 4.95,
    reviewCount: 19,
    isGuestFavorite: true,
    categories: {
      cleanliness: 4.9,
      accuracy: 4.9,
      communication: 5.0,
      location: 4.8,
      checkIn: 5.0,
      value: 4.8
    }
  },
  pricing: {
    basePricePerNight: 8499,
    currency: 'INR',
    currencySymbol: '₹',
    cleaningFee: 999,
    serviceFeeRate: 0.12,
    taxRate: 0.12,
    weeklyDiscountPercentage: 10
  },
  host: {
    name: 'Aashish',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    isSuperhost: true,
    hostingSince: '3 years hosting',
    responseRate: '100%',
    responseTime: 'within an hour',
    languages: ['English', 'Hindi'],
    bio: 'Hi, I am Aashish! Passionate about hospitality and creating memorable, luxurious holiday stays in Goa. My team and I are dedicated to ensuring you have a seamless, relaxing experience from check-in to check-out.',
    coHosts: [
      {
        name: 'Rohit',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
        role: 'Co-host'
      },
      {
        name: 'Vikas',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
        role: 'Co-host'
      },
      {
        name: 'Pooja',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
        role: 'Co-host'
      }
    ],
    stats: {
      reviews: 43,
      rating: 4.95,
      yearsHosting: 3
    }
  },
  highlights: [
    {
      title: 'Outdoor entertainment',
      description: 'The pool and alfresco dining are great for summer trips.',
      iconName: 'Laptop'
    },
    {
      title: 'Designed for staying cool',
      description: 'Beat the heat with the A/C and ceiling fan.',
      iconName: 'Key'
    },
    {
      title: 'Self check-in',
      description: 'You can check in with the building staff.',
      iconName: 'CalendarCheck'
    }
  ],
  description: {
    summary: '🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴',
  },
  bedrooms: [
    {
      id: 'bed-1',
      title: 'Bedroom',
      bedType: '1 double bed',
      iconName: 'BedDouble',
      imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'bed-2',
      title: 'Living room',
      bedType: '1 sofa',
      iconName: 'Bed',
      imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80'
    }
  ],
  photos: [
    {
      id: 'p-1',
      url: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=85',
      alt: 'Spacious modern living lounge with stone feature wall and sconce lights',
      category: 'Living Room',
      caption: 'Living room featuring custom stone wall, designer lighting, and seating'
    },
    {
      id: 'p-2',
      url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
      alt: 'Living area with plush seating and warm ambience',
      category: 'Living Room',
      caption: 'Cozy living room setup with modern armchairs'
    },
    {
      id: 'p-3',
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      alt: 'Private rooftop Jacuzzi with wooden deck',
      category: 'Jacuzzi & Deck',
      caption: 'Private heated rooftop Jacuzzi hot tub on wooden terrace'
    },
    {
      id: 'p-4',
      url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      alt: 'Master bedroom with king bed and wooden flooring',
      category: 'Bedroom',
      caption: 'Master bedroom suite with king bed and abundant natural sunlight'
    },
    {
      id: 'p-5',
      url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      alt: 'Building complex exterior with colorful balconies in Candolim',
      category: 'Exterior',
      caption: 'Exterior of the private gated residential community in Candolim'
    },
    {
      id: 'p-6',
      url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
      alt: 'Modern bathroom with glass shower cubicle',
      category: 'Bedroom',
      caption: 'Clean modern bathroom with hot water shower'
    },
    {
      id: 'p-7',
      url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      alt: 'Equipped kitchen with appliances',
      category: 'Kitchen',
      caption: 'Kitchenette with induction, microwave, and refrigerator'
    },
    {
      id: 'p-8',
      url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
      alt: 'Shared swimming pool in the gated society',
      category: 'Exterior',
      caption: 'Shared outdoor swimming pool surrounded by palm trees'
    }
  ],
  amenities: [
    { name: 'Kitchen', iconName: 'Utensils', category: 'Kitchen and dining', isFeatured: true, description: 'Space where guests can cook their own meals' },
    { name: 'Wifi', iconName: 'Wifi', category: 'Internet and office', isFeatured: true, description: 'Verified high-speed connection for remote work' },
    { name: 'Dedicated workspace', iconName: 'Laptop', category: 'Internet and office', isFeatured: true, description: 'Desk and chair comfortable for laptop usage' },
    { name: 'Free parking on premises', iconName: 'Car', category: 'Parking and facilities', isFeatured: true, description: 'Designated parking inside gated compound' },
    { name: 'Pool', iconName: 'Waves', category: 'Parking and facilities', isFeatured: true, description: 'Open year-round in the society' },
    { name: 'Hot tub', iconName: 'Sparkles', category: 'Parking and facilities', isFeatured: true, description: 'Exclusive rooftop Jacuzzi' },
    { name: 'Pets allowed', iconName: 'Dog', category: 'Services', isFeatured: true, description: 'Well-behaved pets are welcome' },
    { name: 'Exterior security cameras on property', iconName: 'Camera', category: 'Home safety', isFeatured: true, description: 'Surveillance cameras monitoring the exterior areas' },
    { name: 'Carbon monoxide alarm', iconName: 'Wind', category: 'Home safety', isFeatured: true, description: 'Not reported by the host' },
    { name: 'Smoke alarm', iconName: 'Wind', category: 'Home safety', isFeatured: true, description: 'Not reported by the host' },


    // Additional categorized amenities
    { name: 'Cleaning available during stay', iconName: 'BrushCleaning', category: 'Services' },
    { name: 'Long-term stays allowed', iconName: 'CalendarRange', category: 'Services' },
    { name: 'Self check-in', iconName: 'KeyRound', category: 'Services' },

    { name: 'Gym', iconName: 'Dumbbell', category: 'Parking and facilities' },

    { name: 'Private entrance', iconName: 'DoorOpen', category: 'Location features' },

    { name: 'Patio or balcony', iconName: 'PanelsTopLeft', category: 'Outdoor' },
    { name: 'Outdoor dining area', iconName: 'Table2', category: 'Outdoor' },

    { name: 'Fridge', iconName: 'Refrigerator', category: 'Kitchen and dining' },
    { name: 'Freezer', iconName: 'Snowflake', category: 'Kitchen and dining' },
    { name: 'Microwave', iconName: 'Microwave', category: 'Kitchen and dining' },
    { name: 'Cooking basics', iconName: 'CookingPot', category: 'Kitchen and dining' },
    { name: 'Crockery and cutlery', iconName: 'UtensilsCrossed', category: 'Kitchen and dining' },
    { name: 'Kettle', iconName: 'Coffee', category: 'Kitchen and dining' },
    { name: 'Coffee', iconName: 'Coffee', category: 'Kitchen and dining' },
    { name: 'Wine glasses', iconName: 'Wine', category: 'Kitchen and dining' },
    { name: 'Toaster', iconName: 'CookingPot', category: 'Kitchen and dining' },
    { name: 'Blender', iconName: 'Blend', category: 'Kitchen and dining' },
    { name: 'Cooker', iconName: 'CookingPot', category: 'Kitchen and dining' },

    { name: 'Air conditioning', iconName: 'AirVent', category: 'Heating and cooling' },
    { name: 'Ceiling fan', iconName: 'Fan', category: 'Heating and cooling' },

    { name: 'Hairdryer', iconName: 'Wind', category: 'Bathroom' },
    { name: 'Cleaning products', iconName: 'SprayCan', category: 'Bathroom' },
    { name: 'Shampoo', iconName: 'SprayCan', category: 'Bathroom' },
    { name: 'Hot water', iconName: 'Droplets', category: 'Bathroom' },
    { name: 'Shower gel', iconName: 'Bath', category: 'Bathroom' },

    { name: 'Washing machine', iconName: 'WashingMachine', category: 'Bedroom and laundry' },
    { name: 'Hangers', iconName: 'Shirt', category: 'Bedroom and laundry' },
    { name: 'Bed linen', iconName: 'BedDouble', category: 'Bedroom and laundry' },
    { name: 'Room-darkening blinds', iconName: 'Blinds', category: 'Bedroom and laundry' },
    { name: 'Iron', iconName: 'Shirt', category: 'Bedroom and laundry' },
    { name: 'Clothes storage', iconName: 'Archive', category: 'Bedroom and laundry' },
    { name: 'Cot', iconName: 'Baby', category: 'Family' },

    { name: 'TV', iconName: 'Tv', category: 'Entertainment' },
    { name: 'Fire extinguisher', iconName: 'Flame', category: 'Home safety' }
  ],
  reviews: [
    {
      id: 'rev-1',
      author: {
        name: 'Amit',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        location: 'Mumbai, India',
        yearsOnAirbnb: '2 months on Airbnb'
      },
      rating: 5,
      date: '1 week ago',
      comment: 'The sky villa was incredible! The private rooftop jacuzzi was clean and heated, perfect for chilling in the evening. Aashish and his team were very responsive and helpful.'
    },
    {
      id: 'rev-2',
      author: {
        name: 'Aheesh',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        location: 'Bengaluru, India',
        yearsOnAirbnb: '4 years on Airbnb'
      },
      rating: 5,
      date: '2 week ago',
      comment: 'Super aesthetic place with the stone wall design and ambient lights. Location is 5 mins from Candolim beach. Clean sheets, working ACs, and smooth self check-in. Highly recommend!'
    },
    {
      id: 'rev-3',
      author: {
        name: 'Samiksha',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        location: 'Delhi, India',
        yearsOnAirbnb: '1 year on Airbnb'
      },
      rating: 5,
      date: 'May 2026',
      comment: 'Great property! The jacuzzi on the terrace made our stay super special. Housekeeping was punctual and polite. Will definitely book again when in North Goa.'
    },
    {
      id: 'rev-4',
      author: {
        name: 'Vedant',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
        location: 'Pune, India',
        yearsOnAirbnb: '3 years on Airbnb'
      },
      rating: 5,
      date: 'May 2026',
      comment: 'Clean, spacious, and accurate to the pictures. The 50 Mbps wifi was strong enough for our work calls during the day, and the beach was a quick walk away in the evening.'
    },
    {
      id: 'rev-5',
      author: {
        name: 'Vaibhav S',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        location: 'Hyderabad, India',
        yearsOnAirbnb: '3 years on Airbnb'
      },
      rating: 5,
      date: 'May 2026',
      comment: 'Everything was top-notch! Aashish is a true Superhost. Check-in was effortless with the building security, and the private jacuzzi view is peaceful.'
    },
    {
      id: 'rev-6',
      author: {
        name: 'Mohd',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
        location: 'Chandigarh, India',
        yearsOnAirbnb: '5 years on Airbnb'
      },
      rating: 5,
      date: 'May 2026',
      comment: 'Wonderful place in Candolim. The sofa bed was comfortable for the kids, and having a kitchen was super convenient. 5 stars all the way!'
    }
  ],
  houseRules: {
    checkIn: 'After 2:00 PM',
    checkOut: 'Before 11:00 AM',
    selfCheckIn: 'Check yourself in with building staff',
    rulesList: [
      '4 guests maximum',
      'No smoking inside the apartment',
      'Quiet hours from 10:00 PM to 8:00 AM',
      'Turn off AC and Jacuzzi when not in use',
      'Pets allowed on request'
    ]
  },
  safetyInfo: [
    'Carbon monoxide alarm installed',
    'Smoke alarm installed',
    'Pool/spa without gate or lock (supervision required)',
    'Exterior security cameras on premises (building entrance)'
  ],
  cancellationPolicy: {
    summary: 'Add your trip dates to get the cancellation details for this stay.',
    details: 'Review the full policy before booking.'
  },
  similarListings: [
    {
      id: 'sim-1',
      title: 'Luxury 1BHK with Pool & Balcony',
      type: 'Stay in Candolim',
      rating: 4.92,
      reviewCount: 38,
      pricePerNight: 5200,
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
      dates: 'Nov 10 – 15'
    },
    {
      id: 'sim-2',
      title: 'Boho Sunset Penthouse Suite',
      type: 'Stay in Calangute',
      rating: 4.88,
      reviewCount: 52,
      pricePerNight: 6100,
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
      dates: 'Nov 12 – 17'
    },
    {
      id: 'sim-3',
      title: 'Heritage Villa with Private Lawn',
      type: 'Villa in Arpora',
      rating: 4.96,
      reviewCount: 64,
      pricePerNight: 9500,
      imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80',
      dates: 'Nov 18 – 23'
    },
    {
      id: 'sim-4',
      title: 'Modern 2BHK Near Baga Beach',
      type: 'Apartment in Baga',
      rating: 4.85,
      reviewCount: 29,
      pricePerNight: 4800,
      imageUrl: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=400&q=80',
      dates: 'Nov 20 – 25'
    },
    {
      id: 'sim-5',
      title: 'Cozy Studio with Jacuzzi Access',
      type: 'Stay in Candolim',
      rating: 4.91,
      reviewCount: 41,
      pricePerNight: 4500,
      imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80',
      dates: 'Nov 25 – 30'
    }
  ]
};
