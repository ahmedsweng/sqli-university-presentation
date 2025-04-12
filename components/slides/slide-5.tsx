"use client";

import type React from "react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";

export default function Slide5() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [sqlQuery, setSqlQuery] = useState(
    "SELECT * FROM users WHERE username = '[username]' AND password = '[password]'"
  );

  useEffect(() => {
    // Update the SQL query in real-time as user types
    if (username.includes("'") || username.includes("--")) {
      // Show the SQL injection effect
      setSqlQuery(
        `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
      );
    } else {
      // Show normal query with placeholders
      setSqlQuery(
        `SELECT * FROM users WHERE username = '${
          username || "[username]"
        }' AND password = '${password || "[password]"}'`
      );
    }
  }, [username, password]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate SQL injection vulnerability
    if (username === "admin' --" || username.includes("' OR '1'='1")) {
      setSuccess(true);
      setResult(
        "SQL Injection successful! Authentication bypassed. Admin access granted."
      );
    } else if (username === "admin" && password === "password123") {
      setSuccess(true);
      setResult("Normal login successful.");
    } else {
      setSuccess(false);
      setResult("Login failed. Invalid credentials.");
    }
  };

  return (
    <div className="flex flex-col h-full p-6">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Play className="h-8 w-8 text-blue-500" />
          Live Demo: Authentication Bypass
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>

              {result && (
                <Alert
                  className={`mt-4 ${
                    success
                      ? "bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                      : "bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                  }`}
                >
                  <AlertDescription>{result}</AlertDescription>
                </Alert>
              )}
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 rounded">
              <p className="text-sm font-medium">
                Try these SQL injection payloads:
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">
                    admin&apos; --
                  </code>
                </li>
                <li>
                  <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">
                    &apos; OR &apos;1&apos;=&apos;1
                  </code>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">How It Works</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Vulnerable Code:</h4>
                <div className="mt-2 font-mono text-sm p-3 bg-gray-100 dark:bg-gray-800 rounded">
                  <div className="text-purple-600 dark:text-purple-400">
                    const
                  </div>
                  <div className="ml-2">
                    query ={" "}
                    <span className="text-green-600 dark:text-green-400">
                      {
                        "`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`"
                      }
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium">Live Query:</h4>
                <div className="mt-2 font-mono text-sm p-3 bg-gray-100 dark:bg-gray-800 rounded overflow-x-auto">
                  <div>
                    {username.includes("'") || username.includes("--") ? (
                      <span className="text-red-500 dark:text-red-400">
                        {sqlQuery}
                      </span>
                    ) : (
                      <span className="text-green-600 dark:text-green-400">
                        {sqlQuery}
                      </span>
                    )}
                  </div>
                  {username.includes("--") && (
                    <div className="mt-2 text-gray-500 dark:text-gray-400">
                      // Everything after -- is treated as a comment and ignored
                    </div>
                  )}
                  {username.includes("' OR '1'='1") && (
                    <div className="mt-2 text-gray-500 dark:text-gray-400">
                      // The OR condition makes the WHERE clause always true
                    </div>
                  )}
                </div>
              </div>

              {success && username.includes("'") && (
                <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
                  <h4 className="font-medium text-red-700 dark:text-red-400">
                    Database Response:
                  </h4>
                  <div className="mt-2 font-mono text-sm">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="font-bold">id</div>
                      <div className="font-bold">username</div>
                      <div className="font-bold">role</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-1">
                      <div>1</div>
                      <div>admin</div>
                      <div>administrator</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
