"use client";

import { CalendarDays, CircleCheckBig, Clock3, Receipt, Wallet } from "lucide-react";

const upcoming = [
  { title: "Aircon Cleaning", provider: "Carlo Dela Cruz", time: "Today • 4:00 PM", status: "Confirmed" },
  { title: "Bridal Makeup Trial", provider: "Anne Rivera", time: "Sat • 10:00 AM", status: "Pending payment" },
];

export function SeekerBookingsPage() {
  return (
    <div className="-mx-2 min-h-screen space-y-4 bg-slate-50 px-2 pb-28 pt-2">
      <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-2xl font-bold text-slate-900">Bookings</h1>
        <p className="mt-1 text-sm text-slate-500">Track your upcoming and completed services.</p>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <article className="rounded-xl bg-violet-50 p-2 text-center">
            <p className="text-[10px] text-violet-700">Upcoming</p>
            <p className="text-sm font-bold text-violet-900">2</p>
          </article>
          <article className="rounded-xl bg-emerald-50 p-2 text-center">
            <p className="text-[10px] text-emerald-700">Completed</p>
            <p className="text-sm font-bold text-emerald-900">18</p>
          </article>
          <article className="rounded-xl bg-sky-50 p-2 text-center">
            <p className="text-[10px] text-sky-700">Saved</p>
            <p className="text-sm font-bold text-sky-900">₱3,250</p>
          </article>
        </div>
      </section>

      <section className="space-y-2">
        {upcoming.map((booking) => (
          <article key={booking.title} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-bold text-slate-900">{booking.title}</p>
                <p className="text-xs text-slate-500">{booking.provider}</p>
              </div>
              <span className="rounded-full bg-violet-50 px-2 py-1 text-[10px] font-semibold text-violet-700">{booking.status}</span>
            </div>
            <p className="mt-2 inline-flex items-center gap-1 text-xs text-slate-600">
              <CalendarDays className="h-3.5 w-3.5" /> {booking.time}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <h2 className="mb-2 text-sm font-semibold text-slate-900">Quick actions</h2>
        <div className="grid grid-cols-2 gap-2">
          <button className="inline-flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-left text-xs font-semibold text-slate-700"><Wallet className="h-4 w-4" /> Pay balance</button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-left text-xs font-semibold text-slate-700"><Receipt className="h-4 w-4" /> View receipts</button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-left text-xs font-semibold text-slate-700"><Clock3 className="h-4 w-4" /> Reschedule</button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-left text-xs font-semibold text-slate-700"><CircleCheckBig className="h-4 w-4" /> Mark done</button>
        </div>
      </section>

    </div>
  );
}
