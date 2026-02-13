"use client";

import {
  BadgeCheck,
  Briefcase,
  Brush,
  Building2,
  CalendarDays,
  Camera,
  ChevronDown,
  Home,
  MapPin,
  MessageCircle,
  Mic,
  Search,
  Sparkles,
  Star,
  User,
  Wrench,
} from "lucide-react";

type Category = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
};

type Provider = {
  name: string;
  service: string;
  eta: string;
  price: string;
  rating: string;
  badge: string;
  color: string;
};

const categories: Category[] = [
  { title: "Tech", icon: Wrench },
  { title: "Creative", icon: Camera },
  { title: "Home", icon: Home },
  { title: "Beauty", icon: Brush },
  { title: "Events", icon: CalendarDays },
  { title: "Business", icon: Building2 },
];

const providers: Provider[] = [
  {
    name: "Mia Santos",
    service: "UI/UX Design",
    eta: "Available today",
    price: "₱2,800",
    rating: "4.9",
    badge: "Top Rated",
    color: "from-violet-500 to-indigo-600",
  },
  {
    name: "Carlo Dela Cruz",
    service: "Aircon Cleaning",
    eta: "Arrives in 45 mins",
    price: "₱1,200",
    rating: "4.8",
    badge: "Verified",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Anne Rivera",
    service: "Bridal Makeup",
    eta: "Slots this weekend",
    price: "₱3,500",
    rating: "5.0",
    badge: "Trusted Pro",
    color: "from-fuchsia-500 to-violet-600",
  },
  {
    name: "Jules Fernandez",
    service: "Event Host",
    eta: "Books fast",
    price: "₱4,200",
    rating: "4.7",
    badge: "Popular",
    color: "from-indigo-500 to-slate-700",
  },
];

const bottomNav = [
  { label: "Home", icon: Home, active: true },
  { label: "Search", icon: Search, active: false },
  { label: "Bookings", icon: Briefcase, active: false },
  { label: "Messages", icon: MessageCircle, active: false },
  { label: "Profile", icon: User, active: false },
];

export function SeekerDashboard() {
  return (
    <div className="-mx-2 min-h-screen space-y-4 bg-slate-50 px-2 pb-28 pt-2">
      <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <div className="mb-3 flex items-center justify-between">
          <button className="inline-flex items-center gap-1.5 text-lg font-semibold text-slate-900">
            Dasmariñas, Cavite
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </button>
          <div className="inline-flex items-center gap-2">
            <button className="rounded-full border border-slate-200 p-2 text-slate-600">
              <User className="h-4 w-4" />
            </button>
            <button className="rounded-full border border-slate-200 p-2 text-slate-600">
              <MapPin className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 shadow-inner">
          <Search className="h-4 w-4 text-slate-500" />
          <span className="text-sm text-slate-500">What service do you need?</span>
          <button className="ml-auto rounded-full bg-violet-600 p-2 text-white" aria-label="Voice search">
            <Mic className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <div className="grid grid-cols-3 gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.title}
                className="flex flex-col items-center gap-2 rounded-2xl bg-slate-50 px-2 py-3 text-center"
              >
                <span className="inline-flex rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 p-2 text-white shadow-sm">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-medium text-slate-700">{category.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-4 text-white shadow-md">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xl font-bold">₱500 off first booking</p>
            <p className="mt-1 text-sm text-white/85">Use KIROSTART on services above ₱2,000</p>
          </div>
          <button className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-semibold text-indigo-700">
            Book now
          </button>
        </div>
      </section>

      <section>
        <div className="mb-2 flex items-center justify-between px-1">
          <h2 className="text-lg font-bold text-slate-900">Recommended for you</h2>
          <button className="text-xs font-semibold text-violet-700">See all</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-1">
          {providers.map((provider) => (
            <article
              key={provider.name}
              className="min-w-[230px] rounded-3xl bg-white p-3 shadow-sm ring-1 ring-slate-200"
            >
              <div className={`h-28 rounded-2xl bg-gradient-to-br ${provider.color} p-3 text-white`}>
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-white/20 px-2 py-1 text-[10px] font-semibold">{provider.badge}</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/20 px-2 py-1 text-[10px] font-semibold">
                    <Star className="h-3 w-3 fill-amber-300 text-amber-300" /> {provider.rating}
                  </span>
                </div>
                <p className="mt-8 text-xs text-white/90">{provider.eta}</p>
              </div>

              <div className="mt-3">
                <p className="text-sm font-semibold text-slate-900">{provider.name}</p>
                <p className="text-xs text-slate-500">{provider.service}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{provider.price}</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700">
                    <BadgeCheck className="h-3 w-3" /> Trust badge
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-900 p-4 text-white">
          <p className="inline-flex items-center gap-1 text-xs text-violet-200">
            <Sparkles className="h-3.5 w-3.5" /> Kiro Care
          </p>
          <h3 className="mt-1 text-xl font-bold">Need urgent home help tonight?</h3>
          <p className="mt-1 text-sm text-slate-200">Chat with verified providers and get ETA in minutes.</p>
          <button className="mt-3 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900">Start chat</button>
        </div>
      </section>

      <section className="fixed bottom-3 left-1/2 z-20 w-[calc(100%-1.5rem)] max-w-[398px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-xl backdrop-blur">
        <div className="grid grid-cols-5 gap-1">
          {bottomNav.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`flex flex-col items-center gap-1 rounded-xl px-1 py-2 text-[10px] font-medium ${
                  item.active ? "bg-violet-600 text-white" : "text-slate-500"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
