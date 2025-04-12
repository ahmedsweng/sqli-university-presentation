import { Shield } from "lucide-react";

export default function Slide8() {
  return (
    <div className="flex flex-col h-full p-6">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Shield className="h-8 w-8 text-blue-500" />
          Prevention: Parameterized Queries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              What Are Parameterized Queries?
            </h3>
            <p>
              Parameterized queries (prepared statements) separate SQL code from
              data, preventing user input from changing the query structure.
            </p>

            <div className="p-4 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 rounded">
              <p className="text-sm">
                <strong>Key benefit:</strong> The database distinguishes between
                code and data, regardless of what the user input contains.
              </p>
            </div>

            <h3 className="text-xl font-semibold mt-6">How They Work</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>SQL query template is defined with placeholders</li>
              <li>Query template is sent to the database and prepared</li>
              <li>Values are sent separately and bound to placeholders</li>
              <li>Database executes the query with the provided values</li>
            </ol>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Vulnerable Code</h3>
              <div className="mt-2 font-mono text-sm p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800">
                <div className="text-gray-500 dark:text-gray-400">
                  // DON&apos;T DO THIS
                </div>
                <div className="mt-2">
                  <span className="text-purple-600 dark:text-purple-400">
                    const
                  </span>{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    username
                  </span>{" "}
                  ={" "}
                  <span className="text-green-600 dark:text-green-400">
                    &apos;user_input&apos;
                  </span>
                  ;
                </div>
                <div className="mt-1">
                  <span className="text-purple-600 dark:text-purple-400">
                    const
                  </span>{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    password
                  </span>{" "}
                  ={" "}
                  <span className="text-green-600 dark:text-green-400">
                    &apos;user_input&apos;
                  </span>
                  ;
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
                <div className="mt-1">
                  <span className="text-blue-600 dark:text-blue-400">db</span>.
                  <span className="text-yellow-600 dark:text-yellow-400">
                    query
                  </span>
                  (query);
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Secure Code: Node.js + MySQL
              </h3>
              <div className="mt-2 font-mono text-sm p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
                <div className="text-gray-500 dark:text-gray-400">
                  // DO THIS INSTEAD
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
                    &apos;SELECT * FROM users WHERE username = ? AND password =
                    ?&apos;
                  </span>
                  ;
                </div>
                <div className="mt-1">
                  <span className="text-blue-600 dark:text-blue-400">db</span>.
                  <span className="text-yellow-600 dark:text-yellow-400">
                    execute
                  </span>
                  (query, [username, password]);
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Secure Code: Node.js + Prisma ORM
              </h3>
              <div className="mt-2 font-mono text-sm p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
                <div className="text-gray-500 dark:text-gray-400">
                  // EVEN BETTER: USE AN ORM
                </div>
                <div className="mt-2">
                  <span className="text-purple-600 dark:text-purple-400">
                    const
                  </span>{" "}
                  <span className="text-blue-600 dark:text-blue-400">user</span>{" "}
                  ={" "}
                  <span className="text-purple-600 dark:text-purple-400">
                    await
                  </span>{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    prisma
                  </span>
                  .
                  <span className="text-yellow-600 dark:text-yellow-400">
                    user
                  </span>
                  .
                  <span className="text-yellow-600 dark:text-yellow-400">
                    findFirst
                  </span>
                  ({"{"}
                </div>
                <div className="ml-4">where: {"{"}</div>
                <div className="ml-8">username,</div>
                <div className="ml-8">password,</div>
                <div className="ml-4">{"}"}</div>
                <div>{"}"});</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
