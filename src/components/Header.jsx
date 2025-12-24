import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/logo1-removebg-preview.png"

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Career", link: "/career" },
    {name : "Gallery", link:"/Gallery"},
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
    // {name: "Hero", link: "/Hero"}
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300
      ${scrolled
        ? "bg-white/90 shadow-lg"
        : "bg-gradient-to-r from-white via-blue-100 to-blue-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3">
  <img
    src={logo}
    alt="Krishna Yedula Logo"
    className="h-20 w-36 object-contain"
  />
  {/* <span className="font-bold text-2xl tracking-wide">
    Krishna <span className="text-blue-600">Yedula</span>
  </span> */}
</Link>


        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`w-5 h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-1" : "-translate-y-1"}`} />
            <span className={`w-5 h-0.5 bg-current transition-all ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`w-5 h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-1" : "translate-y-1"}`} />
          </div>
        </button>

        {/* Menu */}
        <nav className={`${open ? "block" : "hidden"} lg:block absolute lg:static right-0 top-full w-full lg:w-auto bg-white/95 lg:bg-transparent shadow-xl lg:shadow-none px-6 lg:px-0 py-4 lg:py-0`}>
          <ul className="flex flex-col lg:flex-row gap-6 font-semibold text-lg md:text-m">
            {menuItems.map((item) => (
              <li key={item.link}>
                <Link
                  onClick={() => setOpen(false)}
                  to={item.link}
                  className={`relative group ${isActive(item.link) ? "text-blue-600 font-bold" : ""}`}
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
