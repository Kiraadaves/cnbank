import Link from "next/link";
import { ArrowLeft, TrendingUp, BarChart3, PieChart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "@/components/overview";
import InvestmentPortfolio from "@/components/investment-portfolio";
import Navbar from "@/components/mobile-nav";

const InvestmentsPage = () => {
  const tabs = [
    {
      value: "overview",
      icon: BarChart3,
      label: "Overview",
    },
    {
      value: "allocation",
      icon: PieChart,
      label: "Allocation",
    },
  ];

  const investmentMetrics = [
    {
      title: "Total Invested",
      icon: BarChart3,
      value: "₦32,450.00",
      description: "+₦1,824.00 (5.9%) all time",
      class: "",
    },
    {
      title: "Monthly Return",
      icon: TrendingUp,
      value: "₦412.35",
      description: "+1.3% this month",
      class: "text-yellow-500",
    },
    {
      title: "Annual Return",
      icon: TrendingUp,
      value: "₦4,856.20",
      description: "+15.8% this year",
      class: "text-green-500",
    },
    {
      title: "Dividend Yield",
      icon: BarChart3,
      value: "2.4%",
      description: "₦768.50 last year",
      class: "text-purple-500",
    },
  ];

  const topHoldings = [
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      value: "₦4,250.00",
      change: "+12.4%",
      changeColor: "text-green-500",
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corp.",
      value: "₦3,820.50",
      change: "+8.2%",
      changeColor: "text-green-500",
    },
    {
      symbol: "AMZN",
      name: "Amazon.com Inc.",
      value: "₦2,950.75",
      change: "+5.7%",
      changeColor: "text-green-500",
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      value: "₦2,680.25",
      change: "+3.9%",
      changeColor: "text-green-500",
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc.",
      value: "₦1,950.00",
      change: "-2.3%",
      changeColor: "text-red-500",
    },
  ];

  const sectorBreakdown = [
    {
      name: "Technology",
      percentage: "42%",
      width: "42%",
      color: "bg-[#0078ff]",
    },
    {
      name: "Financial Services",
      percentage: "18%",
      width: "18%",
      color: "bg-[#4d9fff]",
    },
    {
      name: "Healthcare",
      percentage: "15%",
      width: "15%",
      color: "bg-[#00a3ff]",
    },
    {
      name: "Consumer Goods",
      percentage: "12%",
      width: "12%",
      color: "bg-[#80c7ff]",
    },
    {
      name: "Other Sectors",
      percentage: "13%",
      width: "13%",
      color: "bg-[#b3dbff]",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 space-y-4 p-4 pt-6 md:p-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="flex items-center">
          <Link
            href="/"
            className="mr-2 inline-flex items-center justify-center rounded-full p-1 bg-black"
          >
            <ArrowLeft className="h-6 w-6 text-[#ffffff]" />
            <span className="sr-only">Back to Dashboard</span>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">Investments</h1>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="space-x-4">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2"
              >
                <tab.icon className="h-6 w-6" />
                <span>{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {investmentMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-base text-[#00a3ff] font-medium">
                      {metric.title}
                    </CardTitle>
                    <metric.icon className={`h-5 w-5 ${metric.class}`} />
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl font-bold ${metric.class}`}>
                      {metric.value}
                    </div>
                    <p className="text-sm mt-2 text-gray-700">
                      {metric.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
                <CardDescription>
                  Your investment performance over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Overview />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="allocation" className="space-y-4">
            <Card className="h-[410px]">
              <CardHeader>
                <CardTitle className="text-lg text-[#0078ff]">
                  Asset Allocation
                </CardTitle>
                <CardDescription className="text-base">
                  Your current investment distribution
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center ">
                <div className="w-full max-w-md ">
                  <InvestmentPortfolio />
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-[#0078ff]">
                    Top Holdings
                  </CardTitle>
                  <CardDescription className="text-base">
                    Your largest investments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topHoldings.map((holding, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {holding.symbol}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {holding.name}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{holding.value}</p>
                          <p className={`text-xs ${holding.changeColor}`}>
                            {holding.change}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-[#0078ff]">
                    Sector Breakdown
                  </CardTitle>
                  <CardDescription className="text-base">
                    Distribution by industry sector
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sectorBreakdown.map((sector, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{sector.name}</p>
                          <p className="text-sm font-medium">
                            {sector.percentage}
                          </p>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className={`h-2 rounded-full ${sector.color}`}
                            style={{ width: sector.width }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default InvestmentsPage;
