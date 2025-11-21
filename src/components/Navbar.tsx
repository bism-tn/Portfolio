"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-black h-16 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-full">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white tracking-tight">
          BismiTN
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          ☰
        </button>

        {/* Links */}
        <div
          className={`${
            open ? "block absolute top-16 left-0 w-full bg-black shadow-md" : "hidden"
          } md:block md:static md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 text-lg font-medium text-white">
            {navLinks.map((link) => (
              <motion.li
                key={link.path}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  href={link.path}
                  className="block py-2 px-3 hover:text-gray-400 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
