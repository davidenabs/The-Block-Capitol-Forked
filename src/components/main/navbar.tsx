import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", sectionId: "hero" },
  { name: "About", sectionId: "who-we-are" },
  { name: "Programmes", sectionId: "blockchain-courses" },
  { name: "Community", sectionId: "join-network" },
  // { name: "Blog", link: "/blog" },
  { name: "Contact", sectionId: "footer" },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle smooth scrolling for section navigation
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav
      className={`flex justify-between items-center py-4 px-6 md:px-12 lg:px-24 fixed top-0 left-0 right-0 z-20 transition-all ${isSticky ? "bg-white/50 backdrop-blur-sm" : "bg-transparent"
        }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src="./main-logo.png" alt="Logo" width={50} height={50} />
      </motion.div>
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex space-x-6 text-secondary font-medium"
      >
        {navItems.map(({ name, sectionId }) => (
          <li key={name} className="relative group cursor-pointer">
            {sectionId ? (
              <a
                href={`#${sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(sectionId);
                }}
                className="hover:text-red-800 transition-colors duration-300"
              >
                {name}
              </a>
            ) : (
              <Link
                to={'#'}
                className="hover:text-red-800 transition-colors duration-300"
              >
                {name}
              </Link>
            )}
            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        ))}
      </motion.ul>
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block bg-secondary hover:bg-red-700 text-white px-4 py-2 rounded"
      >
        Join Cohort
      </motion.button>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-dark">
          {isOpen ? <X /> : <Menu size={20} />}
        </button>
      </div>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-20 left-0 right-0 flex flex-col items-center space-y-4 p-4 text-secondary text-left font-medium md:hidden h-screen bg-white"
        >
          {navItems.map(({ name, sectionId }) => (
            <li key={name} className="relative group cursor-pointer px-3">
              {sectionId ? (
                <a
                  href={`#${sectionId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(sectionId);
                  }}
                  className="hover:text-red-800 transition-colors duration-300"
                >
                  {name}
                </a>
              ) : (
                <Link
                  to={"#"}
                  className="hover:text-red-800 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {name}
                </Link>
              )}
              <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>
          ))}
          <button className="bg-secondary hover:bg-red-700 text-white px-4 py-3 rounded">
            Join Cohort
          </button>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;