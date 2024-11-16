"use client";
import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12">
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Welcome to <span className="font-semibold">रोजगारकेन्द्र</span>,
            your trusted partner in finding the best job opportunities, career
            guidance, and resources to help you succeed. We are dedicated to
            connecting talent with opportunities, and we strive to empower
            individuals to achieve their professional dreams.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              To bridge the gap between employers and job seekers by providing
              reliable information, up-to-date job listings, and essential
              resources to help individuals find the right career path.
            </p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              To become the leading job portal, empowering individuals and
              organizations to achieve their goals by facilitating efficient,
              transparent, and accessible employment opportunities.
            </p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Our Values
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Integrity, excellence, and inclusivity are at the core of what we
              do. We believe in creating a fair and equal platform for everyone,
              fostering trust and transparency in the job market.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                John Doe
              </h4>
              <p className="text-gray-600 dark:text-gray-400">Founder & CEO</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                John is passionate about connecting people with opportunities.
                He oversees strategic planning and operations.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Jane Smith
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Head of Marketing
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Jane is a marketing expert with years of experience in building
                brand awareness and engagement.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Robert Johnson
              </h4>
              <p className="text-gray-600 dark:text-gray-400">Tech Lead</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Robert is the tech wizard behind our platform, ensuring a
                seamless and user-friendly experience.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Career Journey?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Join us today and discover the latest job openings, resources, and
            tips to boost your career. Let’s achieve your professional goals
            together!
          </p>
          <Link
            href="/docs"
            className="inline-block bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-900 px-6 py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-400 transition duration-300"
          >
            Explore Latest Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
