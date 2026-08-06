import React from "react";
import { Link } from "react-router-dom";
import {Phone,MapPin,Mail} from "lucide-react";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold">
            Job<span className="text-blue-500">Portal</span>
          </h1>

          <p className="text-gray-400 mt-4 leading-7">
            Find your dream job with thousands of verified opportunities.
            Connect with top companies and build your career with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-5">Quick Links</h2>

          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="hover:text-blue-500 transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/jobs"
                className="hover:text-blue-500 transition duration-300"
              >
                Browse Jobs
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="hover:text-blue-500 transition duration-300"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/signup"
                className="hover:text-blue-500 transition duration-300"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-5">Contact</h2>

          <div className="space-y-3 text-gray-400">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500" />
              <span>support@jobportal.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-500" />
              <span>Bhopal, Madhya Pradesh</span>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="bg-gray-800 hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-300"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300"
            >
              <FaFacebook size={22} />
            </a>

            <a
              href="#"
              className="bg-gray-800 hover:bg-pink-600 px-4 py-2 rounded-lg transition duration-300"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-5">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} JobPortal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;