import { Terminal } from "lucide-react";

export default function Slide3() {
  return (
    <div className="flex flex-col h-full p-6">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Terminal className="h-8 w-8 text-blue-500" />
          How SQL Injection Works
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">The Mechanics</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>User input is directly concatenated into SQL queries</li>
                <li>
                  Special characters in the input change the query structure
                </li>
                <li>The modified query executes with database privileges</li>
                <li>The attacker gains unauthorized access or extracts data</li>
              </ol>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-4">
                Normal Flow vs. Attack
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Normal Login:
                  </div>
                  <div className="mt-1 p-2 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                    <div className="font-mono text-sm">
                      <span className="text-blue-600 dark:text-blue-400">
                        username:
                      </span>{" "}
                      alice
                      <br />
                      <span className="text-blue-600 dark:text-blue-400">
                        password:
                      </span>{" "}
                      secret123
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    SQL Injection Attack:
                  </div>
                  <div className="mt-1 p-2 bg-white dark:bg-gray-900 rounded border border-red-200 dark:border-red-900">
                    <div className="font-mono text-sm">
                      <span className="text-blue-600 dark:text-blue-400">
                        username:
                      </span>{" "}
                      <span className="text-red-500">admin&apos; --</span>
                      <br />
                      <span className="text-blue-600 dark:text-blue-400">
                        password:
                      </span>{" "}
                      anything
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded">
            <h3 className="font-semibold mb-2">The Resulting Query</h3>
            <div className="font-mono text-sm">
              <div>
                <span className="text-gray-500 dark:text-gray-400">
                  // Original intention:
                </span>
                <br />
                SELECT * FROM users WHERE username = &apos;admin&apos; AND
                password = &apos;secret123&apos;
              </div>
              <div className="mt-2">
                <span className="text-gray-500 dark:text-gray-400">
                  // With SQL injection:
                </span>
                <br />
                SELECT * FROM users WHERE username = &apos;admin&apos;{" "}
                <span className="text-red-500">--</span> AND password =
                &apos;anything&apos;
              </div>
              <div className="mt-2 text-gray-500 dark:text-gray-400">
                // The -- comments out the rest of the query, bypassing the
                password check
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
