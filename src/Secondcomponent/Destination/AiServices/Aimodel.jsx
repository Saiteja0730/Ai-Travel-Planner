import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
// console.log("API Key from .env:", apiKey); 

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  generationConfig: {
    responseMimeType: "application/json",
  },
});


// ✅ Start a chat session with predefined history
export const chatSession = async () => {
  return await model.startChat({

    history: [
      {
        role: 'user',
        parts: [
          {
            text: `Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Uri, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format`,
          },
        ],
      },
      {
        role: 'model',
        parts: [
          {
            text: `Okay, here's a JSON format travel plan for a 3-day budget-friendly trip to Las Vegas for a couple. I've focused on free or low-cost activities and affordable hotel options.

\`\`\`json
{
  "tripDetails": {
    "location": "Las Vegas, Nevada",
    "duration": "3 Days",
    "budget": "Cheap",
    "travelers": "Couple"
  },
  "hotelOptions": [
    {
      "hotelName": "Circus Circus Hotel & Casino",
      "hotelAddress": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",
      "price": "Approximately $30-$70 per night (depending on season and availability)",
      "hotelImageUri": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f0/81/97/main-entrance.jpg?w=900&h=-1&s=1",
      "geoCoordinates": {
        "latitude": 36.1270,
        "longitude": -115.1652
      },
      "rating": 3.5,
      "description": "A classic Vegas hotel with a circus theme, offering affordable rooms, a casino, and the Adventuredome indoor theme park. Great for budget-conscious travelers who still want a Strip experience."
    },
    {
      "hotelName": "Excalibur Hotel & Casino",
      "hotelAddress": "3850 S Las Vegas Blvd, Las Vegas, NV 89109",
      "price": "Approximately $40-$80 per night (depending on season and availability)",
      "hotelImageUri": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/d6/e3/2a/excalibur-hotel-casino.jpg?w=1200&h=-1&s=1",
      "geoCoordinates": {
        "latitude": 36.0956,
        "longitude": -115.1741
      },
      "rating": 3.7,
      "description": "A medieval-themed hotel on the south end of the Strip. Offers budget-friendly rooms, a variety of dining options, and entertainment. Connected to Luxor and Mandalay Bay via walkways and a tram."
    },
    {
      "hotelName": "Stratosphere Casino, Hotel & Tower",
      "hotelAddress": "2000 S Las Vegas Blvd, Las Vegas, NV 89104",
      "price": "Approximately $40-$85 per night (depending on season and availability)",
      "hotelImageUri": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/bc/99/94/stratmosphere-hotel.jpg?w=1200&h=-1&s=1",
      "geoCoordinates": {
        "latitude": 36.1471,
        "longitude": -115.1551
      },
      "rating": 3.6,
      "description": "Located towards the north end of the Strip. Offers a tower with observation decks and thrill rides (for an extra fee). Rooms are generally more affordable than mid-Strip options. Great views!"
    }
  ],
  "itinerary": {
    "day1": {
      "theme": "Exploring the Strip (South End & Free Attractions)",
      "plan": [
        {
          "placeName": "Welcome to Las Vegas Sign",
          "placeDetails": "Iconic sign for a photo opportunity. Arrive early to avoid crowds.",
          "placeImageUri": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Welcome_to_Las_Vegas_sign.JPG/1280px-Welcome_to_Las_Vegas_sign.JPG",
          "geoCoordinates": {
            "latitude": 36.0828,
            "longitude": -115.1727
          },
          "ticketPricing": "Free",
          "rating": 4.5,
          "timeTravel": "15-20 minutes from mid-Strip hotels (by bus or ride-sharing)",
          "bestTimeToVisit": "Early morning (before 9 AM) or late evening (after 9 PM)"
        },
        {
          "placeName": "Bellagio Conservatory & Botanical Garden",
          "placeDetails": "Beautiful seasonal displays. Free to enter.",
          "placeImageUri": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/5a/9c/f2/bellagio-conservatory.jpg?w=1200&h=-1&s=1",
          "geoCoordinates": {
            "latitude": 36.1127,
            "longitude": -115.1761
          },
          "ticketPricing": "Free",
          "rating": 4.8,
          "timeTravel": "Walking distance from many Strip hotels",
          "bestTimeToVisit": "Anytime during opening hours, but expect moderate crowds."
        },
        {
          "placeName": "Bellagio Fountains",
          "placeDetails": "Spectacular water show synchronized to music. Free to watch.",
          "placeImageUri": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/99/27/b2/bellagio-fountains.jpg?w=1200&h=-1&s=1",
          "geoCoordinates": {
            "latitude": 36.1126,
            "longitude": -115.1741
          },
          "ticketPricing": "Free",
          "rating": 4.9,
          "timeTravel": "Right outside the Bellagio hotel.",
          "bestTimeToVisit": "Evenings for the best visual experience (shows run frequently)."
        },
        {
          "placeName": "Explore the LINQ Promenade",
          "placeDetails": "Shopping, dining, and entertainment district with the High Roller Observation Wheel. Window shopping is free; consider happy hour specials for affordable drinks.",
          "placeImageUri": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/50/9c/0d/linq-promenade.jpg?w=1200&h=-1&s=1",
          "geoCoordinates": {
            "latitude": 36.1161,
            "longitude": -115.1696
          },
          "ticketPricing": "Free to walk around, attractions have separate fees.",
          "rating": 4.3,
          "timeTravel": "Walking distance from central Strip hotels.",
          "bestTimeToVisit": "Evening for the lively atmosphere and lights."
        }
      ]
    },
    "day2": {
      "theme": "Downtown Las Vegas & Fremont Street Experience",
      "plan": [/* Your full plan continues here... */]
    },
    "day3": {
      "theme": "Nature Escape or Further Strip Exploration",
      "plan": [/* Your full plan continues here... */]
    }
  }
}
\`\`\``,
          },
        ],
      },
      {
        role: 'user',
        parts: [
          {
            text: `INSERT_INPUT_HERE`,
          },
        ],
      },
    ],
  });
};
