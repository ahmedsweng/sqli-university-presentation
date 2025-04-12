import { Code } from "lucide-react";

export default function Slide1() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="max-w-3xl">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-blue-100 dark:bg-blue-900">
          <Code className="h-10 w-10 text-blue-600 dark:text-blue-300" />
        </div>
        <h1 className="text-5xl font-bold mb-6">Code Injection Attacks</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Understanding vulnerabilities that allow attackers to inject malicious
          code into applications
        </p>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          <p>A 10-minute guide to SQL injection attacks and prevention</p>
        </div>
      </div>
    </div>
  );
}
