import { Zap } from "lucide-react"; // Changed Code to Zap

export default function Slide1() { // It's conventional to rename the function to match the file name, e.g., CcSlide1, but the subtask doesn't explicitly state this, so I'll keep it as Slide1 for now.
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="max-w-3xl">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-blue-100 dark:bg-blue-900">
          {/* Changed Code to Zap, retained className */}
          <Zap className="h-10 w-10 text-blue-600 dark:text-blue-300" />
        </div>
        {/* Changed main title */}
        <h1 className="text-5xl font-bold mb-6">The Modern Computing Landscape</h1>
        {/* Changed main paragraph */}
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          An introduction to Cloud, Edge, and Fog computing. We'll explore their definitions, key tools, the distinctions between them, and their operational hierarchy in today's tech ecosystem.
        </p>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          {/* Changed footer text */}
          <p>Understanding the building blocks of modern distributed systems.</p>
        </div>
      </div>
    </div>
  );
}
