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
import SavingsGoals from "@/components/savings-goals";
import Navbar from "@/components/mobile-nav";

const SavingsPage = () => {
  // Savings metrics
  const savingsMetrics = [
    {
      title: "Total Savings",
      icon: PiggyBank,
      value: "₦12,781.89",
      description: "+₦1,200.00 this month",
    },
    {
      title: "Monthly Contribution",
      icon: PiggyBank,
      value: "₦1,200.00",
      description: "20% of monthly income",
    },
    {
      title: "Interest Earned",
      icon: TrendingUp,
      value: "₦342.50",
      description: "This year",
    },
    {
      title: "Active Goals",
      icon: Target,
      value: "4",
      description: "2 on track, 2 behind",
    },
  ];

  // Savings history
  const savingsHistory = [
    {
      month: "March 2025",
      status: "Current Month",
      amount: "₦1,200.00",
      percentage: "+20% of income",
    },
    {
      month: "February 2025",
      status: "Last Month",
      amount: "₦1,200.00",
      percentage: "+20% of income",
    },
    {
      month: "January 2025",
      status: "2 Months Ago",
      amount: "₦1,000.00",
      percentage: "+16.7% of income",
    },
    {
      month: "December 2024",
      status: "3 Months Ago",
      amount: "₦800.00",
      percentage: "+13.3% of income",
    },
    {
      month: "November 2024",
      status: "4 Months Ago",
      amount: "₦800.00",
      percentage: "+13.3% of income",
    },
  ];

  // Savings tips
  const savingsTips = [
    {
      icon: PiggyBank,
      title: "Increase your monthly contribution",
      description:
        "Increasing your monthly savings by just 5% could help you reach your home down payment goal 6 months earlier.",
      class: "text-green-500",
    },
    {
      icon: Target,
      title: "Set up automatic transfers",
      description:
        "Schedule automatic transfers to your savings account on payday to ensure consistent saving habits.",
      class: "text-purple-500",
    },
    {
      icon: TrendingUp,
      title: "Consider a high-yield savings account",
      description:
        "Moving your emergency fund to a high-yield savings account could earn you an additional ₦120 per year in interest.",
      class: "text-yellow-500",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 space-y-4 md:space-y-8 p-4 pt-6 md:p-8 bg-gradient-to-b from-blue-50 to-white ">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <Link
              href="/dashboard"
              className="mr-2 inline-flex items-center justify-center rounded-full p-1"
            >
              <ArrowLeft className="h-6 w-6 text-black" />
              <span className="sr-only">Back to Dashboard</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">Savings</h1>
          </div>
          <Button className="flex items-center p-4 gap-2 bg-[#0078ff]">
            <Plus className="h-4 w-4" />
            <span>New Goal</span>
          </Button>
        </div>

        {/* Savings Metrics Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {savingsMetrics.map((metric, index) => (
            <Card key={index} className="animate__animated animate__zoomIn">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base text-[#0078ff] font-medium">
                  {metric.title}
                </CardTitle>
                <metric.icon className="h-6 w-6 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-sm mt-2 text-gray-700">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Savings Goals Card */}
        <Card className="animate__animated animate__slideInUp">
          <CardHeader>
            <CardTitle className="text-lg text-[#0078ff]">
              Savings Goals
            </CardTitle>
            <CardDescription className="text-base">
              Track your progress towards financial goals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SavingsGoals />
          </CardContent>
          <CardFooter className="flex justify-center">
            <div>
              <Button className="bg-[#0078ff] p-6">View All Goals</Button>
            </div>
          </CardFooter>
        </Card>

        {/* Bottom Row Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Savings History Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-[#0078ff]">
                Savings History
              </CardTitle>
              <CardDescription className="text-base">
                Your monthly savings contributions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {savingsHistory.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-none">
                        {item.month}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.status}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{item.amount}</p>
                      <p className="text-xs text-green-500">
                        {item.percentage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Savings Tips Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-[#0078ff]">
                Savings Tips
              </CardTitle>
              <CardDescription className="text-base">
                Personalized recommendations to boost your savings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {savingsTips.map((tip, index) => (
                  <div key={index} className="rounded-lg border p-3">
                    <div className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <tip.icon className={`h-6 w-6 ${tip.class}`} />
                      </div>
                      <div>
                        <p className="text-base font-medium">{tip.title}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {tip.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SavingsPage;
