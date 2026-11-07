"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Boxes, CalendarCheck, LayoutDashboard, ShieldCheck } from "lucide-react";
import { MODULE_NOTIFICATIONS } from "@/lib/notifications";

const navItems = [
  {
    href: "/",
    label: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5 shrink-0" />,
  },
  {
    href: "/stock",
    label: "Stock",
    icon: <Boxes className="w-5 h-5 shrink-0" />,
  },
  {
    href: "/attendance",
    label: "Attendance",
    icon: <CalendarCheck className="w-5 h-5 shrink-0" />,
  },
  {
    href: "/compliance",
    label: "Compliance",
    icon: <ShieldCheck className="w-5 h-5 shrink-0" />,
  },
];

export function Sidebar({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();

  return (
    <aside
      className={`sticky top-16 flex h-[calc(100vh-4rem)] shrink-0 flex-col overflow-y-auto border-r border-gray-200 bg-white text-slate-900 transition-all duration-300 dark:border-gray-700 dark:bg-gray-900 dark:text-slate-100 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <nav className="mt-4 flex-1 space-y-1 px-3">
        {navItems.map((item) => {
          const active = pathname === item.href;
          const notif = MODULE_NOTIFICATIONS[item.href];
          const pending = notif ? notif.pending : 0;

          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={`relative flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                active
                  ? "bg-cyan-500 text-white shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  : "text-slate-600 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-gray-800"
              } ${collapsed ? "justify-center" : ""}`}
            >
              {item.icon}
              {!collapsed && <span className="truncate">{item.label}</span>}
              {pending > 0 && (
                <span
                  className={`flex items-center gap-1.5 ${
                    collapsed ? "absolute right-2 top-2" : "ml-auto"
                  }`}
                >
                  <span className="notify-dot" aria-hidden="true"></span>
                  {!collapsed && (
                    <span className="text-[10px] font-bold text-red-500">{pending}</span>
                  )}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div
        className={`border-t border-gray-200 dark:border-gray-700 ${
          collapsed ? "p-2" : "p-4"
        }`}
      >
        {!collapsed && (
          <div className="mb-2 text-xs text-slate-500 dark:text-slate-400">v1.0.0</div>
        )}
        <div
          className={`flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-white ${
            collapsed ? "h-9 w-9 text-xs" : "h-8 w-8 text-sm"
          }`}
        >
          Y
        </div>
      </div>
    </aside>
  );
}
