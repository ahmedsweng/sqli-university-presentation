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
            <strong>Definition:</strong> A model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, services) that can be rapidly provisioned and released with minimal management effort or service provider interaction.
          </p>
          <div>
            <p className="font-semibold">Key Characteristics:</p>
            <ul className="list-disc list-inside ml-4">
              <li>On-demand self-service</li>
              <li>Broad network access</li>
              <li>Resource pooling</li>
              <li>Rapid elasticity</li>
              <li>Measured service</li>
            </ul>
          </div>
          <p>
            <strong>Common Platforms:</strong> Examples: Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP)
          </p>
          <p>
            <strong>Real-life Example:</strong> Example: Streaming services like Netflix, or email services like Gmail.
          </p>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          {/* Changed footer text */}
          <p>Centralized power and scalability.</p>
        </div>
      </div>
    </div>
  );
}
