"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

type CoinGeckoCoin = {
  id: string;
  name: string;
  market_cap: number;
};

type Investment = {
  name: string;
  value: number;
  color: string;
};

const InvestmentPortfolio = () => {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result: CoinGeckoCoin[] = await response.json();

        // Transform the data for my pie chart
        if (result && result.length > 0) {
          const colors = [
            "hsl(210, 100%, 50%)", // Primary blue
            "hsl(220, 85%, 65%)", // Lighter blue
            "hsl(106 100% 32%)", // Teal-blue
            "hsl(45 100% 60%)", // Purple-blue
            "hsl(0 100% 50%)", // Light cyan-blue
          ];

          const formattedData = result.map((coin, index: number) => ({
            name: coin.name,
            value: coin.market_cap,
            color: colors[index % colors.length],
          }));

          setInvestments(formattedData);
        } else {
          console.log("Unexpected response format, using mock data");
          generateMockData();
        }
      } catch (error) {
        console.error("Failed to fetch investment portfolio:", error);
        setError("Failed to load data. Using sample data instead.");
        generateMockData();
      } finally {
        setLoading(false);
      }
    };

    const generateMockData = () => {
      const mockInvestments = [
        { name: "Stocks", value: 18500, color: "hsl(210, 100%, 50%)" }, // Primary blue
        { name: "Bonds", value: 6200, color: "hsl(220, 85%, 65%)" }, // Lighter blue
        { name: "Real Estate", value: 4800, color: "hsl(106 100% 32%)" }, // Teal-blue
        { name: "Crypto", value: 1950, color: "hsl(45 100% 60%)" }, // Purple-blue
        { name: "Cash", value: 1000, color: "hsl(0 100% 50%)" }, // Light cyan-blue
      ] as Investment[];

      setInvestments(mockInvestments);
    };

    fetchCryptoData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[250px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  const total = investments.reduce(
    (sum, investment) => sum + investment.value,
    0
  );

  return (
    <div className="h-[250px]">
      {error && <div className="mb-2 text-sm text-amber-600">{error}</div>}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={investments}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent = 0 }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
            labelLine={false}
          >
            {investments.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [
              `₦${Number(value).toLocaleString()}`,
              "Amount",
            ]}
            itemStyle={{ color: "var(--foreground)" }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-2 text-center text-sm text-muted-foreground">
        Total Portfolio: ₦{total.toLocaleString()}
      </div>
    </div>
  );
};

export default InvestmentPortfolio;
