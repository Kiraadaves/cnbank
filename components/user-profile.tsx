"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

type UserData = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
};

const UserProfile = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        // Random User Generator API
        const response = await fetch("https://randomuser.me/api/?nat=us");

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const result = await response.json();

        if (result.results && result.results.length > 0) {
          setUserData(result.results[0]);
        } else {
          throw new Error("No user data found");
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setError("Failed to load user profile. Using default profile.");
        setUserData({
          name: {
            first: "Chinwe",
            last: "Nwankwo",
          },
          email: "chukwuogorchinwe@gmail.com",
          phone: "+234 806 120 0946",
          picture: {
            large: "/placeholder.svg?height=128&width=128",
          },
          location: {
            city: "Surulere",
            state: "Lagos",
            country: "Nigeria",
          },
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <Skeleton className="h-24 w-24 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-60" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!userData) return null;

  return (
    <Card className="bg-[#ffffff] animate__animated animate__slideInDown">
      <CardContent className="p-6">
        {error && <div className="mb-4 text-sm text-amber-600">{error}</div>}
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Avatar className="h-24 w-24 border-2 border-primary/20">
            <AvatarImage
              src={userData.picture.large}
              alt={`${userData.name.first} ${userData.name.last}`}
            />
            <AvatarFallback className="text-2xl">
              {userData.name.first[0]}
              {userData.name.last[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">
              {userData.name.first} {userData.name.last}
            </h2>
            <p className="text-muted-foreground">{userData.email}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {userData.location.city}, {userData.location.state},{" "}
              {userData.location.country}
            </p>
          </div>
          <div className="ml-auto hidden md:block">
            <div className="rounded-full bg-amber-400 p-3 text-xs font-bold text-[#3b3333]">
              Premium Account
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
