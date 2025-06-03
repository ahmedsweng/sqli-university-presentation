import { Factory } from "lucide-react"; // Changed Layers to Factory

// Renamed function to CcSlide7 for consistency
export default function CcSlide7() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="max-w-4xl"> {/* Slightly increased max-width for better readability of list items */}
        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-blue-100 dark:bg-blue-900">
          {/* Changed Layers to Factory, retained className */}
          <Factory className="h-10 w-10 text-blue-600 dark:text-blue-300" />
        </div>
        {/* Changed main title */}
        <h1 className="text-5xl font-bold mb-6">Real-World Synergy: Smart Factory</h1>

        {/* Updated main content structure for Smart Factory Scenario */}
        <div className="text-gray-700 dark:text-gray-300">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10"> {/* Increased bottom margin */}
            Illustrating how Edge, Fog, and Cloud computing collaborate in an advanced manufacturing environment.
          </p>
          <div className="space-y-6 text-left"> {/* Increased space between sections */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">🏭 Edge Computing (On the Factory Floor)</h3>
              <ul className="list-disc list-inside text-base space-y-1 ml-4"> {/* Indented list */}
                <li>Sensors on machinery collect real-time operational data (temperature, vibration, output).</li>
                <li>Local processors make immediate decisions: e.g., halt a machine if a critical anomaly is detected.</li>
                <li>Data is filtered and prioritized before being sent to the Fog layer.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">☁️ Fog Computing (Factory-Level Network)</h3>
              <ul className="list-disc list-inside text-base space-y-1 ml-4"> {/* Indented list */}
                <li>Fog nodes aggregate data from multiple machines or production lines.</li>
                <li>Perform localized analytics: e.g., optimize a specific production line's efficiency in near real-time.</li>
                <li>Provide short-term data storage and faster response for factory-wide systems.</li>
                <li>Relay summarized and relevant data to the Cloud.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">🌐 Cloud Computing (Corporate Level)</h3>
              <ul className="list-disc list-inside text-base space-y-1 ml-4"> {/* Indented list */}
                <li>Receives aggregated data from multiple smart factories.</li>
                <li>Performs long-term data analysis, runs machine learning models for predictive maintenance.</li>
                <li>Hosts business intelligence dashboards for overall equipment effectiveness (OEE).</li>
                <li>Manages software updates and configurations for Edge and Fog devices.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          {/* Changed footer text */}
          <p>Integrated intelligence from shop floor to enterprise.</p>
        </div>
      </div>
    </div>
  );
}
