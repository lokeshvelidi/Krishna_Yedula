import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const linkBase =
    "transition-colors hover:text-blue-500 text-sm sm:text-base";

  const active =
    "text-blue-500 font-bold";

  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 text-left">
        {/* Column 1: About */}
        <div className="w-full">
          <h3 className="font-bold text-white mb-4 text-base sm:text-lg">About</h3>
          <p className="text-sm sm:text-base lg:text-lg">
            Dr. Krishna Yedula is an IT expert and changemaker known for leadership
            in public–private partnerships, humanitarian work, and environmental sustainability.
          </p>
        </div>

        {/* Column 2: (Optional) Services – removed empty markup to avoid layout shifts */}
        <div aria-hidden="true" />

        {/* Column 3: Quick Links */}
        <nav aria-label="Quick Links">
          <h3 className="font-bold text-white mb-4 text-base sm:text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Column 4: Contact */}
        <address className="not-italic">
          <h3 className="font-bold text-white mb-4 text-base sm:text-lg">Contact</h3>
          <p className="text-sm sm:text-base">
            001 Columbus Road, Floor 4, San Francisco, CS 9100
          </p>
          <p className="text-sm sm:text-base">
            Phone:{" "}
            <a href="tel:+1222890603919" className="hover:text-white transition-colors">
              (222) 890 60 3919
            </a>
          </p>
          <p className="text-sm sm:text-base">Mon–Sat: 8:00–18:00</p>
        </address>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-gray-400 py-4 border-t border-gray-700">
        © {new Date().getFullYear()} Maxzen{" "}
        <a
          href="https://st.ourhtmldemo.com/template/consult-press/index.html"
          className="hover:text-white transition-colors underline underline-offset-2 ml-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Consult Press template (opens in a new tab)"
        >
          Template credit
        </a>
      </div>
    </footer>
  );
}

export default Footer;
