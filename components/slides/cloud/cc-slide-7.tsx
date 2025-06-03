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
            See how Edge, Fog, and Cloud work together in a Smart Factory.
          </p>
          <div className="space-y-6 text-left"> {/* Increased space between sections */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">On the Factory Floor (Edge):</h3>
              <ul className="list-disc list-inside text-base space-y-1 ml-4"> {/* Indented list */}
                <li>Sensors on machines gather data (temp, vibrations, etc.).</li>
                <li>Quick local decisions: e.g., stop a machine if something's wrong.</li>
                <li>Filters important data before sending to Fog.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">Factory Network (Fog):</h3>
              <ul className="list-disc list-inside text-base space-y-1 ml-4"> {/* Indented list */}
                <li>Gathers data from many machines.</li>
                <li>Analyzes local data: e.g., helps one production line run better.</li>
                <li>Short-term data storage for faster factory responses.</li>
                <li>Sends summaries to the Cloud.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">Main Company Systems (Cloud):</h3>
              <ul className="list-disc list-inside text-base space-y-1 ml-4"> {/* Indented list */}
                <li>Gets data from all factories.</li>
                <li>Big analysis, predicts when machines need fixing.</li>
                <li>Shows company-wide reports on how well things are running.</li>
                <li>Manages updates for Edge and Fog systems.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          {/* Changed footer text */}
          <p>Teamwork from factory floor to main office.</p>
        </div>
      </div>
    </div>
  );
}
