import { Layers } from "lucide-react"; // Changed Cpu to Layers

// Renamed function to CcSlide4 for consistency
export default function CcSlide4() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="max-w-3xl">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-blue-100 dark:bg-blue-900">
          {/* Changed Cpu to Layers, retained className */}
          <Layers className="h-10 w-10 text-blue-600 dark:text-blue-300" />
        </div>
        {/* Changed main title */}
        <h1 className="text-5xl font-bold mb-6">Fog Computing: Bridging the Gap</h1>

        {/* Updated main content structure for Fog Computing */}
        <div className="text-left text-lg text-gray-700 dark:text-gray-300 space-y-4">
          <p>
            <strong>Definition:</strong> A middle layer between local Edge devices and the central Cloud. It handles tasks that are too big for Edge but need quicker response than the Cloud.
          </p>
          <div>
            <p className="font-semibold">Key Characteristics:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Connects Edge and Cloud (Intermediate Layer)</li>
              <li>Manages data from many Edge devices (Distributed)</li>
              <li>Faster than Cloud for local tasks (Improved Latency)</li>
              <li>Supports services across a region (Geographic Spread)</li>
            </ul>
          </div>
          <p>
            <strong>Common Use Cases:</strong> Uses: Smart cities (e.g., traffic flow, utility grids), connected cars, large industrial sites.
          </p>
          <p>
            <strong>Real-life Example:</strong> Example: A smart city using fog nodes to manage local traffic systems and energy grids, sending summaries to the main cloud.
          </p>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          {/* Changed footer text */}
          <p>The smart link between local Edge and central Cloud.</p>
        </div>
      </div>
    </div>
  );
}
