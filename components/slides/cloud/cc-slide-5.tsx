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
        <h1 className="text-5xl font-bold mb-10">Key Differences: Cloud, Edge, Fog</h1>

        {/* New Table Structure */}
        <div className="overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-collapse border border-gray-200 dark:border-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3 border border-gray-200 dark:border-gray-700">Feature</th>
                <th scope="col" className="px-4 py-3 border border-gray-200 dark:border-gray-700">Cloud Computing</th>
                <th scope="col" className="px-4 py-3 border border-gray-200 dark:border-gray-700">Edge Computing</th>
                <th scope="col" className="px-4 py-3 border border-gray-200 dark:border-gray-700">Fog Computing</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-gray-200 dark:border-gray-700">Processing Location</th>
                <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">Big data centers</td>
                <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">On or near device</td>
                <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">Local network / regional</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-gray-200 dark:border-gray-700">Speed (Latency)</th>
                <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">Slower (higher)</td>
                <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">Fastest (lowest)</td>
                <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">Fast (low to moderate)</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-gray-200 dark:border-gray-700">Internet Use (Bandwidth)</th>
                <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">High demand</td>
                <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">Low demand on core network</td>
                <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">Moderate, aggregates edge</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-gray-200 dark:border-gray-700">Growth (Scalability)</th>
                <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">Huge, very flexible</td>
                <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">Spread out, local</td>
                <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">Spread out, regional</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-gray-200 dark:border-gray-700">Common Uses</th>
                <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">Netflix, Gmail, photo storage</td>
                <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">Smart cameras, IoT, self-driving cars</td>
                <td className="px-4 py-3 border border-gray-200 dark:border-gray-700">Smart cities, connected cars</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          {/* Changed footer text */}
          <p>Comparing Cloud, Edge, and Fog side-by-side.</p>
        </div>
      </div>
    </div>
  );
}
