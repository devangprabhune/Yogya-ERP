import Link from "next/link";
import { MODULE_NOTIFICATIONS, MODULE_ICONS } from "@/lib/notifications";

const moduleOrder = ["/stock", "/attendance", "/compliance"];

const moduleLabels: Record<string, string> = {
  "/stock": "Stock",
  "/attendance": "Attendance",
  "/compliance": "Compliance",
};

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 mb-8 shadow-sm dark:shadow-lg">
        <h1 className="text-3xl font-bold mb-2 dark:text-white">Dashboard</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Latest notifications and pending actions across your modules.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {moduleOrder.map((href) => {
          const notif = MODULE_NOTIFICATIONS[href];
          const pending = notif ? notif.pending : 0;
          const icon = MODULE_ICONS[href];

          return (
            <Link key={href} href={href} className="block">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    {icon}
                  </div>
                  {pending > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="notify-dot" aria-hidden="true"></span>
                      <span className="text-xs font-bold text-red-500">{pending}</span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{moduleLabels[href]}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {notif.message}
                </p>
                <button className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-cyan-500 hover:text-white dark:border-gray-600 dark:text-slate-300">
                  Open →
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
