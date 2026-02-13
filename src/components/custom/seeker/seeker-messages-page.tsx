"use client";

import Image from "next/image";
import { MessageSquareMore, Search } from "lucide-react";

const chats = [
  { name: "Carlo Dela Cruz", msg: "I can arrive in 45 mins.", time: "2m", image: "/seeker/provider-carlo.svg", unread: 2 },
  { name: "Anne Rivera", msg: "Sharing my updated portfolio.", time: "9m", image: "/seeker/provider-anne.svg", unread: 0 },
  { name: "Mia Santos", msg: "Draft proposal sent ✅", time: "1h", image: "/seeker/provider-mia.svg", unread: 0 },
];

export function SeekerMessagesPage() {
  return (
    <div className="-mx-2 min-h-screen space-y-4 bg-slate-50 px-2 pb-28 pt-2">
      <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-2xl font-bold text-slate-900">Messages</h1>
        <p className="mt-1 text-sm text-slate-500">Stay updated with providers and booking threads.</p>
        <div className="mt-3 flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2.5">
          <Search className="h-4 w-4 text-slate-500" />
          <span className="text-sm text-slate-500">Search conversations</span>
        </div>
      </section>

      <section className="space-y-2">
        {chats.map((chat) => (
          <article key={chat.name} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image src={chat.image} alt={chat.name} fill className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-slate-900">{chat.name}</p>
              <p className="truncate text-xs text-slate-500">{chat.msg}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-500">{chat.time}</p>
              {chat.unread > 0 && <span className="mt-1 inline-block rounded-full bg-violet-600 px-2 py-0.5 text-[10px] text-white">{chat.unread}</span>}
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-indigo-900 p-4 text-white shadow-sm">
        <p className="inline-flex items-center gap-1 text-xs text-violet-200"><MessageSquareMore className="h-3.5 w-3.5" /> AI-moderated chat active</p>
        <p className="mt-1 text-sm text-slate-200">Trust and sentiment insights are enabled for safer transactions.</p>
      </section>

    </div>
  );
}
