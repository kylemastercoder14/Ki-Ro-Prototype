"use client";

import Image from "next/image";
import { BadgeCheck, CreditCard, Settings, Shield, UserPen } from "lucide-react";

export function SeekerProfilePage() {
  return (
    <div className="-mx-2 min-h-screen space-y-4 bg-slate-50 px-2 pb-28 pt-2">
      <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">Profile</h1>
          <div className="inline-flex gap-2 text-slate-600">
            <button className="rounded-full border border-slate-200 p-2"><Settings className="h-4 w-4" /></button>
            <button className="rounded-full border border-slate-200 p-2"><UserPen className="h-4 w-4" /></button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-violet-500/80">
            <Image src="/seeker/profile-avatar.svg" alt="Profile" fill className="object-cover" />
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">John, 37</p>
            <p className="mt-1 inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
              <BadgeCheck className="h-4 w-4 text-violet-600" /> Open to chat
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <div className="grid grid-cols-2 gap-2">
          <article className="rounded-2xl bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Profile completion</p>
            <p className="text-2xl font-bold text-slate-900">82%</p>
          </article>
          <article className="rounded-2xl bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Credits</p>
            <p className="text-2xl font-bold text-slate-900">350</p>
          </article>
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-600 p-5 text-white shadow-sm">
        <p className="text-2xl font-bold">Ki-Ro Premium</p>
        <p className="mt-2 text-sm text-violet-100">Get priority matching, lower service fees, and premium support.</p>
        <button className="mt-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-indigo-700">Upgrade from ₱499/mo</button>
      </section>

      <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <div className="space-y-2 text-sm">
          <button className="flex w-full items-center justify-between rounded-xl bg-slate-50 px-3 py-3 text-slate-700"><span className="inline-flex items-center gap-2"><Shield className="h-4 w-4" /> Safety Center</span><span>›</span></button>
          <button className="flex w-full items-center justify-between rounded-xl bg-slate-50 px-3 py-3 text-slate-700"><span className="inline-flex items-center gap-2"><CreditCard className="h-4 w-4" /> Payment Methods</span><span>›</span></button>
        </div>
      </section>

    </div>
  );
}
