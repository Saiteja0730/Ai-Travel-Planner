// src/components/Razorpay/Fakerazor.js
import React from 'react';

// --- !!! SECURITY WARNING !!! ---
// The Secret Key MUST NEVER be here or in any frontend code.
// It MUST ONLY be used on your secure backend server.
// It has been removed entirely from this component.
// The Key ID (Public Key) is used here to initiate the checkout.
// --------------------------------

const RAZOR_KEY_ID = 'rzp_test_eN6ZLqHMgNIgaB'; // Your Test Key ID here

const Fakerazor = () => {

  // Function to dynamically load the Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false); // Handle script loading error
      document.body.appendChild(script);
    });
  };

  // Function to display the Razorpay checkout popup
  const displayRazorpay = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Check your internet connection.');
      return;
    }

    // --- !!! IMPORTANT NOTE !!! ---
    // In a real, secure integration, the 'amount' and 'order_id'
    // would be dynamically fetched from your backend.
    // Your backend creates the Order using the Secret Key.
    // For this 'fake'/test frontend component, we'll use a hardcoded test amount.
    // We are OMITTING order_id here as we cannot get it from a backend
    // within the constraints of only modifying this component.
    // This limits testing the full secure flow.
    // ------------------------------

    const testAmount = 100; // Hardcoded test amount in rupees (e.g., ₹100)
    const amountInPaise = testAmount * 100; // Convert to paise

    const options = {
      key: RAZOR_KEY_ID, // Your Test Key ID
      amount: amountInPaise,
      currency: 'INR',
      name: 'Your App Name (Test)',
      description: 'Test Transaction (Fake Razorpay)',
      // order_id: 'ORDER_ID_FROM_BACKEND', // --> Needed for secure, complete flow <--
      handler: function (response) {
        // This function is called upon successful payment.
        // In a real app, you'd send this response to your backend for verification.
        alert('Test Payment Successful! Payment ID: ' + response.razorpay_payment_id);
        console.log("Razorpay Response:", response);
        // Send response (payment_id, order_id, signature) to backend for signature verification
      },
       modal: {
         ondismiss: function() {
             console.log('Checkout form closed');
             alert('Payment cancelled or failed.'); // Or handle failure appropriately
         }
       },
      // You can add prefill, notes, theme, etc. options here
      prefill: {
         name: 'Test User',
         email: 'testuser@example.com',
         contact: '9876543210'
      }
    };

    // Create and open the Razorpay checkout modal
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  // Render a button that triggers the Razorpay checkout when clicked
  return (
    <div>
    </div>
  );
};

export default Fakerazor;