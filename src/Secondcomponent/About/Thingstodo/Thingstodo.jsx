import React from 'react'
import "./thingstodo.css"

const Thingstodo = ({ searchTerm }) => {

  const activities =  [
        {
          "id": 1,
          "image": "https://images.unsplash.com/photo-1605370391262-9f6c46081102?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFyYWdsaWRpbmclMjBBZHZlbnR1cmV8ZW58MHx8MHx8fDA%3D",
          "activityName": "Paragliding Adventure",
          "placeName": "Bir Billing",
          "price": "$45",
          "rating": 4.7,
          "offer": "10% off"
        },
        {
          "id": 2,
          "image": "https://media.istockphoto.com/id/1452738479/photo/diver-on-a-reef-in-aqaba.webp?a=1&b=1&s=612x612&w=0&k=20&c=1p_yRu2jUkolh8Vy5uZznqf9nmW-LkC7pjCZGMVMxf0=",
          "activityName": "Scuba Diving",
          "placeName": "Andaman Islands",
          "price": "$60",
          "rating": 4.9,
          "offer": "15% off"
        },
        {
          "id": 3,
          "image": "https://images.unsplash.com/photo-1740383235563-e2d2f2b24259?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhpbWFsYXlhbiUyMFRyZWt8ZW58MHx8MHx8fDA%3D",
          "activityName": "Himalayan Trek",
          "placeName": "Manali",
          "price": "$50",
          "rating": 4.8,
          "offer": "20% off"
        },
        {
          "id": 4,
          "image": "https://images.unsplash.com/photo-1654159163244-21068c843cca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SnVuZ2xlJTIwU2FmYXJpfGVufDB8fDB8fHww",
          "activityName": "Jungle Safari",
          "placeName": "Ranthambore",
          "price": "$35",
          "rating": 4.5,
          "offer": "5% off"
        },
        {
          "id": 5,
          "image": "https://images.unsplash.com/photo-1642700055565-644874d5f005?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEhvdCUyMEFpciUyMEJhbGxvb24lMjBSaWRlfGVufDB8fDB8fHww",
          "activityName": "Hot Air Balloon Ride",
          "placeName": "Jaipur",
          "price": "$55",
          "rating": 4.6,
          "offer": "10% off"
        },
        {
          "id": 6,
          "image": "https://plus.unsplash.com/premium_photo-1681169148820-bd6cadecf968?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Uml2ZXIlMjBLYXlha2luZ3xlbnwwfHwwfHx8MA%3D%3D",
          "activityName": "River Kayaking",
          "placeName": "Rishikesh",
          "price": "$40",
          "rating": 4.4,
          "offer": "15% off"
        },
        {
          "id": 7,
          "image": "https://media.istockphoto.com/id/1224021113/photo/indian-cameleers-camel-driver-with-camel-silhouettes-in-dunes-on-sunset-jaisalmer-rajasthan.webp?a=1&b=1&s=612x612&w=0&k=20&c=DgMNlnNSzsOfPvu3OSDGUg1oJTwpXyc0gbmI9N_a-c0=",
          "activityName": "Camel Safari",
          "placeName": "Jaisalmer",
          "price": "$30",
          "rating": 4.2,
          "offer": "10% off"
        },
        {
          "id": 8,
          "image": "https://images.unsplash.com/photo-1633297345330-261df10cf6a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFN1cmZpbmclMjBMZXNzb25zfGVufDB8fDB8fHww",
          "activityName": "Surfing Lessons",
          "placeName": "Goa",
          "price": "$45",
          "rating": 4.7,
          "offer": "10% off"
        },
        {
          "id": 9,
          "image": "https://images.unsplash.com/photo-1696347075770-4e3ebdedf855?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFJvY2slMjBDbGltYmluZ3xlbnwwfHwwfHx8MA%3D%3D",
          "activityName": "Rock Climbing",
          "placeName": "Hampi",
          "price": "$35",
          "rating": 4.3,
          "offer": "5% off"
        },
        {
          "id": 10,
          "image": "https://media.istockphoto.com/id/1492228244/photo/wild-female-mother-tiger-panthera-tigris-face-expression-calling-her-missing-cubs-giving.webp?a=1&b=1&s=612x612&w=0&k=20&c=rx5_4fsaOIjorjDBS8-wwtW4IFiszonu1AG6wukxPkU=",
          "activityName": "Wildlife Safari",
          "placeName": "Jim Corbett",
          "price": "$50",
          "rating": 4.5,
          "offer": "12% off"
        },
        {
          "id": 11,
          "image": "https://images.unsplash.com/photo-1487253096619-4ab6f24d5bbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNub3JrZWxpbmd8ZW58MHx8MHx8fDA%3D",
          "activityName": "Snorkeling",
          "placeName": "Lakshadweep",
          "price": "$38",
          "rating": 4.6,
          "offer": "10% off"
        },
        {
          "id": 12,
          "image": "https://images.unsplash.com/photo-1564329494258-3f72215ba175?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2hpa2FyYSUyMFJpZGV8ZW58MHx8MHx8fDA%3D",
          "activityName": "Shikara Ride",
          "placeName": "Srinagar",
          "price": "$25",
          "rating": 4.8,
          "offer": "5% off"
        },
        {
          "id": 13,
          "image": "https://images.unsplash.com/photo-1717379758104-ad792da70f37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFppcCUyMExpbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
          "activityName": "Zip Lining",
          "placeName": "Rishikesh",
          "price": "$30",
          "rating": 4.4,
          "offer": "15% off"
        },
        {
          "id": 14,
          "image": "https://images.unsplash.com/photo-1523419163445-589ebf1785c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2F2ZSUyMEV4cGxvcmF0aW9ufGVufDB8fDB8fHww",
          "activityName": "Cave Exploration",
          "placeName": "Meghalaya",
          "price": "$28",
          "rating": 4.6,
          "offer": "10% off"
        },
        {
          "id": 15,
          "image": "https://images.unsplash.com/photo-1548360046-aedb7ed40838?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TW91bnRhaW4lMjBCaWtpbmd8ZW58MHx8MHx8fDA%3D",
          "activityName": "Mountain Biking",
          "placeName": "Leh",
          "price": "$50",
          "rating": 4.7,
          "offer": "20% off"
        },
        {
          "id": 16,
          "image": "https://images.unsplash.com/photo-1547233528-08a0fabc00dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2F0ZXJmYWxsJTIwUmFwcGVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
          "activityName": "Waterfall Rappelling",
          "placeName": "Lonavala",
          "price": "$40",
          "rating": 4.5,
          "offer": "12% off"
        },
        {
          "id": 17,
          "image": "https://images.unsplash.com/photo-1722463926354-aa706b4db1c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEhlbGljb3B0ZXIlMjBUb3VyfGVufDB8fDB8fHww",
          "activityName": "Helicopter Tour",
          "placeName": "Mumbai",
          "price": "$90",
          "rating": 4.8,
          "offer": "5% off"
        },
        {
          "id": 18,
          "image": "https://plus.unsplash.com/premium_photo-1697730116501-72f5749dffce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGVtcGxlJTIwVG91cnxlbnwwfHwwfHx8MA%3D%3D",
          "activityName": "Temple Tour",
          "placeName": "Varanasi",
          "price": "$20",
          "rating": 4.3,
          "offer": "10% off"
        },
        {
          "id": 19,
          "image": "https://images.unsplash.com/photo-1740815896626-1730ab642faf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEhlcml0YWdlJTIwV2Fsa3xlbnwwfHwwfHx8MA%3D%3D",
          "activityName": "Heritage Walk",
          "placeName": "Delhi",
          "price": "$18",
          "rating": 4.4,
          "offer": "15% off"
        },
        {
          "id": 20,
          "image": "https://media.istockphoto.com/id/1492085771/photo/houseboat-in-alappuzha-backwaters-kerala.webp?a=1&b=1&s=612x612&w=0&k=20&c=TSTdOya9_W_9YctRBYezCo3w7F1S32tjSAEVDLU-Hg0=",
          "activityName": "Backwater Cruise",
          "placeName": "Alleppey",
          "price": "$55",
          "rating": 4.9,
          "offer": "20% off"
        },
        {
          "id": 21,
          "image": "https://images.unsplash.com/photo-1549708319-b6e78d2592ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEN1bHR1cmFsJTIwU2hvd3xlbnwwfHwwfHx8MA%3D%3D",
          "activityName": "Cultural Show",
          "placeName": "Udaipur",
          "price": "$15",
          "rating": 4.6,
          "offer": "10% off"
        },
        {
          "id": 22,
          "image": "https://images.unsplash.com/photo-1542666836-2790751aafda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3RyZWV0JTIwRm9vZCUyMFRvdXJ8ZW58MHx8MHx8fDA%3D",
          "activityName": "Street Food Tour",
          "placeName": "Delhi",
          "price": "$22",
          "rating": 4.7,
          "offer": "10% off"
        },
        {
          "id": 23,
          "image": "https://plus.unsplash.com/premium_photo-1661891887710-0528c1d76b92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Uml2ZXIlMjBSYWZ0aW5nfGVufDB8fDB8fHww",
          "activityName": "River Rafting",
          "placeName": "Rishikesh",
          "price": "$35",
          "rating": 4.9,
          "offer": "15% off"
        },
        {
          "id": 24,
          "image": "https://images.unsplash.com/photo-1715786092228-a2bbf0af53d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmlyZCUyMFdhdGNoaW5nfGVufDB8fDB8fHww",
          "activityName": "Bird Watching",
          "placeName": "Bharatpur",
          "price": "$18",
          "rating": 4.3,
          "offer": "8% off"
        },
        {
          "id": 25,
          "image": "https://images.unsplash.com/photo-1635661988046-306631057df3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENvb2tpbmclMjBDbGFzc3xlbnwwfHwwfHx8MA%3D%3D",
          "activityName": "Cooking Class",
          "placeName": "Jaipur",
          "price": "$30",
          "rating": 4.5,
          "offer": "12% off"
        },
        {
          "id": 26,
          "image": "https://media.istockphoto.com/id/1060006282/photo/enjoy-my-leisure-time-fishing-at-alpin-lake.webp?a=1&b=1&s=612x612&w=0&k=20&c=LdkmEp3ZAu5pLlyUTeHhsKsgqe1miQn7tvd4iyp2m8E=",
          "activityName": "Angling Trip",
          "placeName": "Kerala",
          "price": "$25",
          "rating": 4.2,
          "offer": "10% off"
        },
        {
          "id": 27,
          "image": "https://media.istockphoto.com/id/854198310/photo/friends-doing-a-wine-tasting.webp?a=1&b=1&s=612x612&w=0&k=20&c=ed-yV5y8nPQoqwUak3JAJbf9tOXRVUBjccHkBBvY_8M=",
          "activityName": "Wine Tasting",
          "placeName": "Nashik",
          "price": "$32",
          "rating": 4.4,
          "offer": "10% off"
        },
        {
          "id": 28,
          "image": "https://media.istockphoto.com/id/1014754290/photo/advice-of-teacher.webp?a=1&b=1&s=612x612&w=0&k=20&c=813VAB1QyjKTbHoYPZxwNsL4YidGhp_TjmSr_JOMMKY=",
          "activityName": "Pottery Workshop",
          "placeName": "Pondicherry",
          "price": "$28",
          "rating": 4.6,
          "offer": "5% off"
        },
        {
          "id": 29,
          "image": "https://images.unsplash.com/photo-1707125334981-42dc3130fe28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SWNlJTIwU2thdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
          "activityName": "Ice Skating",
          "placeName": "Shimla",
          "price": "$30",
          "rating": 4.4,
          "offer": "15% off"
        }
      ];
      
      const filteredThings = activities.filter((activity) =>
        activity.activityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.placeName.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <>
      <div className="things-container">
      {filteredThings.map((activity, index) => (
        <div className="activity-card" key={index}>
          <img 
            src={activity.image} 
            alt={activity.activityName} 
            className="activity-image" 
          />
          <div className="activity-info">
            <h3>🌍 {activity.activityName}</h3>
            <p><strong>📍</strong> {activity.placeName}</p>
            <p><strong>💵</strong> {activity.price}</p>
            <p><strong>⭐</strong> {activity.rating}</p>
            <p><strong>🎁</strong> {activity.offer}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Thingstodo
