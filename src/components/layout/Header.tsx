"use client";

import React from "react";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Header({ type }: { type: "login" | "register" | "home" | "graph" }) {
  const { status } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  return (
    <header className="bg-white z-10 px-4 h-[74px] shadow-md fixed w-full">
        <div className="md:w-4/5 mx-auto flex items-center justify-between h-[74px] p-4">
        <a
            href="#"
            className="flex items-center cursor-pointer"
            onClick={e => {
              e.preventDefault();
              if (window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } 
              else{
                window.location.href = "/";
              }
            }}
            tabIndex={0}
            aria-label="Go to homepage"
            >
            <Image
              src={type === "graph" ? "/images/brand.jpg" : "/images/logo.jpg"}
              alt="logo Icon"
              width={48}
              height={48}
              className="shrink-0 rounded-xl"
            />
            <span className="ml-2 text-2xl lg:text-3xl font-bold text-sky-700 leading-6">
                Medibly
            </span>
        </a>
        <div className="flex items-center gap-4">
            <div className="sm:flex items-center gap-4 hidden">
            { type == "login" && (<span>New to Medibly?</span>)}
            { type == "register" && (<span>Already have an account?</span>)}
            { type == "home" && (
                <div className="sm:flex items-center gap-6 hidden">
                <a
                  href="#how-it-works"
                  className="text-base font-normal leading-6 text-gray-700 hover:text-sky-700 transition-colors"
                  onClick={e => {
                      e.preventDefault();
                      const el = document.getElementById("how-it-works");
                      if (el) {
                        const y = el.getBoundingClientRect().top + window.pageYOffset - 74;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                  }}
                >
                  How It Works
                </a>
                <a
                  href="#benefits"
                  className="text-base font-normal leading-6 text-gray-700 hover:text-sky-700 transition-colors"
                  onClick={e => {
                      e.preventDefault();
                      const el = document.getElementById("benefits");
                      if (el) {
                        const y = el.getBoundingClientRect().top + window.pageYOffset - 74;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                  }}
                >
                  Benefits
                </a>
                <a
                  href="#waitlist"
                  className="text-base font-normal leading-6 text-gray-700 hover:text-sky-700 transition-colors"
                  onClick={e => {
                      e.preventDefault();
                      const el = document.getElementById("waitlist");
                      if (el) {
                        const y = el.getBoundingClientRect().top + window.pageYOffset - 74;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                  }}
                >
                  Waitlist
                </a>
              </div>
            )}
            </div>
            <div className="flex items-center gap-1 ml-4">
                { status=="unauthenticated" && (type=="home"||type=="register") && (
                  <Link href="/login" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outline"
                      className="h-[42px] w-[80px] py-1 rounded-lg border border-sky-600 text-sky-600 text-base font-normal leading-5 hover:bg-sky-50 transition-colors"
                    >
                      Log In
                    </Button>
                  </Link>
                )}
                { status=="unauthenticated" && (type=="login") && (
                <Link href="/register" style={{ textDecoration: "none" }}>
                <Button
                  className="h-[42px] w-[80px] py-1 rounded-lg bg-sky-600 text-white text-base font-normal leading-5 hover:bg-sky-700 transition-colors"
                >
                  Sign Up
                </Button>
              </Link>
                )}
                { status=="authenticated" && (type=="home"||type=="graph") && (
                    <button 
                    className="h-[42px] w-[80px] py-1 rounded-lg border border-sky-600 text-sky-600 text-base font-normal leading-5 hover:bg-sky-50 transition-colors"
                    onClick={handleLogout}
                >
                    LogOut
                </button>
                )}
            </div>
            </div>
        </div>
    </header>
  );
}

