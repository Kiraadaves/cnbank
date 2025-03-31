import Link from "next/link";
import {
  DollarSign,
  TrendingUp,
  PiggyBank,
  User,
  BarChart3,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "@/components/overview";
import { SavingsGoals } from "@/components/savings-goals";
import { InvestmentPortfolio } from "@/components/investment-portfolio";
import { MobileNav } from "@/components/mobile-nav";
import { RecentTransactions } from "@/components/recent-transactions";

export const Dashboard = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-gradient-to-r from-[#0078ff] to-[#00a3ff] text-white px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <TrendingUp className="h-6 w-6 text-white" />
          <span>WealthWise</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-4 md:flex">
          <Link href="/" className="text-sm font-medium text-white">
            Dashboard
          </Link>
          <Link
            href="/investments"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
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
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Link
              href="/profile"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <User className="h-4 w-4" />
              <span className="hidden md:inline">John Doe</span>
            </Link>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Balance
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Investments</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$32,450.00</div>
              <p className="text-xs text-muted-foreground">
                +4.3% overall return
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Savings</CardTitle>
              <PiggyBank className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,781.89</div>
              <p className="text-xs text-muted-foreground">
                +$1,200.00 this month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Monthly Spending
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$3,352.40</div>
              <p className="text-xs text-muted-foreground">
                -12.5% from last month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Portfolio Overview</CardTitle>
              <CardDescription>
                Your investment performance for the past 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Overview />
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>
                Your latest financial activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentTransactions />
            </CardContent>
            <CardFooter>
              <Link
                href="/transactions"
                className="text-sm text-primary hover:underline"
              >
                View all transactions
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Savings Goals</CardTitle>
              <CardDescription>
                Track your progress towards financial goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SavingsGoals />
            </CardContent>
            <CardFooter>
              <Link
                href="/savings"
                className="text-sm text-primary hover:underline"
              >
                Manage savings goals
              </Link>
            </CardFooter>
          </Card>
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Investment Portfolio</CardTitle>
              <CardDescription>
                Your current investment allocation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <InvestmentPortfolio />
            </CardContent>
            <CardFooter>
              <Link
                href="/investments"
                className="text-sm text-primary hover:underline"
              >
                View portfolio details
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};
