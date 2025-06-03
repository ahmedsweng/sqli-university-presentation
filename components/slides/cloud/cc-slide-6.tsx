import { Network } from "lucide-react"; // Changed Layers to Network

// Renamed function to CcSlide6 for consistency
export default function CcSlide6() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="max-w-3xl"> {/* Using max-w-3xl as per the example structure for this slide */}
        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-blue-100 dark:bg-blue-900">
          {/* Changed Layers to Network, retained className */}
          <Network className="h-10 w-10 text-blue-600 dark:text-blue-300" />
        </div>
        {/* Changed main title */}
        <h1 className="text-5xl font-bold mb-6">The Computing Hierarchy</h1>

        {/* Updated main content structure for Hierarchy */}
        <div className="max-w-2xl mx-auto text-center"> {/* Adjusted width and centering for this section */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8"> {/* Increased bottom margin */}
            Data and processing flow in a layered approach, from local devices up to centralized clouds.
          </p>
          <div className="space-y-6 text-lg"> {/* Increased space between hierarchy items */}
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800">
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">1. Edge Layer</h3>
              <p className="text-gray-700 dark:text-gray-300">Closest to data sources (IoT devices, sensors). Handles immediate processing, data filtering, and real-time actions.</p>
              <p className="text-3xl mt-3 text-gray-400 dark:text-gray-500">⬇️</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800">
              <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">2. Fog Layer</h3>
              <p className="text-gray-700 dark:text-gray-300">Intermediate layer. Connects Edge to Cloud. Provides local analytics, data aggregation, and short-term storage. Reduces latency for regional tasks.</p>
              <p className="text-3xl mt-3 text-gray-400 dark:text-gray-500">⬇️</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800">
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-2">3. Cloud Layer</h3>
              <p className="text-gray-700 dark:text-gray-300">Centralized servers. Handles large-scale data storage, complex analytics, machine learning, and global service management.</p>
            </div>
          </div>
          <p className="text-md text-gray-500 dark:text-gray-400 mt-10"> {/* Adjusted text size and margin */}
            This model allows for optimized performance, scalability, and efficiency by processing data where it makes the most sense.
          </p>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          {/* Changed footer text */}
          <p>Layered architecture for optimal processing.</p>
        </div>
      </div>
    </div>
  );
}
