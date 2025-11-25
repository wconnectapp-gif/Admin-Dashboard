import React from 'react'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'
import { DashboardOverview } from './DashboardOverview'
import { BookingList } from './BookingList'

export function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 overflow-y-auto">
        <Topbar />
        <DashboardOverview />
        <BookingList />
      </div>
    </div>
  )
}
