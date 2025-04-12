import { BookOpen, CheckCircle, Github, Mail } from "lucide-react";

export default function GoodbyeSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="max-w-3xl">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-green-100 dark:bg-green-900">
          <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-300" />
        </div>
        <h1 className="text-4xl font-bold mb-6">Thank You!</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Remember: Always validate user input and use parameterized queries
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-blue-500 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Further Reading
              </p>
              <p className="font-medium">
                OWASP SQL Injection Prevention Cheat Sheet
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Github className="h-5 w-5 text-blue-500 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Code Examples
              </p>
              <p className="font-medium">
                github.com/ahmedsweng/sqli-university-presentation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 md:col-span-2">
            <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Contact
              </p>
              <p className="font-medium">raoufnaoum15@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-10 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm">
            "The only truly secure system is one that is powered off, cast in a
            block of concrete and sealed in a lead-lined room with armed
            guards."
          </p>
          <p className="text-sm mt-2 font-medium">— Gene Spafford</p>
        </div>
      </div>
    </div>
  );
}
