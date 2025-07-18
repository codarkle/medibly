"use client"

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react"; 
import { Button } from "@/components/ui/button" 
import { useRouter } from 'next/navigation';

export default function LogIn() 
{
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Validation function
  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      signIn("credentials", {
        redirect: true,
        callbackUrl: "/graph",
        email: formData.email,
        password: formData.password,
      }).then((res) => {
        if (!res) {
          toast.error("Unknown error occurred.");
          return;
        }
        setLoading(false);
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("You logged in successfully.");
        }
      });
    } else {
      // Show first error as toast
      if (errors.email) {
        toast.error(errors.email);
      } else if (errors.password) {
        toast.error(errors.password);
      } else {
        toast.error("Please fill in all required fields.");
      }
    }
  };

  return (
      <div className="w-full max-w-md flex flex-col items-center">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 text-center mb-4 ">
          Log In to Medibly
        </h1>
        <span className="block text-base sm:text-lg text-gray-600 text-center mb-6 sm:mb-8 px-4">
          Welcome back! Sign in to access your account
        </span>
        <form onSubmit={handleSubmit} className="w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email address"
              className={`w-full h-12 px-4 rounded-md border bg-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("password", e.target.value)}
                placeholder="Enter your password"
                className={`w-full h-12 px-4 rounded-md border bg-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 pr-10 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-3 top-1/2 -translate-y-1/2 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-gray-500" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-500" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          
          <Link
              href="/reset-password"
              className="font-normal text-sky-600 text-base underline p-0 h-auto text-right"
            >
              Forgot Password?
            </Link>
          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className={`w-full h-12 rounded-md mt-2 flex items-center justify-center text-base font-semibold bg-sky-600 text-white hover:bg-sky-700
                ${ loading ? 'bg-sky-400 cursor-not-allowed' : 'bg-sky-600 hover:bg-sky-700' }
            `}
          >
            {loading ? "Logging in..." : "Log In"}
          </Button>
        <div className="w-full flex justify-center border-t border-gray-200 pt-6 mt-2">
          <span className="text-base text-gray-600">
            Don&apost have an account?{" "}
            <Link
              href="/register"
              className="font-normal text-sky-600 text-base underline p-0 h-auto"
            >
              Sign Up
            </Link>
          </span>
        </div>
        </form>
      </div>
  );
}
