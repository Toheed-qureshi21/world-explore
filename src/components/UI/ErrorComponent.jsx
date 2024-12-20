import React from 'react';
import { NavLink } from 'react-router-dom';
const ErrorComponent = () => {
  return (
    <section className="error-container">
      <div className="error-grid">
        {/* First Column: Error Information */}
        <div className="error-info">
          <h1 className="error-title">404</h1>
          <p className="error-message">
            Oops! The page you're looking for doesn't exist.
          </p>
          <NavLink to="/" className="error-button">
            Go Back Home
          </NavLink>
        </div>
        <div className="error-image">
          <img
            src="error.webp"
            alt="Error Image"
          />
        </div>
      </div>
    </section>
  );
};

export default ErrorComponent;
