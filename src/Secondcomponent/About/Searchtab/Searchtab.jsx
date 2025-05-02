import React from "react";
import "./searchtab.css";
import { useNavigate } from "react-router-dom";

const Searchtab = ({ searchTerm }) => {

    const navigate = useNavigate();

  const hotels = [
    {
      image:
        "https://images.pexels.com/photos/28582410/pexels-photo-28582410/free-photo-of-close-up-of-taj-mahal-s-iconic-architecture.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelName: "The Taj Palace",
      placeName: "Agra",
      price: 120,
      rating: 4.8,
      offer: "20% off for early booking",
    },
    {
      image:
        "https://images.pexels.com/photos/3014823/pexels-photo-3014823.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelName: "Hilton Garden Inn",
      placeName: "New York",
      price: 180,
      rating: 4.5,
      offer: "Free breakfast included",
    },
    {
      image:
        "https://images.pexels.com/photos/31739144/pexels-photo-31739144/free-photo-of-majestic-view-of-mont-saint-michel-abbey.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelName: "Le Meurice",
      placeName: "Paris",
      price: 250,
      rating: 4.9,
      offer: "Stay 3 nights, get 1 free",
    },
    {
      image:
        "https://images.pexels.com/photos/31662859/pexels-photo-31662859/free-photo-of-modern-skyscraper-amidst-blooming-purple-flowers.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelName: "The Ritz-Carlton",
      placeName: "Dubai",
      price: 300,
      rating: 4.7,
      offer: "Luxury spa access",
    },
    {
      image:
        "https://images.pexels.com/photos/29870245/pexels-photo-29870245/free-photo-of-luxurious-hotel-lobby-in-tokyo-japan.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelName: "Hotel Aman",
      placeName: "Bali",
      price: 200,
      rating: 4.6,
      offer: "30% off for couples",
    },
    {
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      hotelName: "Four Seasons",
      placeName: "Tokyo",
      price: 280,
      rating: 4.9,
      offer: "Free airport transfer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=80",
      hotelName: "Mandarin Oriental",
      placeName: "London",
      price: 230,
      rating: 4.7,
      offer: "Free tea service",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&w=800&q=80",
      hotelName: "Fairmont Banff Springs",
      placeName: "Canada",
      price: 190,
      rating: 4.6,
      offer: "Kids stay free",
    },
    {
      image:
        "https://images.pexels.com/photos/15481196/pexels-photo-15481196/free-photo-of-not-expected.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelName: "The Peninsula",
      placeName: "Bangkok",
      price: 170,
      rating: 4.5,
      offer: "Free cultural tour",
    },
    {
      image:
        "https://images.pexels.com/photos/31726434/pexels-photo-31726434/free-photo-of-sydney-harbour-bridge-in-sunny-sydney-day.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelName: "Park Hyatt",
      placeName: "Sydney",
      price: 290,
      rating: 4.9,
      offer: "Harbor view upgrade",
    },
    {
      image:
        "https://images.pexels.com/photos/31733332/pexels-photo-31733332/free-photo-of-stunning-seaside-resort-with-water-park-view.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelName: "Belmond Hotel",
      placeName: "Venice",
      price: 260,
      rating: 4.8,
      offer: "Free gondola ride",
    },
    {
      image:
        "https://images.pexels.com/photos/326787/pexels-photo-326787.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelName: "Marina Bay Sands",
      placeName: "Singapore",
      price: 310,
      rating: 4.8,
      offer: "Infinity pool access",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      hotelName: "W Hotel",
      placeName: "Barcelona",
      price: 200,
      rating: 4.6,
      offer: "Free welcome drink",
    },
    {
      image:
        "https://images.pexels.com/photos/31215018/pexels-photo-31215018/free-photo-of-bustling-street-scene-in-shangri-la-old-town.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelName: "Shangri-La",
      placeName: "Beijing",
      price: 195,
      rating: 4.5,
      offer: "Complimentary dinner",
    },
    {
      image:
        "https://images.pexels.com/photos/7245016/pexels-photo-7245016.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelName: "Palazzo Versace",
      placeName: "Dubai",
      price: 240,
      rating: 4.7,
      offer: "Luxury shopping coupons",
    },
    {
      image:
        "https://media.istockphoto.com/id/1277037378/photo/rock-formations-in-a-bare-arid-desert-landscape-amangiri-resort.jpg?b=1&s=612x612&w=0&k=20&c=MJbIQF2XaOH3Np1xDIH0F9J3Pue6ADpMEGUlITTsrHs=",
      hotelName: "Amangiri",
      placeName: "Utah",
      price: 350,
      rating: 4.9,
      offer: "Private desert tour",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
      hotelName: "The Oberoi",
      placeName: "Udaipur",
      price: 175,
      rating: 4.8,
      offer: "Lake view upgrade",
    },
    {
      image:
        "https://images.pexels.com/photos/12516848/pexels-photo-12516848.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelName: "Constance Moofushi",
      placeName: "Maldives",
      price: 410,
      rating: 5.0,
      offer: "All-inclusive package",
    },
    {
      image:
        "https://images.pexels.com/photos/31685015/pexels-photo-31685015/free-photo-of-scenic-view-of-san-carlos-de-bariloche-s-lake-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelName: "Explora Patagonia",
      placeName: "Chile",
      price: 320,
      rating: 4.9,
      offer: "Free hiking gear",
    },
    {
      image:
        "https://images.pexels.com/photos/31743309/pexels-photo-31743309/free-photo-of-traditional-korean-architecture-in-seoul.jpeg?auto=compress&cs=tinysrgb&w=600",
      hotelName: "The Gritti Palace",
      placeName: "Venice",
      price: 280,
      rating: 4.7,
      offer: "Romantic dinner for 2",
    },
  ];

  const restaurants = [
    {
      image:
        "https://images.unsplash.com/photo-1642582431503-5276a6b9798d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE11Z2hhbCUyMFRyZWF0c3xlbnwwfHwwfHx8MA%3D%3D",
      restaurantName: "Mughal Treats",
      placeName: "Agra",
      priceRange: 243,
      rating: 4.6,
      offer: "10% off",
    },
    {
      image: "https://media.istockphoto.com/id/1302442919/photo/luxury-beach-villa-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=b0GO1cEmtHSuwmdlmkJGZVhiBoAtn-gNp6LYcPg12AQ=",
      restaurantName: "Cape Cuisine",
      placeName: "Kanyakumari",
      priceRange: 344,
      rating: 4.3,
      offer: "12% off",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D",
      restaurantName: "Desert Dishes",
      placeName: "Bikaner",
      priceRange: 889,
      rating: 4.4,
      offer: "10% off",
    },
    {
      image:
        "https://images.unsplash.com/photo-1683290845356-920a3307adf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1eHVyeSUyMGhvdGVsfGVufDB8fDB8fHww",
      restaurantName: "Bengal Biryani",
      placeName: "Kolkata",
      priceRange: 431,
      rating: 4.7,
      offer: "15% off",
    },
    {
      image:
        "https://images.unsplash.com/photo-1683290844875-0eee4089069a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGhvdGVsfGVufDB8fDB8fHww",
      restaurantName: "Marina Feast",
      placeName: "Chennai",
      priceRange: 334,
      rating: 4.5,
      offer: "10% off",
    },
    {
      image:
        "https://media.istockphoto.com/id/139744879/photo/dusk-at-the-poolside-of-a-luxury-hotel.webp?a=1&b=1&s=612x612&w=0&k=20&c=xWm3g68WeFwa4L707oqbuxiMiH2-6Fk0jY-OnPf7tJE=",
      restaurantName: "Garden Grill",
      placeName: "Bangalore",
      priceRange: 978,
      rating: 4.6,
      offer: "10% off"
    },
    {
      image:
        "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.webp?a=1&b=1&s=612x612&w=0&k=20&c=WSUR0zm7RgU7LLCpa9ATpa_zYgetoyf5A-ZVfbDituw=",
      restaurantName: "Golden Spoon",
      placeName: "Amritsar",
      priceRange: 783,
      rating: 4.8,
      offer: "10% off",
    },
  ];

  const thingsToDo = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1605370391262-9f6c46081102?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFyYWdsaWRpbmclMjBBZHZlbnR1cmV8ZW58MHx8MHx8fDA%3D",
      activityName: "Paragliding Adventure",
      placeName: "Bir Billing",
      price: 485,
      rating: 4.7,
      offer: "10% off",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/1452738479/photo/diver-on-a-reef-in-aqaba.webp?a=1&b=1&s=612x612&w=0&k=20&c=1p_yRu2jUkolh8Vy5uZznqf9nmW-LkC7pjCZGMVMxf0=",
      activityName: "Scuba Diving",
      placeName: "Andaman Islands",
      price: 60,
      rating: 4.9,
      offer: "15% off",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1740383235563-e2d2f2b24259?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhpbWFsYXlhbiUyMFRyZWt8ZW58MHx8MHx8fDA%3D",
      activityName: "Himalayan Trek",
      placeName: "Manali",
      price: 50,
      rating: 4.8,
      offer: "20% off",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1654159163244-21068c843cca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SnVuZ2xlJTIwU2FmYXJpfGVufDB8fDB8fHww",
      activityName: "Jungle Safari",
      placeName: "Ranthambore",
      price: 35,
      rating: 4.5,
      offer: "5% off",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1642700055565-644874d5f005?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEhvdCUyMEFpciUyMEJhbGxvb24lMjBSaWRlfGVufDB8fDB8fHww",
      activityName: "Hot Air Balloon Ride",
      placeName: "Jaipur",
      price: 55,
      rating: 4.6,
      offer: "10% off",
    },
    {
      id: 6,
      image:
        "https://plus.unsplash.com/premium_photo-1681169148820-bd6cadecf968?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Uml2ZXIlMjBLYXlha2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      activityName: "River Kayaking",
      placeName: "Rishikesh",
      price: 40,
      rating: 4.4,
      offer: "15% off",
    },
    {
      id: 7,
      image:
        "https://media.istockphoto.com/id/1224021113/photo/indian-cameleers-camel-driver-with-camel-silhouettes-in-dunes-on-sunset-jaisalmer-rajasthan.webp?a=1&b=1&s=612x612&w=0&k=20&c=DgMNlnNSzsOfPvu3OSDGUg1oJTwpXyc0gbmI9N_a-c0=",
      activityName: "Camel Safari",
      placeName: "Jaisalmer",
      price: 30,
      rating: 4.2,
      offer: "10% off",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1633297345330-261df10cf6a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFN1cmZpbmclMjBMZXNzb25zfGVufDB8fDB8fHww",
      activityName: "Surfing Lessons",
      placeName: "Goa",
      price: 45,
      rating: 4.7,
      offer: "10% off",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1696347075770-4e3ebdedf855?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFJvY2slMjBDbGltYmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      activityName: "Rock Climbing",
      placeName: "Hampi",
      price: 35,
      rating: 4.3,
      offer: "5% off",
    },
    {
      id: 10,
      image:
        "https://media.istockphoto.com/id/1492228244/photo/wild-female-mother-tiger-panthera-tigris-face-expression-calling-her-missing-cubs-giving.webp?a=1&b=1&s=612x612&w=0&k=20&c=rx5_4fsaOIjorjDBS8-wwtW4IFiszonu1AG6wukxPkU=",
      activityName: "Wildlife Safari",
      placeName: "Jim Corbett",
      price: 50,
      rating: 4.5,
      offer: "12% off",
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1487253096619-4ab6f24d5bbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNub3JrZWxpbmd8ZW58MHx8MHx8fDA%3D",
      activityName: "Snorkeling",
      placeName: "Lakshadweep",
      price: 38,
      rating: 4.6,
      offer: "10% off",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1564329494258-3f72215ba175?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2hpa2FyYSUyMFJpZGV8ZW58MHx8MHx8fDA%3D",
      activityName: "Shikara Ride",
      placeName: "Srinagar",
      price: 25,
      rating: 4.8,
      offer: "5% off",
    },
    {
      id: 13,
      image:
        "https://images.unsplash.com/photo-1717379758104-ad792da70f37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFppcCUyMExpbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      activityName: "Zip Lining",
      placeName: "Rishikesh",
      price: 30,
      rating: 4.4,
      offer: "15% off",
    },
    {
      id: 14,
      image:
        "https://images.unsplash.com/photo-1523419163445-589ebf1785c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2F2ZSUyMEV4cGxvcmF0aW9ufGVufDB8fDB8fHww",
      activityName: "Cave Exploration",
      placeName: "Meghalaya",
      price: 28,
      rating: 4.6,
      offer: "10% off",
    },
    {
      id: 15,
      image:
        "https://images.unsplash.com/photo-1548360046-aedb7ed40838?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TW91bnRhaW4lMjBCaWtpbmd8ZW58MHx8MHx8fDA%3D",
      activityName: "Mountain Biking",
      placeName: "Leh",
      price: 50,
      rating: 4.7,
      offer: "20% off",
    },
    {
      id: 16,
      image:
        "https://images.unsplash.com/photo-1547233528-08a0fabc00dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2F0ZXJmYWxsJTIwUmFwcGVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      activityName: "Waterfall Rappelling",
      placeName: "Lonavala",
      price: 40,
      rating: 4.5,
      offer: "12% off",
    },
    {
      id: 17,
      image:
        "https://images.unsplash.com/photo-1722463926354-aa706b4db1c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEhlbGljb3B0ZXIlMjBUb3VyfGVufDB8fDB8fHww",
      activityName: "Helicopter Tour",
      placeName: "Mumbai",
      price: 90,
      rating: 4.8,
      offer: "5% off",
    },
    {
      id: 18,
      image:
        "https://plus.unsplash.com/premium_photo-1697730116501-72f5749dffce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGVtcGxlJTIwVG91cnxlbnwwfHwwfHx8MA%3D%3D",
      activityName: "Temple Tour",
      placeName: "Varanasi",
      price: 20,
      rating: 4.3,
      offer: "10% off",
    },
    {
      id: 19,
      image:
        "https://images.unsplash.com/photo-1740815896626-1730ab642faf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEhlcml0YWdlJTIwV2Fsa3xlbnwwfHwwfHx8MA%3D%3D",
      activityName: "Heritage Walk",
      placeName: "Delhi",
      price: 18,
      rating: 4.4,
      offer: "15% off",
    },
    {
      id: 20,
      image:
        "https://media.istockphoto.com/id/1492085771/photo/houseboat-in-alappuzha-backwaters-kerala.webp?a=1&b=1&s=612x612&w=0&k=20&c=TSTdOya9_W_9YctRBYezCo3w7F1S32tjSAEVDLU-Hg0=",
      activityName: "Backwater Cruise",
      placeName: "Alleppey",
      price: 55,
      rating: 4.9,
      offer: "20% off",
    },
    {
      id: 21,
      image:
        "https://images.unsplash.com/photo-1549708319-b6e78d2592ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEN1bHR1cmFsJTIwU2hvd3xlbnwwfHwwfHx8MA%3D%3D",
      activityName: "Cultural Show",
      placeName: "Udaipur",
      price: 15,
      rating: 4.6,
      offer: "10% off",
    },
    {
      id: 22,
      image:
        "https://images.unsplash.com/photo-1542666836-2790751aafda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3RyZWV0JTIwRm9vZCUyMFRvdXJ8ZW58MHx8MHx8fDA%3D",
      activityName: "Street Food Tour",
      placeName: "Delhi",
      price: 22,
      rating: 4.7,
      offer: "10% off",
    },
    {
      id: 23,
      image:
        "https://plus.unsplash.com/premium_photo-1661891887710-0528c1d76b92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Uml2ZXIlMjBSYWZ0aW5nfGVufDB8fDB8fHww",
      activityName: "River Rafting",
      placeName: "Rishikesh",
      price: 35,
      rating: 4.9,
      offer: "15% off",
    },
    {
      id: 24,
      image:
        "https://images.unsplash.com/photo-1715786092228-a2bbf0af53d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmlyZCUyMFdhdGNoaW5nfGVufDB8fDB8fHww",
      activityName: "Bird Watching",
      placeName: "Bharatpur",
      price: 18,
      rating: 4.3,
      offer: "8% off",
    },
    {
      id: 25,
      image:
        "https://images.unsplash.com/photo-1635661988046-306631057df3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENvb2tpbmclMjBDbGFzc3xlbnwwfHwwfHx8MA%3D%3D",
      activityName: "Cooking Class",
      placeName: "Jaipur",
      price: 30,
      rating: 4.5,
      offer: "12% off",
    },
    {
      id: 26,
      image:
        "https://media.istockphoto.com/id/1060006282/photo/enjoy-my-leisure-time-fishing-at-alpin-lake.webp?a=1&b=1&s=612x612&w=0&k=20&c=LdkmEp3ZAu5pLlyUTeHhsKsgqe1miQn7tvd4iyp2m8E=",
      activityName: "Angling Trip",
      placeName: "Kerala",
      price: 25,
      rating: 4.2,
      offer: "10% off",
    },
    {
      id: 27,
      image:
        "https://media.istockphoto.com/id/854198310/photo/friends-doing-a-wine-tasting.webp?a=1&b=1&s=612x612&w=0&k=20&c=ed-yV5y8nPQoqwUak3JAJbf9tOXRVUBjccHkBBvY_8M=",
      activityName: "Wine Tasting",
      placeName: "Nashik",
      price: 32,
      rating: 4.4,
      offer: "10% off",
    },
    {
      id: 28,
      image:
        "https://media.istockphoto.com/id/1014754290/photo/advice-of-teacher.webp?a=1&b=1&s=612x612&w=0&k=20&c=813VAB1QyjKTbHoYPZxwNsL4YidGhp_TjmSr_JOMMKY=",
      activityName: "Pottery Workshop",
      placeName: "Pondicherry",
      price: 28,
      rating: 4.6,
      offer: "5% off",
    },
    {
      id: 29,
      image:
        "https://images.unsplash.com/photo-1707125334981-42dc3130fe28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SWNlJTIwU2thdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      activityName: "Ice Skating",
      placeName: "Shimla",
      price: 30,
      rating: 4.4,
      offer: "15% off",
    },
  ];

  const flights = [
    {
      image:
        "https://media.istockphoto.com/id/1170043433/photo/indian-family-standing-at-airport-in-front-of-airliner.webp?a=1&b=1&s=612x612&w=0&k=20&c=P6rFT4wxTJdr3IXQrSRExFhi9qxG1yOuYWcfNR4mlhk=",
      flightName: "IndiGo 6E-203",
      from: "Delhi",
      to: "Agra",
      price: 80,
      departureTime: "08:00 AM",
      arrivalTime: "09:00 AM",
      duration: "1h",
      offer: "10% off",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGz5vKxU4PW-tzUC621yzrHmfv3XMeRDYPiQ&s",
      flightName: "SpiceJet SG-502",
      from: "Mumbai",
      to: "Jaipur",
      price: 95,
      departureTime: "07:15 AM",
      arrivalTime: "08:45 AM",
      duration: "1h 30m",
      offer: "15% off",
    },
    {
      image:
        "https://images.unsplash.com/photo-1708744773439-4b8d679893e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpciUyMGluZGlhfGVufDB8fDB8fHww",
      from: "Chennai",
      to: "Goa",
      price: 120,
      departureTime: "10:30 AM",
      arrivalTime: "12:00 PM",
      duration: "1h 30m",
      offer: "5% off",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzoi4Dpd-mCVgax3Vr4RrVWH-xIQRBOCA_NA&s",
      flightName: "Vistara UK-712",
      from: "Bangalore",
      to: "Manali",
      price: 140,
      departureTime: "06:00 AM",
      arrivalTime: "08:00 AM",
      duration: "2h",
      offer: "20% off",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1679758630055-99ebb2df7d77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z28lMjBmaXJzdCUyMGZsaWdodHxlbnwwfHwwfHx8MA%3D%3D",
      flightName: "GoFirst G8-225",
      from: "Delhi",
      to: "Shimla",
      price: 85,
      departureTime: "09:30 AM",
      arrivalTime: "10:45 AM",
      duration: "1h 15m",
      offer: "10% off",
    },
    {
      image:
        "https://images.unsplash.com/photo-1627335824187-34e81d047961?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QWthc2ElMjBBaXIlMjBmbGlnaHR8ZW58MHx8MHx8fDA%3D",
      flightName: "Akasa Air QP-101",
      from: "Kolkata",
      to: "Darjeeling",
      price: 110,
      departureTime: "12:00 PM",
      arrivalTime: "01:30 PM",
      duration: "1h 30m",
      offer: "12% off",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7Be5eCLPkh8U7GNi1Ho0ZNMunTMNUbUMQA&s",
      flightName: "AirAsia I5-303",
      from: "Hyderabad",
      to: "Pondicherry",
      price: 130,
      departureTime: "03:00 PM",
      arrivalTime: "04:40 PM",
      duration: "1h 40m",
      offer: "15% off",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614872375964-9ee013fffbda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      flightName: "Vistara UK-905",
      from: "Mumbai",
      to: "Lonavala",
      price: 75,
      departureTime: "11:00 AM",
      arrivalTime: "12:00 PM",
      duration: "1h",
      offer: "5% off",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS139c2g51vzZ3cg5DPAXwj7JVTkzk7Rk1Hcw&s",
      flightName: "IndiGo 6E-712",
      from: "Delhi",
      to: "Leh",
      price: 140,
      departureTime: "07:00 AM",
      arrivalTime: "09:00 AM",
      duration: "2h",
      offer: "10% off",
    },
    {
      image:
        "https://images.unsplash.com/photo-1643567789675-7c02c8d30dc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHZpc3RhcmElMjBmbGlnaHR8ZW58MHx8MHx8fDA%3D",
      flightName: "Air India AI-312",
      from: "Delhi",
      to: "Rishikesh",
      price: 95,
      departureTime: "02:00 PM",
      arrivalTime: "03:15 PM",
      duration: "1h 15m",
      offer: "15% off",
    },
    {
      image:
        "https://images.unsplash.com/photo-1632246030676-6229211f2907?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHZpc3RhcmElMjBmbGlnaHR8ZW58MHx8MHx8fDA%3D",
      flightName: "GoFirst G8-199",
      from: "Bangalore",
      to: "Coorg",
      price: 85,
      departureTime: "09:00 AM",
      arrivalTime: "10:10 AM",
      duration: "1h 10m",
      offer: "10% off",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR739Gb636Ff6GGok1_LlsFDiI5WsIMnyGuyA&s",
      flightName: "Vistara UK-509",
      from: "Hyderabad",
      to: "Ooty",
      price: 120,
      departureTime: "06:30 AM",
      arrivalTime: "08:00 AM",
      duration: "1h 30m",
      offer: "12% off",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFlarkpXD85fl1qmrhP_69SsblYRDZppK0w&s",
      flightName: "AirAsia I5-404",
      from: "Kolkata",
      to: "Gangtok",
      price: 105,
      departureTime: "07:45 AM",
      arrivalTime: "09:15 AM",
      duration: "1h 30m",
      offer: "10% off",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqS6NBDylxRXSk0uZbCfpm-dtqqOvGdCQTUg&s",
      flightName: "Akasa Air QP-211",
      from: "Delhi",
      to: "Varanasi",
      price: 95,
      departureTime: "11:00 AM",
      arrivalTime: "12:30 PM",
      duration: "1h 30m",
      offer: "7% off",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcMPDllnBIyz2HNaUMmcgOzvpdpf7SeydrVg&s",
      flightName: "IndiGo 6E-504",
      from: "Bangalore",
      to: "Mysore",
      price: 60,
      departureTime: "10:00 AM",
      arrivalTime: "11:00 AM",
      duration: "1h",
      offer: "10% off",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxoSmDEhWIiyX4f-Jbz2gG5rz0gG3pCS2gw&s",
      flightName: "SpiceJet SG-709",
      from: "Chennai",
      to: "Mahabalipuram",
      price: 70,
      departureTime: "04:00 PM",
      arrivalTime: "05:00 PM",
      duration: "1h",
      offer: "5% off",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBssM7Gz5pmgs3wtLTwlZ8CkP6tFLWM6izDg&s",
      flightName: "Air India AI-419",
      from: "Mumbai",
      to: "Amritsar",
      price: 110,
      departureTime: "01:00 PM",
      arrivalTime: "03:00 PM",
      duration: "2h",
      offer: "15% off",
    },
    {
      image: "https://i.ytimg.com/vi/VmDzOfdxwZk/maxresdefault.jpg",
      flightName: "Vistara UK-712",
      from: "Hyderabad",
      to: "Kanyakumari",
      price: 135,
      departureTime: "06:00 AM",
      arrivalTime: "08:15 AM",
      duration: "2h 15m",
      offer: "10% off",
    },
  ];

  const combinedData = [
    ...hotels.map((item) => ({ ...item, type: "hotel" })),
    ...restaurants.map((item) => ({ ...item, type: "restaurant" })),
    ...thingsToDo.map((item) => ({ ...item, type: "activity" })),
    ...flights.map((item) => ({ ...item, type: "flight" })),
  ];

  const filteredResults = combinedData.filter(
    (item) =>
      (item.placeName &&
        item.placeName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.name &&
        item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.activityName &&
        item.activityName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.flightName &&
        item.flightName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.hotelName &&
        item.hotelName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.restaurantName &&
        item.restaurantName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleToBooknow = (cardData) => {
      navigate("/book", { state: { item: cardData}})
  }

  return (
    <div className="search-results">
      {filteredResults.map((item, index) => (
        <div className="card" key={index}>
          <div className="image-container">
          <img
            src={item.image}
            alt={
              item.hotelName ||
              item.restaurantName ||
              item.activityName ||
              item.flightName ||
              "Place"
            }
          />
          <div className="book-me">
            <button onClick={() => handleToBooknow(item)}>Book Me</button>
          </div>
          </div>
        
          <div className="card-content">
            <h3>
              {item.hotelName ||
                item.restaurantName ||
                item.activityName ||
                item.flightName ||
                "Place Name"}
            </h3>
            <p>📍{item.placeName || "Place Name"}</p>
            <p>💵{item.priceRange || item.price || "Price not available"}</p>
            <p>⭐Rating: {item.rating}</p>
            <p>🎁{item.offer ? item.offer : "No Offer"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Searchtab;
