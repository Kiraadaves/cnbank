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

interface StockDataPoint {
  date: string;
  value: number;
}

interface AlphaVantageResponse {
  "Time Series (Daily)": {
    [date: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string;
      "4. close": string;
      "5. volume": string;
    };
  };
}

const Overview = () => {
  const [data, setData] = useState<StockDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStockData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&apikey=demo`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result: AlphaVantageResponse = await response.json();

        if (result["Time Series (Daily)"]) {
          const timeSeriesData = result["Time Series (Daily)"];
          const formattedData = Object.entries(timeSeriesData)
            .slice(0, 30)
            .map(([date, values]) => ({
              date: new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              }),
              value: Number.parseFloat(values["4. close"]),
            }))
            .reverse();

          setData(formattedData);
        } else {
          console.log("API limit reached, using mock data");
          generateMockData();
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError("Failed to load data. Using sample data instead.");
        generateMockData();
      } finally {
        setLoading(false);
      }
    };

    const generateMockData = () => {
      const mockData: StockDataPoint[] = Array.from({ length: 30 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (30 - i));

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
            tickFormatter={(value) => `₦${value.toLocaleString()}`}
            width={80}
          />
          <Tooltip
            formatter={(value) => [
              `₦${Number(value).toLocaleString()}`,
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
};

export default Overview;
