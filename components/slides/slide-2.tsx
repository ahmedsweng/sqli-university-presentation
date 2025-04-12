import { Code, Database, Terminal } from "lucide-react";

export default function Slide2() {
  return (
    <div className="flex flex-col h-full p-6">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Code className="h-8 w-8 text-blue-500" />
          Code Injection & SQL Injection
        </h2>

        <div className="space-y-8">
          {/* Code Injection Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Terminal className="h-5 w-5 text-blue-500" />
              What is Code Injection?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p>
                  Code injection is a vulnerability where an attacker inserts
                  malicious code into an application through untrusted inputs.
                </p>
                <p>
                  When the application processes this input without proper
                  validation or sanitization, the injected code executes with
                  the application's privileges.
                </p>

                <div className="mt-4">
                  <h4 className="font-medium">
                    Common Types of Code Injection:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>SQL Injection</li>
                    <li>Cross-Site Scripting (XSS)</li>
                    <li>Command Injection</li>
                    <li>LDAP Injection</li>
                    <li>XML Injection</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-hidden">
                <div className="text-gray-500 dark:text-gray-400">
                  // Generic code injection example
                </div>
                <div className="mt-2">
                  <span className="text-purple-600 dark:text-purple-400">
                    function
                  </span>{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    processUserInput
                  </span>
                  (userInput) {"{"}
                </div>
                <div className="mt-1 ml-4">
                  <span className="text-green-600 dark:text-green-400">
                    // Dangerous: directly using user input
                  </span>
                </div>
                <div className="ml-4">
                  <span className="text-purple-600 dark:text-purple-400">
                    eval
                  </span>
                  (userInput);
                </div>
                <div>{"}"}</div>
                <div className="mt-3 text-gray-500 dark:text-gray-400">
                  // Attacker input:
                </div>
                <div className="mt-1 text-red-500 dark:text-red-400">
                  deleteAllFiles(); // Malicious code
                </div>
              </div>
            </div>
          </div>

          {/* SQL Injection Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Database className="h-5 w-5 text-blue-500" />
              SQL Injection Specifically
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p>
                  SQL Injection is a code injection technique where an attacker
                  inserts malicious SQL statements into input fields that are
                  later executed by the database.
                </p>
                <p>
                  It occurs when user input is incorrectly filtered and directly
                  included in SQL queries.
                </p>

                <div className="mt-3">
                  <h4 className="font-medium">The Mechanics:</h4>
                  <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li>
                      User input is directly concatenated into SQL queries
                    </li>
                    <li>
                      Special characters in the input change the query structure
                    </li>
                    <li>
                      The modified query executes with database privileges
                    </li>
                    <li>
                      The attacker gains unauthorized access or extracts data
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-hidden">
                  <div className="text-gray-500 dark:text-gray-400">
                    // Vulnerable code example
                  </div>
                  <div className="mt-2">
                    <span className="text-purple-600 dark:text-purple-400">
                      const
                    </span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      query
                    </span>{" "}
                    ={" "}
                    <span className="text-green-600 dark:text-green-400">
                      {
                        "`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`"
                      }
                    </span>
                    ;
                  </div>
                  <div className="mt-4 text-gray-500 dark:text-gray-400">
                    // What if username is:
                  </div>
                  <div className="mt-2 text-red-500 dark:text-red-400">
                    admin&apos; --
                  </div>
                  <div className="mt-4 text-gray-500 dark:text-gray-400">
                    // The query becomes:
                  </div>
                  <div className="mt-2">
                    <span className="text-green-600 dark:text-green-400">
                      SELECT * FROM users WHERE username = &apos;admin&apos;
                      --&apos; AND password = &apos;anything&apos;
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded">
                  <div className="font-medium">Normal Flow vs. Attack</div>
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Normal:</span> Username and
                    password must match
                  </div>
                  <div className="mt-1 text-sm">
                    <span className="font-medium">Attack:</span> The -- comments
                    out the password check
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
