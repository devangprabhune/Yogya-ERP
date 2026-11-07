import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClientLayout } from "@/components/client-layout";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yogya ERP",
  description: "ERP with Light / Dark Mode",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} min-h-screen bg-gray-50 text-slate-900 antialiased transition-colors duration-300 dark:bg-gray-950 dark:text-slate-100`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
