import React from "react";

export function DashboardOverview() {
  const stats = [
    { title: "Total Bookings", value: "1,234", change: "+5.2% this month", color: "text-green-600" },
    { title: "Upcoming Appointments", value: "56", change: "+10% this week", color: "text-green-600" },
    { title: "Completed", value: "987", change: "-1.5% this month", color: "text-red-600" },
    { title: "Pending", value: "45", change: "+2.0% this week", color: "text-green-600" },
  ];

  return (
    <div className="mb-10 p-4 md:p-6">
      <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
      <p className="text-green-600 mb-6">
        Welcome back, Admin! Here's what's happening today.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm flex flex-col justify-between"
            key={item.title}
          >
            <p className="text-gray-600 font-medium">{item.title}</p>
            <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
            <p className={`text-sm mt-1 ${item.color}`}>{item.change}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardOverview;
