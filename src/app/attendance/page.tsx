export default function AttendancePage() {
  return (
    <div className="max-w-3xl">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 mb-6 shadow-sm dark:shadow-lg">
        <h1 className="text-2xl font-bold dark:text-white">Attendance</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Track attendance records and pending timesheets.
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm dark:shadow-lg">
        <p className="text-slate-600 dark:text-slate-400">Attendance module content goes here.</p>
      </div>
    </div>
  );
}
