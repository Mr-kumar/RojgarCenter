import React from "react";
import { Button } from "./ui/button"; // Assuming Shadcn is set up
import Image from "next/image"; // Import Image from next/image for optimized images

const AdmitCard = () => {
  // Example admit cards data for Government Jobs
  const admitCards = [
    {
      postName: "Junior Engineer (Civil)",
      organization: "Indian Railways",
      applicationDate: "2024-08-20",
      examDate: "2024-11-25",
      rollNumber: "IR123456789",
      status: "Approved",
      id: 1,
      venue: "Delhi, Sector 15, Railway Hall",
      isNew: true,
      imageUrl: "/images/indian-railways.jpg", // Sample image URL
    },
    {
      postName: "Assistant Police Constable",
      organization: "UP Police",
      applicationDate: "2024-07-15",
      examDate: "2024-12-10",
      rollNumber: "UP987654321",
      status: "Pending",
      id: 2,
      venue: "Lucknow, UP Police Training Center",
      isNew: true,
      imageUrl: "/images/up-police.jpg", // Sample image URL
    },
    // ... other cards
  ];

  // Separate the new and released admit cards
  const newAdmitCards = admitCards.filter((card) => card.isNew);
  const releasedAdmitCards = admitCards.filter((card) => !card.isNew);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white transition-all duration-300">
            Your Government Job Admit Cards
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Here are the admit cards for the Government Jobs you&apos;ve applied
            for. Check the newly released ones first!
          </p>
        </div>

        {/* New Admit Cards Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
            New Admit Cards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newAdmitCards.map((card) => (
              <div
                key={card.id}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4 hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={card.imageUrl}
                  alt={`${card.postName} - ${card.organization}`}
                  width={600}
                  height={400}
                  className="rounded-md mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white transition-all duration-300">
                  {card.postName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Organization:</strong> {card.organization}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Application Date:</strong> {card.applicationDate}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Exam Date:</strong> {card.examDate}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Venue:</strong> {card.venue}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Roll Number:</strong> {card.rollNumber}
                </p>
                <p
                  className={`text-sm font-medium ${
                    card.status === "Approved"
                      ? "text-green-600 dark:text-green-400"
                      : "text-yellow-600 dark:text-yellow-400"
                  }`}
                >
                  <strong>Status:</strong> {card.status}
                </p>

                {/* Actions Section */}
                <div className="mt-4 space-x-4">
                  {card.status === "Approved" ? (
                    <Button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 rounded-md shadow-md">
                      Download Admit Card
                    </Button>
                  ) : (
                    <Button className="px-6 py-3 text-white bg-gray-400 cursor-not-allowed dark:bg-gray-700 rounded-md shadow-md">
                      Not Available
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Released Admit Cards Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
            Previously Released Admit Cards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {releasedAdmitCards.map((card) => (
              <div
                key={card.id}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4 hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={card.imageUrl}
                  alt={`${card.postName} - ${card.organization}`}
                  width={600}
                  height={400}
                  className="rounded-md mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white transition-all duration-300">
                  {card.postName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Organization:</strong> {card.organization}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Application Date:</strong> {card.applicationDate}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Exam Date:</strong> {card.examDate}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Venue:</strong> {card.venue}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Roll Number:</strong> {card.rollNumber}
                </p>
                <p
                  className={`text-sm font-medium ${
                    card.status === "Approved"
                      ? "text-green-600 dark:text-green-400"
                      : "text-yellow-600 dark:text-yellow-400"
                  }`}
                >
                  <strong>Status:</strong> {card.status}
                </p>

                {/* Actions Section */}
                <div className="mt-4 space-x-4">
                  {card.status === "Approved" ? (
                    <Button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 rounded-md shadow-md">
                      Download Admit Card
                    </Button>
                  ) : (
                    <Button className="px-6 py-3 text-white bg-gray-400 cursor-not-allowed dark:bg-gray-700 rounded-md shadow-md">
                      Not Available
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmitCard;
