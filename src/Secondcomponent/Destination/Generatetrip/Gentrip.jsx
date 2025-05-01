import React, {useEffect, useState} from 'react';
import "./gentip.css"; 
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { doc, getDoc} from 'firebase/firestore';
import { db } from '../../../Firstcomponent/Firebase'
import Infosec from './Infosection/Infosec';
import Hotelrecom from '../Generatetrip/Hotelrecomen/Hotelrecom';
import Placesvisit from './Placesvisit/Placesvisit';






const Gentrip =  () => {
  
  const { docId } = useParams();
   

  const [trip, setTrip] = useState({});

//  console.log("this is trip",trip)
  useEffect(() => {
    if (docId) {
      GetTripData();
    }
  }, [docId]);
  /**
   * Used To get Trip Information from Firebase
   */
  const GetTripData= async()=> {
    const docRef=doc(db, 'AiTrips',docId);
    const docSnap=await getDoc(docRef);

    if(docSnap.exists()) {
      const data = docSnap.data();

      const parsedTripData = typeof data.tripData === 'string' 
      ? JSON.parse(data.tripData) 
      : data.tripData;

    setTrip({
      ...data,
      tripData: parsedTripData 
    });
    }
    else{
      console.log("No search for Document");
      toast.error("No search for Document");
    }
  }

  return (
    <>
    <div className='Gentrip-box'>
         {/* This is the Info section */}
         <Infosec trip={trip}/>

         {/* This is Hotels Recommend */}
         <Hotelrecom trip={trip}/>

         {/* This is Places to visit */}
         <Placesvisit trip={trip}/>
    </div>
     
      
    <ToastContainer position="top-center" autoClose={3000}/>
    </>
  );
}

export default Gentrip;
