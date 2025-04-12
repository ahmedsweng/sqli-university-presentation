import { CheckCircle } from "lucide-react";

export default function Slide10() {
  return (
    <div className="flex flex-col h-full p-6">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <CheckCircle className="h-8 w-8 text-blue-500" />
          Summary & Best Practices
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                What We&apos;ve Learned
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 dark:bg-green-900 p-1 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span>
                    SQL injection exploits the way SQL queries are constructed
                    with user input
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 dark:bg-green-900 p-1 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span>
                    Common attack techniques include authentication bypass,
                    UNION attacks, and batch queries
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 dark:bg-green-900 p-1 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span>
                    SQL injection can lead to unauthorized access, data theft,
                    data manipulation, and system compromise
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 dark:bg-green-900 p-1 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span>
                    Parameterized queries, ORMs, input validation, and least
                    privilege are effective prevention techniques
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded">
              <h3 className="font-semibold mb-2">OWASP Top 10</h3>
              <p className="text-sm">
                SQL Injection has consistently been in the OWASP Top 10 Web
                Application Security Risks. It&apos;s currently part of the
                &quot;Injection&quot; category, which is ranked #3 in the 2021
                list.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Security Checklist</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 dark:bg-green-900 p-1 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">
                      Use parameterized queries / prepared statements
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Never concatenate user input directly into SQL queries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 dark:bg-green-900 p-1 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">
                      Implement proper input validation
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Validate type, length, format, and range of all inputs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 dark:bg-green-900 p-1 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">
                      Use ORM libraries when possible
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      ORMs like Prisma, TypeORM, or Sequelize handle SQL
                      escaping automatically
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 dark:bg-green-900 p-1 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">
                      Apply the principle of least privilege
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Database users should have only the permissions they need
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 dark:bg-green-900 p-1 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">
                      Implement proper error handling
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Don&apos;t expose detailed error messages to users
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 rounded">
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul className="text-sm space-y-1">
                <li>OWASP SQL Injection Prevention Cheat Sheet</li>
                <li>OWASP Web Security Testing Guide</li>
                <li>PortSwigger SQL Injection Tutorial</li>
                <li>HackTricks SQL Injection Guide</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
