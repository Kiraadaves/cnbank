import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InvestmentPortfolio } from "@/components/investment-portfolio";
import { MobileNav } from "@/components/mobile-nav";
import { Overview } from "@/components/overview";

export const InvestmentsPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-gradient-to-r from-[#0078ff] to-[#00a3ff] text-white px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-white"
        >
          <TrendingUp className="h-6 w-6 text-white" />
          <span>WealthWise</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-4 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Dashboard
          </Link>
          <Link href="/investments" className="text-sm font-medium text-white">
            Investments
          </Link>
          <Link
            href="/savings"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Savings
          </Link>
          <Link
            href="/profile"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Profile
          </Link>
        </nav>
        <MobileNav />
      </header>
      <main className="flex-1 space-y-4 p-4 pt-6 md:p-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="flex items-center">
          <Link
            href="/"
            className="mr-2 inline-flex items-center justify-center rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to Dashboard</span>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">Investments</h1>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="allocation" className="flex items-center gap-2">
              <PieChart className="h-4 w-4" />
              <span>Allocation</span>
            </TabsTrigger>
            <TabsTrigger
              value="performance"
              className="flex items-center gap-2"
            >
              <LineChart className="h-4 w-4" />
              <span>Performance</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Invested
                  </CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$32,450.00</div>
                  <p className="text-xs text-muted-foreground">
                    +$1,824.00 (5.9%) all time
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Monthly Return
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$412.35</div>
                  <p className="text-xs text-muted-foreground">
                    +1.3% this month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Annual Return
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$4,856.20</div>
                  <p className="text-xs text-muted-foreground">
                    +15.8% this year
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Dividend Yield
                  </CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.4%</div>
                  <p className="text-xs text-muted-foreground">
                    $768.50 last year
                  </p>
                </CardContent>
              </Card>
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
            <Card>
              <CardHeader>
                <CardTitle>Asset Allocation</CardTitle>
                <CardDescription>
                  Your current investment distribution
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="w-full max-w-md">
                  <InvestmentPortfolio />
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Top Holdings</CardTitle>
                  <CardDescription>Your largest investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">AAPL</p>
                        <p className="text-xs text-muted-foreground">
                          Apple Inc.
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">$4,250.00</p>
                        <p className="text-xs text-green-500">+12.4%</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">MSFT</p>
                        <p className="text-xs text-muted-foreground">
                          Microsoft Corp.
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">$3,820.50</p>
                        <p className="text-xs text-green-500">+8.2%</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">AMZN</p>
                        <p className="text-xs text-muted-foreground">
                          Amazon.com Inc.
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">$2,950.75</p>
                        <p className="text-xs text-green-500">+5.7%</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          GOOGL
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Alphabet Inc.
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">$2,680.25</p>
                        <p className="text-xs text-green-500">+3.9%</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">TSLA</p>
                        <p className="text-xs text-muted-foreground">
                          Tesla Inc.
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">$1,950.00</p>
                        <p className="text-xs text-red-500">-2.3%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sector Breakdown</CardTitle>
                  <CardDescription>
                    Distribution by industry sector
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Technology</p>
                        <p className="text-sm font-medium">42%</p>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-[#0078ff]"
                          style={{ width: "42%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">
                          Financial Services
                        </p>
                        <p className="text-sm font-medium">18%</p>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-[#4d9fff]"
                          style={{ width: "18%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Healthcare</p>
                        <p className="text-sm font-medium">15%</p>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-[#00a3ff]"
                          style={{ width: "15%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Consumer Goods</p>
                        <p className="text-sm font-medium">12%</p>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-[#80c7ff]"
                          style={{ width: "12%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Other Sectors</p>
                        <p className="text-sm font-medium">13%</p>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-[#b3dbff]"
                          style={{ width: "13%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Historical Performance</CardTitle>
                <CardDescription>
                  Your portfolio performance over different time periods
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="space-y-1 rounded-lg border p-3">
                    <p className="text-xs text-muted-foreground">1 Month</p>
                    <p className="text-lg font-bold text-green-500">+1.3%</p>
                    <p className="text-xs text-muted-foreground">+$412.35</p>
                  </div>
                  <div className="space-y-1 rounded-lg border p-3">
                    <p className="text-xs text-muted-foreground">3 Months</p>
                    <p className="text-lg font-bold text-green-500">+3.8%</p>
                    <p className="text-xs text-muted-foreground">+$1,186.50</p>
                  </div>
                  <div className="space-y-1 rounded-lg border p-3">
                    <p className="text-xs text-muted-foreground">1 Year</p>
                    <p className="text-lg font-bold text-green-500">+15.8%</p>
                    <p className="text-xs text-muted-foreground">+$4,856.20</p>
                  </div>
                  <div className="space-y-1 rounded-lg border p-3">
                    <p className="text-xs text-muted-foreground">All Time</p>
                    <p className="text-lg font-bold text-green-500">+5.9%</p>
                    <p className="text-xs text-muted-foreground">+$1,824.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Comparison</CardTitle>
                <CardDescription>
                  Your portfolio vs market benchmarks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Your Portfolio</p>
                      <p className="text-sm font-medium text-green-500">
                        +15.8%
                      </p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: "15.8%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">S&P 500</p>
                      <p className="text-sm font-medium text-green-500">
                        +12.4%
                      </p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-[#4d9fff]"
                        style={{ width: "12.4%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">NASDAQ</p>
                      <p className="text-sm font-medium text-green-500">
                        +18.2%
                      </p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-[#00a3ff]"
                        style={{ width: "18.2%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Dow Jones</p>
                      <p className="text-sm font-medium text-green-500">
                        +9.7%
                      </p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-[#80c7ff]"
                        style={{ width: "9.7%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};
