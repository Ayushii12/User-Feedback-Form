import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
      });

      const handleUserInput = (event) => {
        const {name, value} = event.target; // name --> 'name' attribute of the input field
                                            // value --> 'value' entered by the user into the input field
        setFormData({...formData, [name]: value}); // Spreads the existing formData object 
                                                   // Creates a new object and updates the property specified by the 'name' variable with the new value
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
          Name: ${formData.name}
          Email: ${formData.email}
          Feedback: ${formData.feedback}
        `;

        // isConfirmed is set to true --> if the user confirms the details in the dialog
        const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
        
        if(isConfirmed) {
          console.log('Submitting feedback:', formData);
          setFormData({
            name: '',
            email: '',
            feedback: ''
          });
          alert('Thank you for your valuable feedback!');
        }
      };
  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
    <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleUserInput}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleUserInput}
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleUserInput}
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;