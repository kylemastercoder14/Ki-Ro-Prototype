"use client";

import Image from "next/image";
import { ArrowLeft, Mic, Search, Sparkles } from "lucide-react";

const suggestions = ["cleaning services", "wedding makeup", "pc repair", "event host"];

const items = [
  { name: "Electrician", image: "/seeker/provider-carlo.svg" },
  { name: "Photographer", image: "/seeker/provider-mia.svg" },
  { name: "Makeup Artist", image: "/seeker/provider-anne.svg" },
  { name: "Event Host", image: "/seeker/provider-jules.svg" },
  { name: "Plumber", image: "/seeker/promo-home.svg" },
  { name: "Graphic Design", image: "/seeker/promo-creative.svg" },
];

export function SeekerSearchPage() {
  return (
    <div className="-mx-2 min-h-screen space-y-4 bg-slate-50 px-2 pb-28 pt-2">
      <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <div className="flex items-center gap-2">
          <button className="rounded-full p-2 text-slate-700">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex flex-1 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2.5">
            <Search className="h-4 w-4 text-slate-500" />
            <span className="text-sm text-slate-500">Ask or search anything</span>
            <Mic className="ml-auto h-4 w-4 text-violet-600" />
          </div>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto">
          {suggestions.map((term) => (
            <button key={term} className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
              {term}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 px-1 text-2xl font-bold text-slate-900">Popular searches</h2>
        <div className="grid grid-cols-3 gap-2">
          {items.map((item) => (
            <article key={item.name} className="rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200">
              <div className="relative h-24 overflow-hidden rounded-xl">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <p className="mt-2 text-center text-xs font-semibold text-slate-800">{item.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <p className="inline-flex items-center gap-1 text-xs font-semibold text-violet-700">
          <Sparkles className="h-3.5 w-3.5" /> AI search tips
        </p>
        <ul className="mt-2 space-y-1 text-xs text-slate-600">
          <li>• Add your budget and preferred schedule to get better matches.</li>
          <li>• Use location names like &quot;Dasmariñas&quot; for nearby providers.</li>
          <li>• Search in natural language, e.g. &quot;Need makeup artist for Friday&quot;.</li>
        </ul>
      </section>

    </div>
  );
}
