"use client";

import { JSX, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Coffee,
  CreditCard,
  DollarSign,
  ShoppingBag,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Transaction = {
  id: string;
  type: "deposit" | "withdrawal" | "payment";
  amount: number;
  date: string;
  description: string;
  icon: JSX.Element;
};

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1/todos"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result: Todo[] = await response.json();

        if (result?.length) {
          const icons = [
            <ArrowDownRight key="1" className="h-6 w-6 text-green-500" />,
            <Coffee key="2" className="h-6 w-6 text-amber-500" />,
            <ShoppingBag key="3" className="h-6 w-6 text-blue-500" />,
            <ArrowUpRight key="4" className="h-6 w-6 text-red-500" />,
            <CreditCard key="5" className="h-6 w-6 text-purple-500" />,
          ];

          const types = [
            "deposit",
            "payment",
            "payment",
            "withdrawal",
            "payment",
          ];
          const amounts = [2500, -42.5, -156.24, -500, -89.99];

          const formattedData = result
            .slice(0, 5)
            .map((todo: Todo, index: number) => {
              const date = new Date();
              date.setDate(date.getDate() - index);

              return {
                id: todo.id.toString(),
                type: types[index % types.length] as
                  | "deposit"
                  | "withdrawal"
                  | "payment",
                amount: amounts[index % amounts.length],
                date: date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }),
                description:
                  todo.title.slice(0, 20) +
                  (todo.title.length > 20 ? "..." : ""),
                icon: icons[index % icons.length],
              };
            });

          setTransactions(formattedData);
        } else {
          console.log("Unexpected response format, using mock data");
          generateMockData();
        }
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
        setError("Failed to load data. Using sample data instead.");
        generateMockData();
      } finally {
        setLoading(false);
      }
    };

    const generateMockData = () => {
      const mockTransactions = [
        {
          id: "t1",
          type: "deposit",
          amount: 2500,
          date: "Mar 21, 2025",
          description: "Salary Deposit",
          icon: <ArrowDownRight className="h-6 w-6 text-green-500" />,
        },
        {
          id: "t2",
          type: "payment",
          amount: -42.5,
          date: "Mar 20, 2025",
          description: "Coffee Shop",
          icon: <Coffee className="h-6 w-6 text-amber-500" />,
        },
        {
          id: "t3",
          type: "payment",
          amount: -156.24,
          date: "Mar 18, 2025",
          description: "Grocery Store",
          icon: <ShoppingBag className="h-6 w-6 text-blue-500" />,
        },
        {
          id: "t4",
          type: "withdrawal",
          amount: -500,
          date: "Mar 15, 2025",
          description: "ATM Withdrawal",
          icon: <ArrowUpRight className="h-6 w-6 text-red-500" />,
        },
        {
          id: "t5",
          type: "payment",
          amount: -89.99,
          date: "Mar 12, 2025",
          description: "Monthly Subscription",
          icon: <CreditCard className="h-6 w-6 text-purple-500" />,
        },
      ] as Transaction[];

      setTransactions(mockTransactions);
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="h-9 w-9 animate-pulse rounded-full bg-muted"></div>
            <div className="space-y-2">
              <div className="h-4 w-32 animate-pulse rounded bg-muted"></div>
              <div className="h-3 w-24 animate-pulse rounded bg-muted"></div>
            </div>
            <div className="ml-auto h-4 w-16 animate-pulse rounded bg-muted"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {error && <div className="mb-2 text-sm text-amber-600">{error}</div>}
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center gap-4">
          <Avatar className="h-9 w-9 border">
            <AvatarFallback>
              {transaction.icon ? (
                transaction.icon
              ) : (
                <DollarSign className="h-4 w-4" />
              )}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">
              {transaction.description}
            </p>
            <p className="text-xs text-muted-foreground">{transaction.date}</p>
          </div>
          <div
            className={`ml-auto text-sm font-medium ${
              transaction.amount > 0 ? "text-green-500" : ""
            }`}
          >
            {transaction.amount > 0 ? "+" : ""}₦
            {Math.abs(transaction.amount).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentTransactions;
