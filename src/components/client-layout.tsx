"use client";

import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 text-slate-900 dark:bg-gray-950 dark:text-slate-100">
        <Navbar
          collapsed={collapsed}
          onToggleSidebar={() => setCollapsed((c) => !c)}
        />
        <div className="flex">
          <Sidebar collapsed={collapsed} />
          <main className="min-h-[calc(100vh-4rem)] flex-1 overflow-x-hidden p-4 md:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
