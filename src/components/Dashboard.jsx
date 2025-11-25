import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { DashboardOverview } from "./DashboardOverview";
import { BookingList } from "./BookingList";

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // for mobile toggle

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto transition-all">
        {/* Topbar */}
        <Topbar />

        {/* Content */}
        <main className="p-4 md:p-6">
          <DashboardOverview />
          <BookingList />
        </main>
      </div>
    </div>
  );
}
