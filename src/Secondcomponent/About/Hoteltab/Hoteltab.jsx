import React from 'react'
import "./hoteltab.css"


const Hoteltab = ({ searchTerm }) => {

  const hotelData = [
    {
      "image": "https://images.pexels.com/photos/28582410/pexels-photo-28582410/free-photo-of-close-up-of-taj-mahal-s-iconic-architecture.jpeg?auto=compress&cs=tinysrgb&w=600",
      "hotelName": "The Taj Palace",
      "placeName": "Agra",
      "price": "$120",
      "rating": 4.8,
      "offer": "20% off for early booking"
    },
    {
      "image": "https://images.pexels.com/photos/3014823/pexels-photo-3014823.jpeg?auto=compress&cs=tinysrgb&w=600",
      "hotelName": "Hilton Garden Inn",
      "placeName": "New York",
      "price": "$180",
      "rating": 4.5,
      "offer": "Free breakfast included"
    },
    {
      "image": "https://images.pexels.com/photos/31739144/pexels-photo-31739144/free-photo-of-majestic-view-of-mont-saint-michel-abbey.jpeg?auto=compress&cs=tinysrgb&w=600",
      "hotelName": "Le Meurice",
      "placeName": "Paris",
      "price": "$250",
      "rating": 4.9,
      "offer": "Stay 3 nights, get 1 free"
    },
    {
      "image": "https://images.pexels.com/photos/31662859/pexels-photo-31662859/free-photo-of-modern-skyscraper-amidst-blooming-purple-flowers.jpeg?auto=compress&cs=tinysrgb&w=600",
      "hotelName": "The Ritz-Carlton",
      "placeName": "Dubai",
      "price": "$300",
      "rating": 4.7,
      "offer": "Luxury spa access"
    },
    {
      "image": "https://images.pexels.com/photos/29870245/pexels-photo-29870245/free-photo-of-luxurious-hotel-lobby-in-tokyo-japan.jpeg?auto=compress&cs=tinysrgb&w=600",
      "hotelName": "Hotel Aman",
      "placeName": "Bali",
      "price": "$200",
      "rating": 4.6,
      "offer": "30% off for couples"
    },
    {
      "image": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      "hotelName": "Four Seasons",
      "placeName": "Tokyo",
      "price": "$280",
      "rating": 4.9,
      "offer": "Free airport transfer"
    },
    {
      "image": "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=80",
      "hotelName": "Mandarin Oriental",
      "placeName": "London",
      "price": "$230",
      "rating": 4.7,
      "offer": "Free tea service"
    },
    {
      "image": "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&w=800&q=80",
      "hotelName": "Fairmont Banff Springs",
      "placeName": "Canada",
      "price": "$190",
      "rating": 4.6,
      "offer": "Kids stay free"
    },
    {
      "image": "https://images.pexels.com/photos/15481196/pexels-photo-15481196/free-photo-of-not-expected.jpeg?auto=compress&cs=tinysrgb&w=600",
      "hotelName": "The Peninsula",
      "placeName": "Bangkok",
      "price": "$170",
      "rating": 4.5,
      "offer": "Free cultural tour"
    },
    {
      "image": "https://images.pexels.com/photos/31726434/pexels-photo-31726434/free-photo-of-sydney-harbour-bridge-in-sunny-sydney-day.jpeg?auto=compress&cs=tinysrgb&w=600",
      "hotelName": "Park Hyatt",
      "placeName": "Sydney",
      "price": "$290",
      "rating": 4.9,
      "offer": "Harbor view upgrade"
    },
    {
      "image": "https://images.pexels.com/photos/31733332/pexels-photo-31733332/free-photo-of-stunning-seaside-resort-with-water-park-view.jpeg?auto=compress&cs=tinysrgb&w=600",
      "hotelName": "Belmond Hotel",
      "placeName": "Venice",
      "price": "$260",
      "rating": 4.8,
      "offer": "Free gondola ride"
    },
    {
      "image": "https://images.pexels.com/photos/326787/pexels-photo-326787.jpeg?auto=compress&cs=tinysrgb&w=600",
      "hotelName": "Marina Bay Sands",
      "placeName": "Singapore",
      "price": "$310",
      "rating": 4.8,
      "offer": "Infinity pool access"
    },
    {
      "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      "hotelName": "W Hotel",
      "placeName": "Barcelona",
      "price": "$200",
      "rating": 4.6,
      "offer": "Free welcome drink"
    },
    {
      "image": "https://images.pexels.com/photos/31215018/pexels-photo-31215018/free-photo-of-bustling-street-scene-in-shangri-la-old-town.jpeg?auto=compress&cs=tinysrgb&w=600",
      "hotelName": "Shangri-La",
      "placeName": "Beijing",
      "price": "$195",
      "rating": 4.5,
      "offer": "Complimentary dinner"
    },
    {
      "image": "https://images.pexels.com/photos/7245016/pexels-photo-7245016.jpeg?auto=compress&cs=tinysrgb&w=600",
      "hotelName": "Palazzo Versace",
      "placeName": "Dubai",
      "price": "$240",
      "rating": 4.7,
      "offer": "Luxury shopping coupons"
    },
    {
      "image": "https://media.istockphoto.com/id/1277037378/photo/rock-formations-in-a-bare-arid-desert-landscape-amangiri-resort.jpg?b=1&s=612x612&w=0&k=20&c=MJbIQF2XaOH3Np1xDIH0F9J3Pue6ADpMEGUlITTsrHs=",
      "hotelName": "Amangiri",
      "placeName": "Utah",
      "price": "$350",
      "rating": 4.9,
      "offer": "Private desert tour"
    },
    {
      "image": "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
      "hotelName": "The Oberoi",
      "placeName": "Udaipur",
      "price": "$175",
      "rating": 4.8,
      "offer": "Lake view upgrade"
    },
    {
      "image": "https://images.pexels.com/photos/12516848/pexels-photo-12516848.jpeg?auto=compress&cs=tinysrgb&w=600",
      "hotelName": "Constance Moofushi",
      "placeName": "Maldives",
      "price": "$410",
      "rating": 5.0,
      "offer": "All-inclusive package"
    },
    {
      "image": "https://images.pexels.com/photos/31685015/pexels-photo-31685015/free-photo-of-scenic-view-of-san-carlos-de-bariloche-s-lake-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=600",
      "hotelName": "Explora Patagonia",
      "placeName": "Chile",
      "price": "$320",
      "rating": 4.9,
      "offer": "Free hiking gear"
    },
    {
      "image": "https://images.pexels.com/photos/31743309/pexels-photo-31743309/free-photo-of-traditional-korean-architecture-in-seoul.jpeg?auto=compress&cs=tinysrgb&w=600",
      "hotelName": "The Gritti Palace",
      "placeName": "Venice",
      "price": "$280",
      "rating": 4.7,
      "offer": "Romantic dinner for 2"
    }
  ]

  const filteredHotels = hotelData.filter((hotel) =>
    hotel.hotelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hotel.placeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
       <div className="hotel-tab-container">
      {filteredHotels.map((hotel, index) => (
        <div className="hotel-card" key={index}>
          <img src={hotel.image} alt={hotel.hotelName} className="hotel-image" />
          <div className="hotel-info">
            <h3>{hotel.hotelName}</h3>
            <p><strong>📍</strong> {hotel.placeName}</p>
            <p><strong>💵</strong> {hotel.price}</p>
            <p><strong>⭐</strong> {hotel.rating}</p>
            <p><strong>🎁</strong> {hotel.offer}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Hoteltab
