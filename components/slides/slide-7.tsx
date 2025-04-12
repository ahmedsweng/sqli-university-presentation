"use client";

import type React from "react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit } from "lucide-react";
import { useEffect, useState } from "react";

export default function Slide7() {
  const [accountId, setAccountId] = useState("");
  const [newBalance, setNewBalance] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [sqlQuery, setSqlQuery] = useState(
    "UPDATE accounts SET balance = [amount] WHERE id = '[account_id]'"
  );
  const [accounts, setAccounts] = useState([
    { id: "1001", owner: "John Doe", balance: 5000 },
    { id: "1002", owner: "Jane Smith", balance: 7500 },
    { id: "1003", owner: "Bob Johnson", balance: 3200 },
  ]);
  const [originalAccounts] = useState([...accounts]);

  useEffect(() => {
    // Update the SQL query in real-time as user types
    if (accountId.includes(";") || accountId.includes("--")) {
      // Show the SQL injection effect
      setSqlQuery(
        `UPDATE accounts SET balance = ${
          newBalance || 0
        } WHERE id = '${accountId}'`
      );
    } else {
      // Show normal query with placeholders
      setSqlQuery(
        `UPDATE accounts SET balance = ${
          newBalance || "[amount]"
        } WHERE id = '${accountId || "[account_id]"}'`
      );
    }
  }, [accountId, newBalance]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    // Check for SQL injection with multiple statements
    if (accountId.includes(";") || accountId.includes("--")) {
      // Simulate SQL injection attack that updates all accounts
      const updatedAccounts = accounts.map((account) => ({
        ...account,
        balance: 999999, // Simulate all accounts being updated to the same value
      }));

      setAccounts(updatedAccounts);
      setSuccess(true);
      setResult(
        "SQL Injection detected! All account balances have been modified to $999,999."
      );
    } else {
      // Normal update for a single account
      const accountIndex = accounts.findIndex((acc) => acc.id === accountId);

      if (accountIndex !== -1 && newBalance) {
        const updatedAccounts = [...accounts];
        updatedAccounts[accountIndex] = {
          ...updatedAccounts[accountIndex],
          balance: Number.parseFloat(newBalance),
        };

        setAccounts(updatedAccounts);
        setSuccess(true);
        setResult(
          `Account ${accountId} balance updated successfully to $${Number.parseFloat(
            newBalance
          ).toLocaleString()}.`
        );
      } else {
        setSuccess(false);
        setResult("Update failed. Account not found or invalid balance.");
      }
    }
  };

  // Reset accounts to original state
  const resetAccounts = () => {
    setAccounts([...originalAccounts]);
    setResult(null);
    setAccountId("");
    setNewBalance("");
  };

  return (
    <div className="flex flex-col h-full p-6">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Edit className="h-8 w-8 text-blue-500" />
          Live Demo: Database Modification
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
              <form onSubmit={handleUpdate} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="accountId">Account ID</Label>
                  <Input
                    id="accountId"
                    value={accountId}
                    onChange={(e) => setAccountId(e.target.value)}
                    placeholder="Enter account ID"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newBalance">New Balance</Label>
                  <Input
                    id="newBalance"
                    type="number"
                    value={newBalance}
                    onChange={(e) => setNewBalance(e.target.value)}
                    placeholder="Enter new balance"
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" className="flex-1">
                    Update Balance
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={resetAccounts}
                  >
                    Reset
                  </Button>
                </div>
              </form>

              {result && (
                <Alert
                  className={`mt-4 ${
                    success
                      ? accountId.includes(";")
                        ? "bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                        : "bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                      : "bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                  }`}
                >
                  <AlertDescription>{result}</AlertDescription>
                </Alert>
              )}
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 rounded">
              <p className="text-sm font-medium">
                Try this batch SQL injection:
              </p>
              <div className="mt-2 text-sm">
                <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">
                  1001'; UPDATE accounts SET balance = 999999 --
                </code>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium">Live Query:</h4>
              <div className="mt-2 font-mono text-sm p-3 bg-gray-100 dark:bg-gray-800 rounded overflow-x-auto">
                <div>
                  {accountId.includes(";") || accountId.includes("--") ? (
                    <span className="text-red-500 dark:text-red-400">
                      {sqlQuery}
                    </span>
                  ) : (
                    <span className="text-green-600 dark:text-green-400">
                      {sqlQuery}
                    </span>
                  )}
                </div>
                {accountId.includes(";") && (
                  <div className="mt-2 text-gray-500 dark:text-gray-400">
                    // The semicolon allows execution of multiple SQL statements
                    in one query
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Current Account Balances</h3>
            <div className="grid gap-4">
              {accounts.map((account) => (
                <Card
                  key={account.id}
                  className={
                    account.balance === 999999
                      ? "border-red-300 dark:border-red-700"
                      : ""
                  }
                >
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm font-medium">
                      Account #{account.id}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="py-2">
                    <div className="flex justify-between items-center">
                      <span>{account.owner}</span>
                      <span
                        className={`font-bold ${
                          account.balance === 999999 ? "text-red-500" : ""
                        }`}
                      >
                        ${account.balance.toLocaleString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {accountId.includes(";") && (
              <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
                <h4 className="font-medium text-red-700 dark:text-red-400">
                  Attack Analysis:
                </h4>
                <p className="mt-1 text-sm">
                  This attack injects a second SQL statement that modifies all
                  account balances, regardless of the WHERE clause in the first
                  statement.
                </p>
                <div className="mt-2 font-mono text-xs">
                  <div>
                    1. First statement:{" "}
                    <span className="text-gray-500">
                      UPDATE accounts SET balance = {newBalance || 0} WHERE id =
                      '1001'
                    </span>
                  </div>
                  <div>
                    2. Second statement:{" "}
                    <span className="text-red-500">
                      UPDATE accounts SET balance = 999999
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
