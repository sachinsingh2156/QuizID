import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-2">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="footer-section w-full sm:w-auto mb-4 sm:mb-0">
              <h2 class="text-2xl">Contact Us</h2>
              <div className="contact">
                <span>info@example.com</span>
                <br />
                <span>+1234567890</span>
              </div>
            </div>
            <div className="footer-section w-full sm:w-auto mb-4 sm:mb-0">
              <h2 class="text-2xl">Quick Links</h2>
              <ul>
                <li>
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="text-white">
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-4 ">
          <p className="text-center">
            &copy; 2024 Quiz App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
