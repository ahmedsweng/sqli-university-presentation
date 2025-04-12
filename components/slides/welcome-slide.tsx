import { BookOpen, Database, GraduationCap, User } from "lucide-react";

export default function WelcomeSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="max-w-3xl">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-blue-100 dark:bg-blue-900">
          <Database className="h-10 w-10 text-blue-600 dark:text-blue-300" />
        </div>
        <h1 className="text-5xl font-bold mb-6">SQL Injection</h1>
        <h2 className="text-2xl font-semibold mb-8 text-blue-600 dark:text-blue-400">
          How it Works and How to Prevent it
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-blue-500 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Course</p>
              <p className="font-medium">Advanced Databases</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-blue-500 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Professor
              </p>
              <p className="font-medium">Mohamed El Habib MAICHA</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-blue-500 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Student
              </p>
              <p className="font-medium">Naoum Ahmed Abderraouf</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-5 w-5 flex items-center justify-center text-blue-500 flex-shrink-0 font-bold">
              3
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Year & Speciality
              </p>
              <p className="font-medium">3rd Year Engineer - Cyber Security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
