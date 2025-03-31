"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function Overview() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStockData = async () => {
      setLoading(true);
      try {
        // Alpha Vantage API - Free tier (limited to 5 API calls per minute and 500 per day)
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&apikey=demo`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();

        // Check if we have the expected data structure
        if (result["Time Series (Daily)"]) {
          // Transform the data for our chart
          const timeSeriesData = result["Time Series (Daily)"];
          const formattedData = Object.entries(timeSeriesData)
            .slice(0, 30) // Get last 30 days
            .map(([date, values]: [string, any]) => ({
              date: new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              }),
              value: Number.parseFloat(values["4. close"]),
            }))
            .reverse(); // Chronological order

          setData(formattedData);
        } else {
          // If API limit is reached, fall back to mock data
          console.log(
            "API limit reached or unexpected response format, using mock data"
          );
          generateMockData();
        }
      } catch (error) {
        console.error("Failed to fetch portfolio data:", error);
        setError("Failed to load data. Using sample data instead.");
        // Fall back to mock data
        generateMockData();
      } finally {
        setLoading(false);
      }
    };

    const generateMockData = () => {
      // Mock data for demonstration
      const mockData = Array.from({ length: 30 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (30 - i));

        // Create some realistic looking fluctuations
        const baseValue = 32000;
        const randomFactor =
          Math.sin(i * 0.3) * 1000 + (Math.random() - 0.5) * 800;
        const value = baseValue + randomFactor + i * 50;

        return {
          date: date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          value: Number.parseFloat(value.toFixed(2)),
        };
      });

      setData(mockData);
    };

    fetchStockData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[300px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="h-[300px]">
      {error && <div className="mb-2 text-sm text-amber-600">{error}</div>}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => value}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            width={80}
          />
          <Tooltip
            formatter={(value) => [
              `$${value.toLocaleString()}`,
              "Portfolio Value",
            ]}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#0078ff"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, strokeWidth: 0, fill: "#0078ff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
