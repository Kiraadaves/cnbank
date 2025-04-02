"use client";
import Link from "next/link";
import { DollarSign, PiggyBank, User, BarChart3 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Overview from "@/components/overview";
import RecentTransactions from "@/components/recent-transactions";
import SavingsGoals from "@/components/savings-goals";
import InvestmentPortfolio from "@/components/investment-portfolio";
import Ball from "@/components/ball";
import Navbar from "@/components/mobile-nav";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [userData, setUserData] = useState({ name: "Guest", email: "" });

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);
  // Stats
  const statCards = [
    {
      title: "Total Balance",
      icon: <DollarSign className="h-7 w-7 text-[#ffffff]" />,
      value: "₦45,231.89",
      description: "+20.1% from last month",
      class: "text-black",
    },
    {
      title: "Investments",
      icon: <BarChart3 className="h-7 w-7 text-[#ffffff]" />,
      value: "₦32,450.00",
      description: "+4.3% overall return",
      class: "text-yellow-500",
    },
    {
      title: "Savings",
      icon: <PiggyBank className="h-7 w-7 text-[#ffffff]" />,
      value: "₦12,781.89",
      description: "+₦1,200.00 this month",
      class: "text-green-500",
    },
    {
      title: "Monthly Spending",
      icon: <DollarSign className="h-7 w-7 text-[#ffffff]" />,
      value: "₦3,352.40",
      description: "-12.5% from last month",
      class: "text-red-500",
    },
  ];

  // Main cards
  const contentCards = [
    {
      cols: "lg:col-span-4",
      title: "Portfolio Overview",
      description: "Your investment performance for the past 30 days",
      content: <Overview />,
      footer: null,
    },
    {
      cols: "lg:col-span-3",
      title: "Recent Transactions",
      description: "Your latest financial activities",
      content: <RecentTransactions />,
      footer: (
        <Link
          href="#"
          className="text-sm bg-[#0078ff] text-white rounded-[6px] py-3 px-4 "
        >
          View all transactions
        </Link>
      ),
    },
    {
      cols: "lg:col-span-3",
      title: "Savings Goals",
      description: "Track your progress towards financial goals",
      content: <SavingsGoals />,
      footer: (
        <Link
          href="/savings"
          className="text-sm bg-[#0078ff] text-white rounded-[6px] py-3 px-4"
        >
          Manage savings goals
        </Link>
      ),
    },
    {
      cols: "lg:col-span-4",
      title: "Investment Portfolio",
      description: "Your current investment allocation",
      content: <InvestmentPortfolio />,
      footer: (
        <Link
          href="/investments"
          className="text-sm bg-[#0078ff] text-white rounded-[6px] py-3 px-4"
        >
          View portfolio details
        </Link>
      ),
    },
  ];

  const balls = [
    { size: "w-[10px] h-[10px]", color: "bg-blue-300" },
    { size: "w-8 h-8", color: "bg-[#00a3ff]" },
    { size: "w-[56px] h-[56px]", color: "bg-[#0078ff]" },
    { size: "w-[56px] h-[56px]", color: "bg-blue-300" },
    { size: "w-8 h-8", color: "bg-[#00a3ff]" },
    { size: "w-[56px] h-[56px]", color: "bg-[#0078ff]" },
    { size: "w-[10px] h-[10px]", color: "bg-blue-300" },
    { size: "w-8 h-8", color: "bg-blue-300" },
    { size: "w-[56px] h-[56px]", color: "bg-[#00a3ff]" },
    { size: "w-[56px] h-[56px]", color: "bg-blue-300" },
    { size: "w-8 h-8", color: "bg-blue-300" },
    { size: "w-[56px] h-[56px]", color: "bg-[#0078ff]" },
    { size: "w-[56px] h-[56px]", color: "bg-blue-300" },
    { size: "w-[56px] h-[56px]", color: "bg-blue-300" },
  ];

  return (
    <div className="flex min-h-screen flex-col w-full pb-12">
      <Navbar />
      <main className="relative flex-1 space-y-8  md:pt-12 pt-8 px-4 md:px-16 bg-gradient-to-b from-blue-50 to-white">
        {balls.map((ball, index) => (
          <Ball
            key={index}
            className={`z-30 ${ball.size} ${ball.color} rounded-full opacity-30 md:opacity-100`}
          />
        ))}

        <div className="flex items-center justify-between z-40">
          <h1 className="animate__animated animate__backInLeft md:text-3xl text-2xl font-bold tracking-tight z-40">
            Dashboard
          </h1>
          <div className=" z-40">
            <Link
              href="/profile"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary z-40"
            >
              <User className="h-6 w-6" />
              <span className="hidden md:inline text-xl">{userData.name}</span>
            </Link>
            <p className="font-medium text-muted-foreground hidden md:block">
              {userData.email}
            </p>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 z-40">
          {statCards.map((card, index) => (
            <Card
              key={index}
              className="z-40 animate__animated animate__zoomIn"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg text-[#0078ff] font-medium">
                  {card.title}
                </CardTitle>
                <div className="bg-[#0078ff] h-16 w-16 rounded-full flex items-center justify-center">
                  {card.icon}
                </div>
              </CardHeader>
              <CardContent>
                <p className={`${card.class} text-2xl font-bold`}>
                  {card.value}
                </p>
                <p className="text-sm mt-2 text-gray-800">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main content cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {contentCards.slice(0, 2).map((card, index) => (
            <Card
              key={index}
              className={`${card.cols} z-40 animate__animated animate__slideInUp`}
            >
              <CardHeader>
                <CardTitle className="text-[#0078ff] text-lg">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>{card.content}</CardContent>
              {card.footer && (
                <CardFooter className="flex justify-center">
                  {card.footer}
                </CardFooter>
              )}
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {contentCards.slice(2, 4).map((card, index) => (
            <Card key={index} className={`${card.cols} z-40`}>
              <CardHeader>
                <CardTitle className="text-[#0078ff] text-lg">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>{card.content}</CardContent>
              {card.footer && (
                <CardFooter
                  className={`flex justify-center ${
                    card.title === "Investment Portfolio" ? "mt-8" : ""
                  }`}
                >
                  {card.footer}
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
