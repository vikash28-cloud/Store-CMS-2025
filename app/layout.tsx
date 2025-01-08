import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { ModelProvider } from "@/Providers/model-provider";
import { ToastProvider } from "@/Providers/toast-provider";

const inter =Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider/>
        <ModelProvider/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
