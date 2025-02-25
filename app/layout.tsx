"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { cn } from "@/lib/utils";
import { ThemeContext } from "@/components/ThemeContext";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [theme, setTheme] = useState<"white" | "dark">("dark");
    return (
        <html lang="en">
            <body
                className={cn(
                    `${geistSans.variable} ${geistMono.variable} antialiased`,
                    theme,
                )}
            >
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <SidebarProvider>
                        <Toaster />
                        <AppSidebar />
                        <SidebarTrigger />
                        <main className="w-full flex justify-center px-10 py-20">
                            {children}
                        </main>
                    </SidebarProvider>
                </ThemeContext.Provider>
            </body>
        </html>
    );
}
