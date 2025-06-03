import { Milestone } from "lucide-react"; // Changed icon import

// Renamed function to CcGoodbyeSlide
export default function CcGoodbyeSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="max-w-3xl">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-green-100 dark:bg-green-900">
          {/* Replaced CheckCircle with Milestone, retained className */}
          <Milestone className="h-10 w-10 text-green-600 dark:text-green-300" />
        </div>
        <h1 className="text-5xl font-bold mb-6">Thank You!</h1> {/* Maintained h1 size from other slides */}

        {/* Updated message */}
        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8">
          Hope you found this overview of Cloud, Edge, and Fog Computing insightful!
        </p>

        {/* Added Questions? line */}
        <p className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mt-10 mb-12">
          Questions?
        </p>

        {/* Removed specific content sections (Further Reading, Code Examples, Contact, Quote)
            These could be added back with relevant information for Cloud Computing if desired.
        */}
      </div>
    </div>
  );
}
