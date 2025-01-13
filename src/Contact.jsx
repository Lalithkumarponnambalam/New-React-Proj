import React from "react";
import "./App.css";

function Contact() {
  return (
    <div className="container p-5">
      <div className="row">
        {/* Left column (Company Info) */}
        <div className="col-md-4">
          <h2>Contact Us</h2>
          <p>Our company is located at:</p>
          <address>
            1234 Business Ave, <br />
            City, Country <br />
            Phone: (123) 456-7890 <br />
            Email: info@company.com
          </address>
        </div>

        {/* Right column (Contact Form) */}
        <div className="col-md-8">
          <h3>Get in Touch</h3>
          <form>
            {/* Name input */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            {/* Email input */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            {/* Message textarea */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
