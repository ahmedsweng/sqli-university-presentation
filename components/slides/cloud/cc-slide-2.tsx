import { Cloud } from "lucide-react"; // Changed Zap to Cloud

// Renamed function to CcSlide2 for consistency
export default function CcSlide2() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="max-w-3xl">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-blue-100 dark:bg-blue-900">
          {/* Changed Zap to Cloud, retained className */}
          <Cloud className="h-10 w-10 text-blue-600 dark:text-blue-300" />
        </div>
        {/* Changed main title */}
        <h1 className="text-5xl font-bold mb-6">Cloud Computing: The Foundation</h1>

        {/* Updated main content structure */}
        <div className="text-left text-lg text-gray-700 dark:text-gray-300 space-y-4">
          <p>
            <strong>Definition:</strong> Access shared computing resources (like servers, storage, apps) over the internet, on-demand. Easily scale up or down with minimal fuss.
          </p>
          <div>
            <p className="font-semibold">Key Characteristics:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Use it when you need it (Self-Service)</li>
              <li>Access from anywhere (Broad Network Access)</li>
              <li>Shared resources for many users (Resource Pooling)</li>
              <li>Scale up or down easily (Rapid Elasticity)</li>
              <li>Pay for what you use (Measured Service)</li>
            </ul>
          </div>
          <p>
            <strong>Common Platforms:</strong> Key Providers: AWS, Azure, GCP
          </p>
          <p>
            <strong>Real-life Example:</strong> Examples: Netflix streaming, Gmail, online photo storage.
          </p>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          {/* Changed footer text */}
          <p>Powerful, scalable, and accessible from anywhere.</p>
        </div>
      </div>
    </div>
  );
}
