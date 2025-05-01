import React from 'react'
import "./flightab.css"

const FlightTab = ({ searchTerm }) => {

    const flights = [
        {
          "image": "https://media.istockphoto.com/id/1170043433/photo/indian-family-standing-at-airport-in-front-of-airliner.webp?a=1&b=1&s=612x612&w=0&k=20&c=P6rFT4wxTJdr3IXQrSRExFhi9qxG1yOuYWcfNR4mlhk=",
          "flightName": "IndiGo 6E-203",
          "from": "Delhi",
          "to": "Agra",
          "price": "$80",
          "departureTime": "08:00 AM",
          "arrivalTime": "09:00 AM",
          "duration": "1h",
          "offer": "10% off"
        },
        {
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGz5vKxU4PW-tzUC621yzrHmfv3XMeRDYPiQ&s",
          "flightName": "SpiceJet SG-502",
          "from": "Mumbai",
          "to": "Jaipur",
          "price": "$95",
          "departureTime": "07:15 AM",
          "arrivalTime": "08:45 AM",
          "duration": "1h 30m",
          "offer": "15% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1708744773439-4b8d679893e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpciUyMGluZGlhfGVufDB8fDB8fHww",
          "from": "Chennai",
          "to": "Goa",
          "price": "$120",
          "departureTime": "10:30 AM",
          "arrivalTime": "12:00 PM",
          "duration": "1h 30m",
          "offer": "5% off"
        },
        {
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzoi4Dpd-mCVgax3Vr4RrVWH-xIQRBOCA_NA&s",
          "flightName": "Vistara UK-712",
          "from": "Bangalore",
          "to": "Manali",
          "price": "$140",
          "departureTime": "06:00 AM",
          "arrivalTime": "08:00 AM",
          "duration": "2h",
          "offer": "20% off"
        },
        {
          "image": "https://plus.unsplash.com/premium_photo-1679758630055-99ebb2df7d77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z28lMjBmaXJzdCUyMGZsaWdodHxlbnwwfHwwfHx8MA%3D%3D",
          "flightName": "GoFirst G8-225",
          "from": "Delhi",
          "to": "Shimla",
          "price": "$85",
          "departureTime": "09:30 AM",
          "arrivalTime": "10:45 AM",
          "duration": "1h 15m",
          "offer": "10% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1627335824187-34e81d047961?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QWthc2ElMjBBaXIlMjBmbGlnaHR8ZW58MHx8MHx8fDA%3D",
          "flightName": "Akasa Air QP-101",
          "from": "Kolkata",
          "to": "Darjeeling",
          "price": "$110",
          "departureTime": "12:00 PM",
          "arrivalTime": "01:30 PM",
          "duration": "1h 30m",
          "offer": "12% off"
        },
        {
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7Be5eCLPkh8U7GNi1Ho0ZNMunTMNUbUMQA&s",
          "flightName": "AirAsia I5-303",
          "from": "Hyderabad",
          "to": "Pondicherry",
          "price": "$130",
          "departureTime": "03:00 PM",
          "arrivalTime": "04:40 PM",
          "duration": "1h 40m",
          "offer": "15% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1662642388169-4808ef5b7533?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEFrYXNhJTIwQWlyJTIwZmxpZ2h0fGVufDB8fDB8fHww",
          "flightName": "IndiGo 6E-600",
          "from": "Ahmedabad",
          "to": "Udaipur",
          "price": "$90",
          "departureTime": "05:45 AM",
          "arrivalTime": "06:55 AM",
          "duration": "1h 10m",
          "offer": "10% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1666066017054-17f7c505c556?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3BpY2VKZXQlMjBmbGlnaHR8ZW58MHx8MHx8fDA%3D",
          "flightName": "SpiceJet SG-808",
          "from": "Chennai",
          "to": "Kodaikanal",
          "price": "$100",
          "departureTime": "08:30 AM",
          "arrivalTime": "09:50 AM",
          "duration": "1h 20m",
          "offer": "8% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1614872375964-9ee013fffbda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "flightName": "Vistara UK-905",
          "from": "Mumbai",
          "to": "Lonavala",
          "price": "$75",
          "departureTime": "11:00 AM",
          "arrivalTime": "12:00 PM",
          "duration": "1h",
          "offer": "5% off"
        },
      
        {
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS139c2g51vzZ3cg5DPAXwj7JVTkzk7Rk1Hcw&s",
          "flightName": "IndiGo 6E-712",
          "from": "Delhi",
          "to": "Leh",
          "price": "$140",
          "departureTime": "07:00 AM",
          "arrivalTime": "09:00 AM",
          "duration": "2h",
          "offer": "10% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1643567789675-7c02c8d30dc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHZpc3RhcmElMjBmbGlnaHR8ZW58MHx8MHx8fDA%3D",
          "flightName": "Air India AI-312",
          "from": "Delhi",
          "to": "Rishikesh",
          "price": "$95",
          "departureTime": "02:00 PM",
          "arrivalTime": "03:15 PM",
          "duration": "1h 15m",
          "offer": "15% off"
        },
        {
          "image": "https://images.unsplash.com/photo-1632246030676-6229211f2907?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHZpc3RhcmElMjBmbGlnaHR8ZW58MHx8MHx8fDA%3D",
          "flightName": "GoFirst G8-199",
          "from": "Bangalore",
          "to": "Coorg",
          "price": "$85",
          "departureTime": "09:00 AM",
          "arrivalTime": "10:10 AM",
          "duration": "1h 10m",
          "offer": "10% off"
        },
        {
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR739Gb636Ff6GGok1_LlsFDiI5WsIMnyGuyA&s",
          "flightName": "Vistara UK-509",
          "from": "Hyderabad",
          "to": "Ooty",
          "price": "$120",
          "departureTime": "06:30 AM",
          "arrivalTime": "08:00 AM",
          "duration": "1h 30m",
          "offer": "12% off"
        },
        {
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFlarkpXD85fl1qmrhP_69SsblYRDZppK0w&s",
          "flightName": "AirAsia I5-404",
          "from": "Kolkata",
          "to": "Gangtok",
          "price": "$105",
          "departureTime": "07:45 AM",
          "arrivalTime": "09:15 AM",
          "duration": "1h 30m",
          "offer": "10% off"
        },
        {
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqS6NBDylxRXSk0uZbCfpm-dtqqOvGdCQTUg&s",
          "flightName": "Akasa Air QP-211",
          "from": "Delhi",
          "to": "Varanasi",
          "price": "$95",
          "departureTime": "11:00 AM",
          "arrivalTime": "12:30 PM",
          "duration": "1h 30m",
          "offer": "7% off"
        },
        {
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcMPDllnBIyz2HNaUMmcgOzvpdpf7SeydrVg&s",
          "flightName": "IndiGo 6E-504",
          "from": "Bangalore",
          "to": "Mysore",
          "price": "$60",
          "departureTime": "10:00 AM",
          "arrivalTime": "11:00 AM",
          "duration": "1h",
          "offer": "10% off"
        },
        {
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxoSmDEhWIiyX4f-Jbz2gG5rz0gG3pCS2gw&s",
          "flightName": "SpiceJet SG-709",
          "from": "Chennai",
          "to": "Mahabalipuram",
          "price": "$70",
          "departureTime": "04:00 PM",
          "arrivalTime": "05:00 PM",
          "duration": "1h",
          "offer": "5% off"
        },
        {
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBssM7Gz5pmgs3wtLTwlZ8CkP6tFLWM6izDg&s",
          "flightName": "Air India AI-419",
          "from": "Mumbai",
          "to": "Amritsar",
          "price": "$110",
          "departureTime": "01:00 PM",
          "arrivalTime": "03:00 PM",
          "duration": "2h",
          "offer": "15% off"
        },
        {
          "image": "https://i.ytimg.com/vi/VmDzOfdxwZk/maxresdefault.jpg",
          "flightName": "Vistara UK-712",
          "from": "Hyderabad",
          "to": "Kanyakumari",
          "price": "$135",
          "departureTime": "06:00 AM",
          "arrivalTime": "08:15 AM",
          "duration": "2h 15m",
          "offer": "10% off"
        }
      ]
      
      const flightTab = flights.filter((flight) =>
        flight.flightName && flight.flightName.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <>
      <div className="flight-container">
      {flightTab.map((flight, index) => (
        <div className="flight-card" key={index}>
          <img 
            src={flight.image} 
            alt={flight.flightName} 
            className="flight-image" 
          />
          <div className="flight-info">
            <h3>✈️ {flight.flightName}</h3>
            <p><strong>📍</strong> {flight.from} → {flight.to}</p>
            <p><strong>💵</strong> {flight.price}</p>
            <p><strong>🕒</strong> {flight.departureTime} - {flight.arrivalTime}</p>
            <p><strong>🎁</strong> {flight.offer}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default FlightTab
