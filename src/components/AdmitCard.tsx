// components/AdmitCard.tsx
import React from "react";
import { Button } from "./ui/button"; // Assuming you have Shadcn set up

const AdmitCard = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Download Your Admit Card
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Enter your credentials to download the admit card for the upcoming
            exam or job interview.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* User Info Section */}
              <div className="sm:col-span-1">
                <label
                  htmlFor="user-id"
                  className="block text-sm font-medium text-gray-700"
                >
                  User ID
                </label>
                <input
                  type="text"
                  id="user-id"
                  name="user-id"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                variant="default"
                className="px-6 py-3 mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md"
              >
                Download Admit Card
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdmitCard;
