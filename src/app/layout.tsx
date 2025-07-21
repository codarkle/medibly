'use client';

import { SessionProvider } from 'next-auth/react';
import { Toaster } from "react-hot-toast"; 
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <title>Medibly</title>
        <link rel="icon" href="/images/brand.jpg" />
      </head>
      
      <body>
        <SessionProvider>
        <Toaster /> 
        <div className="main-container bg-gray-50 flex flex-col relative overflow-hidden mx-auto w-full min-h-screen">
          <div className="w-full relative flex flex-col">
            {children}
          </div>
        </div>
        </SessionProvider>
      </body>
    </html>
  );
}
