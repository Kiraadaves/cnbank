"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Store all user data in localStorage
    localStorage.setItem(
      "userData",
      JSON.stringify({
        name,
        email,
      })
    );
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#a7abae13] ">
      <div className="bg-white p-8 rounded-lg shadow-md md:w-[60%] lg:w-[40%] w-[94%]">
        <h1 className="text-2xl font-bold mb-6 text-center text-[#0073ff]">
          Login to your Account
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-base text-gray-800 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-base text-gray-800 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-base text-gray-800 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0073ff] text-white py-3 rounded-md hover:bg-blue-700 mt-4"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
