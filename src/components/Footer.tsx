"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 dark:text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Site Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white dark:text-gray-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="hover:underline">
                  Latest Jobs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:underline">
                  Admit Card
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="hover:underline">
                  Answer Key
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white dark:text-gray-100 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-400 mb-2">
              रोजगारकेन्द्र <br />
              123 Job Street, Employment City <br />
              Country, Postal Code
            </p>
            <p className="text-gray-400">
              Email:{" "}
              <a
                href="mailto:info@rojgarkendra.com"
                className="text-blue-400 hover:underline"
              >
                info@rojgarkendra.com
              </a>
            </p>
            <p className="text-gray-400">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-400 hover:underline"
              >
                +123 456 7890
              </a>
            </p>
          </div>

          {/* Column 3 - Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white dark:text-gray-100 mb-4">
              Follow Us
            </h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-gray-500 text-sm">
            &copy; 2024 रोजगारकेन्द्र. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
