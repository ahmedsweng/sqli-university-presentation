"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Slide6() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [exposedData, setExposedData] = useState(false);
  const [sqlQuery, setSqlQuery] = useState(
    "SELECT * FROM products WHERE name LIKE '%[search]%' OR category LIKE '%[search]%'"
  );

  // Mock database
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 699 },
    { id: 3, name: "Headphones", category: "Audio", price: 199 },
  ];

  const users = [
    {
      id: 1,
      username: "admin",
      password: "admin123",
      email: "admin@example.com",
    },
    { id: 2, username: "john", password: "john456", email: "john@example.com" },
    {
      id: 3,
      username: "alice",
      password: "alice789",
      email: "alice@example.com",
    },
  ];

  useEffect(() => {
    // Update the SQL query in real-time as user types
    if (
      searchQuery.includes("'") ||
      searchQuery.includes("UNION") ||
      searchQuery.includes("--")
    ) {
      // Show the SQL injection effect
      setSqlQuery(
        `SELECT * FROM products WHERE name LIKE '%${searchQuery}%' OR category LIKE '%${searchQuery}%'`
      );
    } else {
      // Show normal query with placeholders
      setSqlQuery(
        `SELECT * FROM products WHERE name LIKE '%${
          searchQuery || "[search]"
        }%' OR category LIKE '%${searchQuery || "[search]"}%'`
      );
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setExposedData(false);

    // Check for SQL injection
    if (
      searchQuery.toLowerCase().includes("union") &&
      searchQuery.toLowerCase().includes("select")
    ) {
      // Simulate UNION-based SQL injection
      setExposedData(true);
      setSearchResults(users);
    } else {
      // Normal search
      const results = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results.length > 0 ? results : []);
    }
  };

  return (
    <div className="flex flex-col h-full p-6">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Search className="h-8 w-8 text-blue-500" />
          Live Demo: Data Extraction
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="flex-1"
                />
                <Button type="submit">Search</Button>
              </form>

              <div className="mt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>{exposedData ? "Username" : "Name"}</TableHead>
                      <TableHead>
                        {exposedData ? "Password" : "Category"}
                      </TableHead>
                      <TableHead>{exposedData ? "Email" : "Price"}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {searchResults.length > 0 ? (
                      searchResults.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>
                            {exposedData ? item.username : item.name}
                          </TableCell>
                          <TableCell
                            className={
                              exposedData ? "text-red-500 font-bold" : ""
                            }
                          >
                            {exposedData ? item.password : item.category}
                          </TableCell>
                          <TableCell>
                            {exposedData ? item.email : `$${item.price}`}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center">
                          No results found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 rounded">
              <p className="text-sm font-medium">
                Try this UNION-based SQL injection:
              </p>
              <div className="mt-2 text-sm">
                <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">
                  &apos; UNION SELECT id, username, password, email FROM users
                  --
                </code>
              </div>
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
                        "`SELECT * FROM products WHERE name LIKE '%${searchQuery}%' OR category LIKE '%${searchQuery}%'`"
                      }
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium">Live Query:</h4>
                <div className="mt-2 font-mono text-sm p-3 bg-gray-100 dark:bg-gray-800 rounded overflow-x-auto">
                  <div>
                    {searchQuery.includes("'") ||
                    searchQuery.toLowerCase().includes("union") ? (
                      <span className="text-red-500 dark:text-red-400">
                        {sqlQuery}
                      </span>
                    ) : (
                      <span className="text-green-600 dark:text-green-400">
                        {sqlQuery}
                      </span>
                    )}
                  </div>
                  {searchQuery.toLowerCase().includes("union") && (
                    <div className="mt-2 text-gray-500 dark:text-gray-400">
                      // The UNION operator combines results from multiple
                      SELECT statements
                    </div>
                  )}
                </div>
              </div>

              {exposedData && (
                <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
                  <h4 className="font-medium text-red-700 dark:text-red-400">
                    Security Impact:
                  </h4>
                  <p className="mt-1 text-sm">
                    The UNION attack has exposed sensitive user data including
                    passwords that should never be accessible through a product
                    search.
                  </p>
                  <p className="mt-2 text-sm font-semibold">
                    This is a critical security breach that could lead to
                    account takeover and system compromise.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
