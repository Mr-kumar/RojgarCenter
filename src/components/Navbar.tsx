"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ModeToggle from "./ModeToggle"; // Make sure to import the ModeToggle component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-lg font-bold">
            रोजगारकेन्द्र
          </Link>
          <div className="md:hidden flex items-center space-x-2">
            {/* Move ModeToggle to the right for mobile */}
            <ModeToggle />
            <button
              ref={menuButtonRef}
              className="bg-transparent text-white p-2 rounded-md"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="px-4 py-2 rounded-md text-white transition-colors duration-200 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/docs"
              className="px-4 py-2 rounded-md text-white transition-colors duration-200 ease-in-out"
            >
              Latest Jobs
            </Link>
            <Link
              href="/result"
              className="px-4 py-2 rounded-md text-white transition-colors duration-200 ease-in-out"
            >
              Result
            </Link>
            <Link
              href="/templates"
              className="px-4 py-2 rounded-md text-white transition-colors duration-200 ease-in-out"
            >
              Admit Card
            </Link>
            <Link
              href="/enterprise"
              className="px-4 py-2 rounded-md text-white transition-colors duration-200 ease-in-out"
            >
              Answer Key
            </Link>
            <Link
              href="/AboutUs"
              className="px-4 py-2 rounded-md text-white transition-colors duration-200 ease-in-out"
            >
              About us
            </Link>
          </div>
          {/* ModeToggle for larger screens */}
          <div className="hidden md:flex">
            <ModeToggle />
          </div>
        </div>
        {/* Sidebar menu */}
        <div
          ref={sidebarRef}
          className={`md:hidden fixed top-0 right-0 w-64 h-full bg-black text-white transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/showcase" className="py-2 px-4 rounded">
              Showcase
            </Link>
            <Link href="/docs" className="py-2 px-4 rounded">
              Docs
            </Link>
            <Link href="/blog" className="py-2 px-4 rounded">
              Blog
            </Link>
            <Link href="/templates" className="py-2 px-4 rounded">
              Templates
            </Link>
            <Link href="/enterprise" className="py-2 px-4 rounded">
              Enterprise
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
