import type { JSX } from "react";
import { Boxes, CalendarCheck, ShieldCheck } from "lucide-react";

export const MODULE_NOTIFICATIONS: Record<string, { message: string; pending: number }> = {
  "/stock": { message: "5 items below reorder level", pending: 3 },
  "/attendance": { message: "2 timesheets awaiting approval", pending: 2 },
  "/compliance": { message: "All policies up to date", pending: 0 },
};

export const MODULE_ICONS: Record<string, JSX.Element> = {
  "/stock": <Boxes className="w-6 h-6" />,
  "/attendance": <CalendarCheck className="w-6 h-6" />,
  "/compliance": <ShieldCheck className="w-6 h-6" />,
};
