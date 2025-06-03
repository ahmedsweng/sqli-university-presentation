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
            <strong>Definition:</strong> A decentralized computing infrastructure where data, compute, storage, and applications are distributed in the most logical, efficient place between the data source (edge) and the cloud. It acts as an intermediate layer.
          </p>
          <div>
            <p className="font-semibold">Key Characteristics:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Extends cloud capabilities closer to the edge</li>
              <li>Supports geographically distributed services</li>
              <li>Offers better latency than cloud for nearby devices</li>
              <li>Hierarchical and distributed nature</li>
            </ul>
          </div>
          <p>
            <strong>Common Use Cases:</strong> Examples: Smart city applications (e.g., utility management), connected vehicles, large-scale sensor networks.
          </p>
          <p>
            <strong>Real-life Example:</strong> Example: A city-wide smart grid using fog nodes to manage energy distribution and fault detection for local neighborhoods, reporting aggregated data to the central cloud.
          </p>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          {/* Changed footer text */}
          <p>Connecting the edge to the cloud, intelligently.</p>
        </div>
      </div>
    </div>
  );
}
