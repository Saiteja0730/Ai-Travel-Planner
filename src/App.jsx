import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Firstcomponent/Login';
import Signup from './Firstcomponent/Signup';
import Dashboard from './Secondcomponent/Dashcomponent/Dashboard';
import Destiny from './Secondcomponent/Destination/Destiny';
import Contact from './Secondcomponent/Contact/Contact';
import About from './Secondcomponent/About/About';
import Booknow from './Secondcomponent/Booknow/Booknow';
import Gentrip from './Secondcomponent/Destination/Generatetrip/Gentrip';


const App = () => {
  return (
    
      <>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dash" element={ <Dashboard/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/destiny" element={<Destiny/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/book" element={ <Booknow/>} /> 
      <Route path="/gentrip/:docId" element={<Gentrip/>} />   
      </Routes>
      </>  
  )
}

export default App
