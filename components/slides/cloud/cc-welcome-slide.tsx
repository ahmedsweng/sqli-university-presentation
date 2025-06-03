import { BookOpen, Cloud, GraduationCap, User } from "lucide-react"; // Changed Database to Cloud

export default function WelcomeSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="max-w-3xl">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-blue-100 dark:bg-blue-900">
          {/* Changed Database to Cloud, retained className */}
          <Cloud className="h-10 w-10 text-blue-600 dark:text-blue-300" />
        </div>
        {/* Changed title */}
        <h1 className="text-5xl font-bold mb-6">Cloud Computing</h1>
        {/* Changed subtitle */}
        <h2 className="text-2xl font-semibold mb-8 text-blue-600 dark:text-blue-400">
          Exploring Cloud, Edge, and Fog Computing: Definitions, tools, differences, and their hierarchy.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-blue-500 flex-shrink-0" />
            <div>
              {/* Changed "Course" to "Module" and value to "Cloud Computing" */}
              <p className="text-sm text-gray-500 dark:text-gray-400">Module</p>
              <p className="font-medium">Cloud Computing</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-blue-500 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Professor
              </p>
              {/* Changed Professor's name */}
              <p className="font-medium">Messaoud Babaghayou</p>
            </div>
          </div>

          {/* Removed Student and Year & Speciality sections */}
        </div>
      </div>
    </div>
  );
}
