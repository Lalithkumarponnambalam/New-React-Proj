import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          My React App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            className="ast-mobile-svg ast-menu2-svg"
            fill="white"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="28"
            viewBox="0 0 24 28"
          >
            <path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z"></path>
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link fs-6 mx-3 ${isActive ? 'active' : ''}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link fs-6 mx-3 ${isActive ? 'active' : ''}`
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link fs-6 mx-3 ${isActive ? 'active' : ''}`
                }
                to="/application"
              >
                Application
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link fs-6 mx-3 ${isActive ? 'active' : ''}`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
