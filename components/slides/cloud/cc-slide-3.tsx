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
            <strong>Definition:</strong> Processing data locally, near where it's created (e.g., on a smart device or local server), instead of sending it far away to the cloud.
          </p>
          <div>
            <p className="font-semibold">Key Characteristics:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Faster response (Low Latency)</li>
              <li>Process data on-site (Local Processing)</li>
              <li>Less internet traffic (Reduced Bandwidth)</li>
              <li>Better data privacy (Local Data Handling)</li>
            </ul>
          </div>
          <p>
            <strong>Common Use Cases:</strong> Uses: Smart cameras, IoT devices, self-driving cars, factory robots.
          </p>
          <p>
            <strong>Real-life Example:</strong> Example: Smart traffic lights that react instantly to local traffic, or hospital monitors that quickly alert staff to patient changes.
          </p>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          {/* Changed footer text */}
          <p>Fast, local processing for immediate results.</p>
        </div>
      </div>
    </div>
  );
}
