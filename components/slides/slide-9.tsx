import { Lock } from "lucide-react";

export default function Slide9() {
  return (
    <div className="flex flex-col h-full p-6">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Lock className="h-8 w-8 text-blue-500" />
          Additional Prevention Techniques
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">1. Input Validation</h3>
            <div className="space-y-4">
              <p>
                Validate and sanitize all user inputs before processing them.
              </p>
              <div className="font-mono text-sm p-3 bg-gray-100 dark:bg-gray-800 rounded">
                <div className="text-gray-500 dark:text-gray-400">
                  // Validate input type and format
                </div>
                <div className="mt-2">
                  <span className="text-purple-600 dark:text-purple-400">
                    function
                  </span>{" "}
                  <span className="text-yellow-600 dark:text-yellow-400">
                    isValidAccountId
                  </span>
                  (id) {"{"}
                </div>
                <div className="ml-4">
                  <span className="text-purple-600 dark:text-purple-400">
                    return
                  </span>{" "}
                  /^\d{4}$/.
                  <span className="text-yellow-600 dark:text-yellow-400">
                    test
                  </span>
                  (id);
                </div>
                <div>{"}"}</div>
                <div className="mt-2">
                  <span className="text-purple-600 dark:text-purple-400">
                    if
                  </span>{" "}
                  (!
                  <span className="text-yellow-600 dark:text-yellow-400">
                    isValidAccountId
                  </span>
                  (accountId)) {"{"}
                </div>
                <div className="ml-4">
                  <span className="text-purple-600 dark:text-purple-400">
                    throw new
                  </span>{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Error
                  </span>
                  (&apos;Invalid account ID&apos;);
                </div>
                <div>{"}"}</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              2. Least Privilege
            </h3>
            <div className="space-y-4">
              <p>Use database accounts with minimal necessary permissions.</p>
              <div className="font-mono text-sm p-3 bg-gray-100 dark:bg-gray-800 rounded">
                <div className="text-gray-500 dark:text-gray-400">
                  // SQL commands to create limited user
                </div>
                <div className="mt-2">
                  <span className="text-green-600 dark:text-green-400">
                    CREATE USER &apos;app_user&apos;@&apos;localhost&apos;
                    IDENTIFIED BY &apos;password&apos;;
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-green-600 dark:text-green-400">
                    GRANT SELECT, UPDATE ON banking.accounts TO
                    &apos;app_user&apos;@&apos;localhost&apos;;
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-green-600 dark:text-green-400">
                    DENY DROP, CREATE, ALTER ON banking.* TO
                    &apos;app_user&apos;@&apos;localhost&apos;;
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">3. ORM Libraries</h3>
            <div className="space-y-4">
              <p>
                Use Object-Relational Mapping (ORM) libraries that handle SQL
                injection protection automatically.
              </p>
              <div className="font-mono text-sm p-3 bg-gray-100 dark:bg-gray-800 rounded">
                <div className="text-gray-500 dark:text-gray-400">
                  // Using Prisma ORM
                </div>
                <div className="mt-2">
                  <span className="text-purple-600 dark:text-purple-400">
                    const
                  </span>{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    updatedAccount
                  </span>{" "}
                  ={" "}
                  <span className="text-purple-600 dark:text-purple-400">
                    await
                  </span>{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    prisma
                  </span>
                  .
                  <span className="text-yellow-600 dark:text-yellow-400">
                    account
                  </span>
                  .
                  <span className="text-yellow-600 dark:text-yellow-400">
                    update
                  </span>
                  ({"{"}
                </div>
                <div className="ml-4">where: {"{"}</div>
                <div className="ml-8">id: accountId,</div>
                <div className="ml-4">{"}"},</div>
                <div className="ml-4">data: {"{"}</div>
                <div className="ml-8">balance: newBalance,</div>
                <div className="ml-4">{"}"}</div>
                <div>{"}"});</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              4. Error Handling
            </h3>
            <div className="space-y-4">
              <p>
                Implement proper error handling that doesn&apos;t expose
                sensitive information.
              </p>
              <div className="font-mono text-sm p-3 bg-gray-100 dark:bg-gray-800 rounded">
                <div className="text-gray-500 dark:text-gray-400">
                  // Bad error handling
                </div>
                <div className="mt-1 text-red-500 dark:text-red-400">
                  res.status(500).json({"{"} error:{" "}
                  {"`Database error: ${err.message}`"} {"}"});
                </div>
                <div className="mt-3 text-gray-500 dark:text-gray-400">
                  // Good error handling
                </div>
                <div className="mt-1 text-green-600 dark:text-green-400">
                  {"logger.error(`Database error: ${err.message}`);"}
                </div>
                <div className="mt-1 text-green-600 dark:text-green-400">
                  res.status(500).json({"{"} error: 'An internal error occurred'{" "}
                  {"}"});
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded">
          <p className="text-sm">
            <strong>Defense in Depth:</strong> Implement multiple layers of
            protection. Even if one security measure fails, others will still
            protect your application.
          </p>
        </div>
      </div>
    </div>
  );
}
