"use client";
import React from "react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Main Heading */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-black mb-8">रोजगारकेन्द्र</h1>
        <p className="text-lg text-gray-700 mb-16">
          Welcome to our comprehensive job portal, where you can find the latest
          information about jobs, results, admit cards, and more!
        </p>
      </div>

      {/* Content Boxes */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Latest Jobs Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Latest Jobs</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/docs" className="text-blue-600 hover:underline">
                Government Jobs
              </Link>
            </li>
            <li>
              <Link href="/docs" className="text-blue-600 hover:underline">
                Private Sector Jobs
              </Link>
            </li>
            <li>
              <Link href="/docs" className="text-blue-600 hover:underline">
                Walk-in Interviews
              </Link>
            </li>
          </ul>
        </div>

        {/* Result Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/blog" className="text-blue-600 hover:underline">
                Latest Exam Results
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-blue-600 hover:underline">
                Merit Lists
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-blue-600 hover:underline">
                Cut-off Marks
              </Link>
            </li>
          </ul>
        </div>

        {/* Admit Card Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Admit Card</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/templates" className="text-blue-600 hover:underline">
                Download Admit Cards
              </Link>
            </li>
            <li>
              <Link href="/templates" className="text-blue-600 hover:underline">
                Hall Ticket Instructions
              </Link>
            </li>
            <li>
              <Link href="/templates" className="text-blue-600 hover:underline">
                Exam Centers List
              </Link>
            </li>
          </ul>
        </div>

        {/* Answer Key Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Answer Key</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/enterprise"
                className="text-blue-600 hover:underline"
              >
                Latest Answer Keys
              </Link>
            </li>
            <li>
              <Link
                href="/enterprise"
                className="text-blue-600 hover:underline"
              >
                Objection Submission
              </Link>
            </li>
            <li>
              <Link
                href="/enterprise"
                className="text-blue-600 hover:underline"
              >
                Previous Year Answer Keys
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
