import { GitCompareArrows } from "lucide-react"; // Changed Layers to GitCompareArrows

// Renamed function to CcSlide5 for consistency
export default function CcSlide5() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      {/* Adjusted max-width for wider content if necessary, or keep as is if the 3-column layout fits well in max-w-3xl.
          For this kind of comparison, a wider layout might be better, e.g., max-w-5xl or max-w-7xl.
          However, sticking to existing max-w-3xl for now unless it looks too cramped.
      */}
      <div className="max-w-5xl"> {/* Increased max-width to better suit 3-column layout */}
        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-blue-100 dark:bg-blue-900">
          {/* Changed Layers to GitCompareArrows, retained className */}
          <GitCompareArrows className="h-10 w-10 text-blue-600 dark:text-blue-300" />
        </div>
        {/* Changed main title */}
        <h1 className="text-5xl font-bold mb-10">Key Differences: Cloud, Edge, Fog</h1> {/* Added more bottom margin */}

        {/* Updated main content structure for Comparison */}
        <div className="text-left grid md:grid-cols-3 gap-x-6 gap-y-8 text-gray-700 dark:text-gray-300">
          {/* Column 1: Cloud Computing */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Cloud Computing</h3>
            <ul className="list-disc list-inside text-base space-y-1">
              <li><strong>Processing:</strong> Centralized data centers</li>
              <li><strong>Latency:</strong> Higher</li>
              <li><strong>Bandwidth:</strong> High demand</li>
              <li><strong>Scalability:</strong> Massive, elastic</li>
              <li><strong>Use Cases:</strong> Big data, complex analytics, web hosting, enterprise applications</li>
            </ul>
          </div>

          {/* Column 2: Edge Computing */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold mb-3 text-green-600 dark:text-green-400">Edge Computing</h3>
            <ul className="list-disc list-inside text-base space-y-1">
              <li><strong>Processing:</strong> At or near device/sensor</li>
              <li><strong>Latency:</strong> Lowest</li>
              <li><strong>Bandwidth:</strong> Low demand on core network</li>
              <li><strong>Scalability:</strong> Distributed, localized</li>
              <li><strong>Use Cases:</strong> IoT, real-time monitoring, autonomous systems, AR/VR</li>
            </ul>
          </div>

          {/* Column 3: Fog Computing */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400">Fog Computing</h3>
            <ul className="list-disc list-inside text-base space-y-1">
              <li><strong>Processing:</strong> Network edge, local networks</li>
              <li><strong>Latency:</strong> Low to moderate</li>
              <li><strong>Bandwidth:</strong> Moderate, aggregates edge data</li>
              <li><strong>Scalability:</strong> Distributed, regional</li>
              <li><strong>Use Cases:</strong> Smart cities, connected vehicles, large IIoT, content delivery networks (CDNs)</li>
            </ul>
          </div>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          {/* Changed footer text */}
          <p>Understanding their distinct roles and advantages.</p>
        </div>
      </div>
    </div>
  );
}
