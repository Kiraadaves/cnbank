"use client";

import {
  Home,
  Plane,
  GraduationCapIcon as Graduation,
  Car,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { JSX } from "react";

type SavingsGoal = {
  id: string;
  name: string;
  currentAmount: number;
  targetAmount: number;
  icon: JSX.Element;
  dueDate: string;
};

const SavingsGoals = () => {
  const goals: SavingsGoal[] = [
    {
      id: "g1",
      name: "Down Payment",
      currentAmount: 15000,
      targetAmount: 50000,
      icon: <Home className="h-6 w-6 text-green-500" />,
      dueDate: "Dec 2026",
    },
    {
      id: "g2",
      name: "Vacation",
      currentAmount: 2800,
      targetAmount: 5000,
      icon: <Plane className="h-6 w-6 text-yellow-500" />,
      dueDate: "Aug 2025",
    },
    {
      id: "g3",
      name: "Education",
      currentAmount: 12000,
      targetAmount: 20000,
      icon: <Graduation className="h-6 w-6 text-blue-500" />,
      dueDate: "Sep 2026",
    },
    {
      id: "g4",
      name: "New Car",
      currentAmount: 8500,
      targetAmount: 35000,
      icon: <Car className="h-6 w-6 text-purple-500" />,
      dueDate: "Mar 2027",
    },
  ];

  return (
    <div className="space-y-6">
      {goals.map((goal) => {
        const progress = Math.round(
          (goal.currentAmount / goal.targetAmount) * 100
        );

        return (
          <div key={goal.id} className="space-y-2">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <span>{goal.icon}</span>
                <span className="text-sm font-medium">{goal.name}</span>
              </div>
              <div className="text-sm">
                <span className="font-medium">
                  ₦{goal.currentAmount.toLocaleString()}
                </span>
                <span className="text-muted-foreground">
                  /₦{goal.targetAmount.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Progress value={progress} className="h-2 [&>div]:bg-[#0078ff]" />
              <span className="text-xs text-muted-foreground">{progress}%</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Target date: {goal.dueDate}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SavingsGoals;
