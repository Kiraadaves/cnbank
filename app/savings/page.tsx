import Link from "next/link";
import { ArrowLeft, TrendingUp, PiggyBank, Plus, Target } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SavingsGoals } from "@/components/savings-goals";
import { MobileNav } from "@/components/mobile-nav";

export const SavingsPage = () => {
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
          <Link
            href="/investments"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Investments
          </Link>
          <Link href="/savings" className="text-sm font-medium text-white">
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
          <div className="flex items-center">
            <Link
              href="/"
              className="mr-2 inline-flex items-center justify-center rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to Dashboard</span>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight">Savings</h1>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            <span>New Goal</span>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Savings
              </CardTitle>
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
                Monthly Contribution
              </CardTitle>
              <PiggyBank className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,200.00</div>
              <p className="text-xs text-muted-foreground">
                20% of monthly income
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Interest Earned
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$342.50</div>
              <p className="text-xs text-muted-foreground">This year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Goals
              </CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                2 on track, 2 behind
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
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
            <Button variant="outline" className="w-full">
              View All Goals
            </Button>
          </CardFooter>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Savings History</CardTitle>
              <CardDescription>
                Your monthly savings contributions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      March 2025
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Current Month
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">$1,200.00</p>
                    <p className="text-xs text-green-500">+20% of income</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      February 2025
                    </p>
                    <p className="text-xs text-muted-foreground">Last Month</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">$1,200.00</p>
                    <p className="text-xs text-green-500">+20% of income</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      January 2025
                    </p>
                    <p className="text-xs text-muted-foreground">
                      2 Months Ago
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">$1,000.00</p>
                    <p className="text-xs text-green-500">+16.7% of income</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      December 2024
                    </p>
                    <p className="text-xs text-muted-foreground">
                      3 Months Ago
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">$800.00</p>
                    <p className="text-xs text-green-500">+13.3% of income</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      November 2024
                    </p>
                    <p className="text-xs text-muted-foreground">
                      4 Months Ago
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">$800.00</p>
                    <p className="text-xs text-green-500">+13.3% of income</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Savings Tips</CardTitle>
              <CardDescription>
                Personalized recommendations to boost your savings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-3">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <PiggyBank className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Increase your monthly contribution
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Increasing your monthly savings by just 5% could help
                        you reach your home down payment goal 6 months earlier.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Target className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Set up automatic transfers
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Schedule automatic transfers to your savings account on
                        payday to ensure consistent saving habits.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Consider a high-yield savings account
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Moving your emergency fund to a high-yield savings
                        account could earn you an additional $120 per year in
                        interest.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
