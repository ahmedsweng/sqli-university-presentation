"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Code } from "lucide-react";
import { useState } from "react";

export default function Slide4() {
  const [userInput, setUserInput] = useState("");
  const [isVulnerable, setIsVulnerable] = useState(true);
  const [previewContent, setPreviewContent] = useState<string>("");
  const [htmlResult, setHtmlResult] = useState<string>("");

  // Simulated user data that could be exposed
  const sensitiveData = {
    users: [
      {
        id: 1,
        username: "admin",
        password: "admin123",
        email: "admin@example.com",
        creditCard: "4111-1111-1111-1111",
      },
      {
        id: 2,
        username: "john",
        password: "john456",
        email: "john@example.com",
        creditCard: "5500-0000-0000-0004",
      },
      {
        id: 3,
        username: "alice",
        password: "alice789",
        email: "alice@example.com",
        creditCard: "3400-0000-0000-009",
      },
    ],
    settings: {
      apiKey: "sk_live_51NzKh3JMu0V",
      databaseUrl: "mongodb://admin:secretpass@db.example.com:27017/production",
    },
  };

  const handleXssPreview = () => {
    if (isVulnerable) {
      try {
        // XSS vulnerability - directly inserting HTML with potential script execution
        setPreviewContent(userInput);
      } catch (error) {
        setPreviewContent("Error rendering content");
      }
    } else {
      // Safe implementation - escape HTML
      const safeContent = userInput
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

      setPreviewContent(safeContent);
    }
  };

  const handleHtmlInjection = () => {
    // Simulate a comment system that renders user input
    const commentTemplate = `
      <div class="comment-container">
        <div class="comment-header">
          <span class="comment-author">User123</span>
          <span class="comment-date">Just now</span>
        </div>
        <div class="comment-body">
          ${
            isVulnerable
              ? userInput
              : userInput.replace(/</g, "&lt;").replace(/>/g, "&gt;")
          }
        </div>
      </div>
    `;
    setHtmlResult(commentTemplate);
  };

  return (
    <div className="flex flex-col h-full p-6">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <AlertTriangle className="h-8 w-8 text-blue-500" />
          Injection Techniques
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column - Brief explanation */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Common SQL Injection Types
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded text-xs font-medium">
                  1
                </span>
                <span>
                  <strong>Authentication Bypass:</strong>{" "}
                  <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 rounded">
                    admin' --
                  </code>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded text-xs font-medium">
                  2
                </span>
                <span>
                  <strong>UNION Attacks:</strong>{" "}
                  <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 rounded">
                    ' UNION SELECT * FROM users --
                  </code>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded text-xs font-medium">
                  3
                </span>
                <span>
                  <strong>Batch Queries:</strong>{" "}
                  <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 rounded">
                    '; DROP TABLE users; --
                  </code>
                </span>
              </li>
            </ul>

            <div className="mt-6 p-3 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 rounded">
              <p className="text-sm">
                <strong>Try these HTML injection payloads:</strong>
              </p>
              <ul className="mt-2 space-y-1 text-xs">
                <li>
                  <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">
                    {"<img src=x onerror='alert(\"XSS Attack!\")'>"}
                  </code>
                </li>
                <li>
                  <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">
                    {"<script>document.body.style.background='red'</script>"}
                  </code>
                </li>
                <li>
                  <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">
                    {
                      "<div onclick='alert(document.cookie)' style='cursor:pointer;color:blue;text-decoration:underline'>Click me</div>"
                    }
                  </code>
                </li>
                <li>
                  <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">
                    {
                      '<img src=x onerror=\'document.getElementById("sensitive").style.display="block"\'>'
                    }
                  </code>
                </li>
                <li>
                  <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">
                    {"<style>body { filter: invert(1); }</style>"}
                  </code>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - HTML Injection Demo */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Code className="h-5 w-5 text-blue-500" />
              Live Demo: HTML Injection
            </h3>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="content">Enter content:</Label>
                  <Input
                    id="content"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Enter HTML content"
                  />
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="checkbox"
                      id="vulnerable"
                      checked={isVulnerable}
                      onChange={() => setIsVulnerable(!isVulnerable)}
                    />
                    <Label
                      htmlFor="vulnerable"
                      className="text-xs cursor-pointer"
                    >
                      Vulnerable mode {isVulnerable ? "(unsafe)" : "(safe)"}
                    </Label>
                  </div>
                </div>

                <Tabs defaultValue="xss" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="xss">XSS Attack</TabsTrigger>
                    <TabsTrigger value="html">HTML Injection</TabsTrigger>
                  </TabsList>
                  <TabsContent value="xss" className="space-y-4 pt-2">
                    <Button onClick={handleXssPreview} className="w-full">
                      Preview Content
                    </Button>
                    <div className="border rounded p-3 min-h-[120px] relative bg-white dark:bg-gray-950">
                      <div className="text-xs text-gray-500 dark:text-gray-400 absolute top-1 right-2">
                        Content Preview:
                      </div>
                      <div
                        className="pt-5"
                        dangerouslySetInnerHTML={{ __html: previewContent }}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="html" className="space-y-4 pt-2">
                    <Button onClick={handleHtmlInjection} className="w-full">
                      Post Comment
                    </Button>
                    <div className="border rounded p-3 min-h-[120px] relative bg-white dark:bg-gray-950">
                      <div className="text-xs text-gray-500 dark:text-gray-400 absolute top-1 right-2">
                        Comment System:
                      </div>
                      <div
                        className="pt-5"
                        dangerouslySetInnerHTML={{ __html: htmlResult }}
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                <div
                  id="sensitive"
                  className="hidden p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded"
                >
                  <div className="text-red-600 dark:text-red-400 font-bold mb-2">
                    SECURITY BREACH: Sensitive Data Exposed!
                  </div>
                  <div className="font-mono text-xs overflow-x-auto">
                    {JSON.stringify(sensitiveData, null, 2)}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 rounded">
              <p className="text-sm">
                <strong>Impact:</strong> HTML/XSS injection can steal cookies,
                redirect users, modify page content, and access sensitive data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
