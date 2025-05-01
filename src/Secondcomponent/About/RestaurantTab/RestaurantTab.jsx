import React from 'react'
import "./restaurant.css"


function RestaurantTab({ searchTerm }) {

    const restaurants = [
        {
          "image": "https://images.unsplash.com/photo-1642582431503-5276a6b9798d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE11Z2hhbCUyMFRyZWF0c3xlbnwwfHwwfHx8MA%3D%3D",
          "restaurantName": "Mughal Treats",
          "placeName": "Agra",
          "priceRange": "$243$",
          "rating": 4.6,
          "offer": "10% off"
        },
        {
          "image": "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
          "restaurantName": "The Pink Thali",
          "placeName": "Jaipur",
          "priceRange": "$433$",
          "rating": 4.5,
          "offer": "15% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
          "restaurantName": "Beach Bites",
          "placeName": "Goa",
          "priceRange": "$433",
          "rating": 4.7,
          "offer": "20% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
          "restaurantName": "Himalayan Dine",
          "placeName": "Manali",
          "priceRange": "$$",
          "rating": 4.4,
          "offer": "5% off"
        },
        {
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeTjd4VpC1Ghh6BKvPskcSM4cr_4Ot0GGIRw&s",
          "restaurantName": "Old Delhi Spices",
          "placeName": "Delhi",
          "priceRange": "$543",
          "rating": 4.8,
          "offer": "10% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1554679665-f5537f187268?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
          "restaurantName": "Bay View Bistro",
          "placeName": "Mumbai",
          "priceRange": "$$$",
          "rating": 4.6,
          "offer": "12% off"
        },
        {
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRW5fGUqnCCC36LJ5BevU-mVHB2njXZxou7g&s",
          "restaurantName": "Backwater Flavors",
          "placeName": "Alleppey",
          "priceRange": "$243",
          "rating": 4.7,
          "offer": "15% off"
        },
        {
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQezo6_pdTuzwjZZlcREh2EAiTnbnN06PTaKw&s",
          "restaurantName": "Lakeview Thali",
          "placeName": "Udaipur",
          "priceRange": "$234",
          "rating": 4.5,
          "offer": "10% off"
        },
        {
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuWsbjOO5Szb9CFdSivi5SyPsS7mi4g413g&s",
          "restaurantName": "Ladakh Cuisine",
          "placeName": "Leh",
          "priceRange": "$784",
          "rating": 4.6,
          "offer": "5% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
          "restaurantName": "Pine View Café",
          "placeName": "Shimla",
          "priceRange": "$894",
          "rating": 4.3,
          "offer": "8% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1484659619207-9165d119dafe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
          "restaurantName": "Holy Bites",
          "placeName": "Varanasi",
          "priceRange": "$",
          "rating": 4.4,
          "offer": "10% off"
        },
        {
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCX_3uCX-iB0P3Q8Bg-HsAWSS-5Oqu6QcR3w&s",
          "restaurantName": "Ganga Flavors",
          "placeName": "Rishikesh",
          "priceRange": "$984",
          "rating": 4.5,
          "offer": "10% off"
        },
        {
          "image": "https://plus.unsplash.com/premium_photo-1723491285855-f1035c4c703c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
          "restaurantName": "Tea Garden Café",
          "placeName": "Darjeeling",
          "priceRange": "$893",
          "rating": 4.6,
          "offer": "12% off"
        },
        {
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Sr_2ucNKJn4MiRKAX4mPL8hpDCth7ZNIZg&s",
          "restaurantName": "French Delight",
          "placeName": "Pondicherry",
          "priceRange": "$734",
          "rating": 4.8,
          "offer": "15% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1580590562911-89d31480d993?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fCUyMlJveWFsJTIwU3BpY2VzfGVufDB8fDB8fHww",
          "restaurantName": "Royal Spices",
          "placeName": "Mysore",
          "priceRange": "$343",
          "rating": 4.4,
          "offer": "5% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1645820298496-fdfca08052df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29vcmclMjBDdWlzaW5lc3xlbnwwfHwwfHx8MA%3D%3D",
          "restaurantName": "Coorg Cuisines",
          "placeName": "Coorg",
          "priceRange": "$434",
          "rating": 4.5,
          "offer": "10% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1669410647983-ef742ccdfe6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
          "restaurantName": "Nilgiri Flavors",
          "placeName": "Ooty",
          "priceRange": "$343",
          "rating": 4.3,
          "offer": "10% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1560187839-85fa7adfcf39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
          "restaurantName": "Snowy Cravings",
          "placeName": "Auli",
          "priceRange": "$543",
          "rating": 4.6,
          "offer": "15% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1571585412090-57dcd6dfaa0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1pc3QlMjBDYWYlQzMlQTl8ZW58MHx8MHx8fDA%3D",
          "restaurantName": "Mist Café",
          "placeName": "Lonavala",
          "priceRange": "$215",
          "rating": 4.4,
          "offer": "8% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1627678020092-b3a8ac3e490e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
          "restaurantName": "Shoreline Sizzlers",
          "placeName": "Mahabalipuram",
          "priceRange": "$824",
          "rating": 4.5,
          "offer": "10% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1712089295178-8ea08acd2ba4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fHww",
          "restaurantName": "Cloud Café",
          "placeName": "Kodaikanal",
          "priceRange": "$423",
          "rating": 4.6,
          "offer": "5% off"
        },
        {
          "image": "https://plus.unsplash.com/premium_photo-1697730116501-72f5749dffce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRlbXBsZSUyMFRvd24lMjBUcmVhdHN8ZW58MHx8MHx8fDA%3D",
          "restaurantName": "Temple Town Treats",
          "placeName": "Kanchipuram",
          "priceRange": "$2875",
          "rating": 4.2,
          "offer": "10% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1707172308283-e2d1e44d0be3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww",
          "restaurantName": "Himalaya Harvest",
          "placeName": "Gangtok",
          "priceRange": "$432",
          "rating": 4.5,
          "offer": "10% off"
        },
        {
          "image": "https://media.istockphoto.com/id/1302442919/photo/luxury-beach-villa-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=b0GO1cEmtHSuwmdlmkJGZVhiBoAtn-gNp6LYcPg12AQ=",
          "restaurantName": "Cape Cuisine",
          "placeName": "Kanyakumari",
          "priceRange": "$344",
          "rating": 4.3,
          "offer": "12% off"
        },
        {
          "image": "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D",
          "restaurantName": "Desert Dishes",
          "placeName": "Bikaner",
          "priceRange": "$889",
          "rating": 4.4,
          "offer": "10% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1683290845356-920a3307adf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1eHVyeSUyMGhvdGVsfGVufDB8fDB8fHww",
          "restaurantName": "Bengal Biryani",
          "placeName": "Kolkata",
          "priceRange": "$431",
          "rating": 4.7,
          "offer": "15% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1683290844875-0eee4089069a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGhvdGVsfGVufDB8fDB8fHww",
          "restaurantName": "Marina Feast",
          "placeName": "Chennai",
          "priceRange": "$334",
          "rating": 4.5,
          "offer": "10% off"
        },
        {
          "image": "https://media.istockphoto.com/id/139744879/photo/dusk-at-the-poolside-of-a-luxury-hotel.webp?a=1&b=1&s=612x612&w=0&k=20&c=xWm3g68WeFwa4L707oqbuxiMiH2-6Fk0jY-OnPf7tJE=",
          "restaurantName": "Garden Grill",
          "placeName": "Bangalore",
          "priceRange": "$978",
          "rating": 4.6,
          "offer": "10% off"
        },
        {
          "image": "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.webp?a=1&b=1&s=612x612&w=0&k=20&c=WSUR0zm7RgU7LLCpa9ATpa_zYgetoyf5A-ZVfbDituw=",
          "restaurantName": "Golden Spoon",
          "placeName": "Amritsar",
          "priceRange": "$783",
          "rating": 4.8,
          "offer": "10% off"
        }
      ]
      
      const restaurantTab = restaurants.filter((restaurant) =>
        restaurant.restaurantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.placeName.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <>
      <div className="restaurant-container">
      {restaurantTab.map((restaurant, index) => (
        <div className="restaurant-card" key={index}>
          <img 
            src={restaurant.image} 
            alt={restaurant.restaurantName} 
            className="restaurant-image" 
          />
          <div className="restaurant-info">
            <h3>🍴 {restaurant.restaurantName}</h3>
            <p><strong>📍</strong> {restaurant.placeName}</p>
            <p><strong>💵</strong> {restaurant.priceRange}</p>
            <p><strong>⭐</strong> {restaurant.rating}</p>
            <p><strong>🎁</strong> {restaurant.offer}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default RestaurantTab
