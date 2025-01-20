import React from "react";
import "./App.css";

function Contact() {
  return (
    <div className="container p-5">
      <div className="row">
        {/* Left column (Company Info) */}
        <div className="col-md-4 mb-4 mb-md-0">
          <h2>Let’s get connected</h2>
          <p>Please feel free to get in touch on the contact details provided below:</p>
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
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control bg-light"
                id="name"
                placeholder=""
                required
              />
            </div>

            {/* Email input */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control bg-light"
                id="email"
                placeholder=""
                required
              />
            </div>

            {/* Message textarea */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control bg-light"
                id="message"
                rows="4"
                placeholder=""
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="send-msg-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
