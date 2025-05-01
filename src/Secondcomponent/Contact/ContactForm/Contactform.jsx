import React, { useState } from "react";
import "./contactform.css";
import Formimage from "../ContactForm/contactleft.png";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.description) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", description: "" });
    }
  };

  return (
    <>
      <div className="contact-form">
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone ex. +1 451 678 9874"
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Describe your requirements *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="textarea-field"
              />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>

        <div className="formimg">
          <img src={Formimage} alt="form visual" />
        </div>
      </div>
      <ToastContainer position="top-right" />
    </>
  );
};

export default Contactform;
