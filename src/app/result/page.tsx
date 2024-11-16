// src/pages/results.tsx

import { FC } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"; // Example import for ShadCN

// Example data structure for results
const resultsData = [
  {
    id: 1,
    title: "SSC CGL 2024 Result",
    description: "The result for SSC CGL 2024 is out. Check your score now!",
    date: "2024-11-15",
    link: "/results/ssc-cgl-2024",
  },
  {
    id: 2,
    title: "IBPS Clerk 2024 Prelims Result",
    description:
      "IBPS has released the prelims result for Clerk 2024. Click here to view.",
    date: "2024-11-12",
    link: "/results/ibps-clerk-2024",
  },
  {
    id: 3,
    title: "UPSC Civil Services 2024",
    description:
      "UPSC has announced the results for the Civil Services exam. View the result here.",
    date: "2024-11-10",
    link: "/results/upsc-civil-services-2024",
  },
];

const ResultsPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Results</h1>

      {/* Results List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resultsData.map((result) => (
          <Card key={result.id} className="shadow-lg rounded-lg bg-white p-4">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {result.title}
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">
                {result.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{result.description}</p>
            </CardContent>
            <div className="mt-4">
              <Link
                href={result.link}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                View Details
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
