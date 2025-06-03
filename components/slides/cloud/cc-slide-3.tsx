import { Cpu } from "lucide-react"; // Changed Cloud to Cpu

// Renamed function to CcSlide3 for consistency
export default function CcSlide3() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="max-w-3xl">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-blue-100 dark:bg-blue-900">
          {/* Changed Cloud to Cpu, retained className */}
          <Cpu className="h-10 w-10 text-blue-600 dark:text-blue-300" />
        </div>
        {/* Changed main title */}
        <h1 className="text-5xl font-bold mb-6">Edge Computing: Processing at the Source</h1>

        {/* Updated main content structure for Edge Computing */}
        <div className="text-left text-lg text-gray-700 dark:text-gray-300 space-y-4">
          <p>
            <strong>Definition:</strong> A distributed computing paradigm that brings computation and data storage closer to the sources of data – typically IoT devices or local edge servers.
          </p>
          <div>
            <p className="font-semibold">Key Characteristics:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Low latency</li>
              <li>Localized data processing</li>
              <li>Reduced network bandwidth requirements</li>
              <li>Enhanced privacy and security (for sensitive data)</li>
            </ul>
          </div>
          <p>
            <strong>Common Use Cases:</strong> Examples: IoT gateways, smart cameras, real-time analytics in industrial settings, autonomous vehicles.
          </p>
          <p>
            <strong>Real-life Example:</strong> Example: A smart traffic light system adjusting signals based on real-time local vehicle and pedestrian flow, or real-time patient vital sign monitoring and alerts in a hospital.
          </p>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          {/* Changed footer text */}
          <p>Speed and responsiveness, close to the action.</p>
        </div>
      </div>
    </div>
  );
}
