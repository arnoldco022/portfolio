import { useState } from "react";
import { motion } from "framer-motion";

export default function TopHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const menuVariants = {
    open: { opacity: 1, y: 0, display: "block" },
    closed: { opacity: 0, y: -20, transitionEnd: { display: "none" } },
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <nav className="max-w-7xl mx-auto p-5 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.replaceState(null, "", window.location.pathname);
            }}
            className="hover:text-orange-400 transition-colors flex items-center gap-3"
          >
            <img
              src={process.env.PUBLIC_URL + '/coffee.png'}
              alt="Coffee Logo"
              className="h-12 w-12"
            />
            <span className="text-2xl font-semibold text-gray-900 mt-2">
              Code Coffee
            </span>
          </a>
        </div>
        <ul className="hidden md:flex space-x-12 text-lg">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.replaceState(null, "", window.location.pathname);
              }}
              className="text-gray-700 font-semibold hover:text-orange-400 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => handleNavClick("#about")}
              className="text-gray-700 font-semibold hover:text-orange-400 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#works"
              onClick={() => handleNavClick("#works")}
              className="text-gray-700 font-semibold hover:text-orange-400 transition"
            >
              Works
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleNavClick("#contact")}
              className="text-gray-700 font-semibold hover:text-orange-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-gray-700 focus:outline-none"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16"
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 12h16"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18h16"
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </button>
        </div>
      </nav>
      <motion.ul
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col space-y-4 text-lg p-5"
      >
        <li
            href="#"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.replaceState(null, "", window.location.pathname);
            }}>
          <a
            className="text-gray-700 font-semibold hover:text-orange-400 transition"
          >
            Home
          </a>
        </li>
        <li 
            href="#about"
            onClick={() => handleNavClick("#about")}>
          <a
            className="text-gray-700 font-semibold hover:text-orange-400 transition"
          >
            About
          </a>
        </li>
        <li
            href="#works"
            onClick={() => handleNavClick("#works")}>
          <a
            href="#works"
            onClick={() => handleNavClick("#works")}
            className="text-gray-700 font-semibold hover:text-orange-400 transition"
          >
            Works
          </a>
        </li>
        <li
            href="#contact"
            onClick={() => handleNavClick("#contact")}>
          <a
            className="text-gray-700 font-semibold hover:text-orange-400 transition"
          >
            Contact
          </a>
        </li>
      </motion.ul>
    </header>
  );
}
