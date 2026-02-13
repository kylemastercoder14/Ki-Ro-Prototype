"use client";

import Image from "next/image";
import {
  BadgeCheck,
  Brush,
  Building2,
  CalendarDays,
  Camera,
  ChevronDown,
  Clock3,
  Home,
  MapPin,
  Mic,
  Search,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
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
  image: string;
};

type Promo = {
  title: string;
  subtitle: string;
  cta: string;
  image: string;
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
    image: "/seeker/provider-mia.svg",
  },
  {
    name: "Carlo Dela Cruz",
    service: "Aircon Cleaning",
    eta: "Arrives in 45 mins",
    price: "₱1,200",
    rating: "4.8",
    badge: "Verified",
    image: "/seeker/provider-carlo.svg",
  },
  {
    name: "Anne Rivera",
    service: "Bridal Makeup",
    eta: "Slots this weekend",
    price: "₱3,500",
    rating: "5.0",
    badge: "Trusted Pro",
    image: "/seeker/provider-anne.svg",
  },
  {
    name: "Jules Fernandez",
    service: "Event Host",
    eta: "Books fast",
    price: "₱4,200",
    rating: "4.7",
    badge: "Popular",
    image: "/seeker/provider-jules.svg",
  },
];

const promos: Promo[] = [
  {
    title: "Emergency Home Repairs",
    subtitle: "Book verified electricians and plumbers in under 10 minutes.",
    cta: "Find help",
    image: "/seeker/promo-home.svg",
  },
  {
    title: "Creative Weekend Boost",
    subtitle: "Get photo, video, and design pros for your next launch.",
    cta: "Explore creatives",
    image: "/seeker/promo-creative.svg",
  },
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

        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <article className="rounded-xl bg-violet-50 px-2 py-2">
            <p className="text-[10px] text-violet-700">Trusted Pros</p>
            <p className="text-sm font-bold text-violet-900">1.2k+</p>
          </article>
          <article className="rounded-xl bg-indigo-50 px-2 py-2">
            <p className="text-[10px] text-indigo-700">Avg. Match Time</p>
            <p className="text-sm font-bold text-indigo-900">3 mins</p>
          </article>
          <article className="rounded-xl bg-sky-50 px-2 py-2">
            <p className="text-[10px] text-sky-700">Satisfaction</p>
            <p className="text-sm font-bold text-sky-900">98%</p>
          </article>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-900">Popular categories</h2>
          <button className="text-xs font-semibold text-violet-700">See all</button>
        </div>

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
              <div className="relative h-28 overflow-hidden rounded-2xl">
                <Image src={provider.image} alt={provider.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/10" />
                <div className="absolute inset-x-2 top-2 flex items-start justify-between text-white">
                  <span className="rounded-full bg-white/20 px-2 py-1 text-[10px] font-semibold backdrop-blur-sm">
                    {provider.badge}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/25 px-2 py-1 text-[10px] font-semibold">
                    <Star className="h-3 w-3 fill-amber-300 text-amber-300" /> {provider.rating}
                  </span>
                </div>
                <p className="absolute bottom-2 left-2 text-xs text-white/95">{provider.eta}</p>
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

      <section>
        <div className="mb-2 flex items-center justify-between px-1">
          <h2 className="text-lg font-bold text-slate-900">Featured collections</h2>
          <span className="text-xs text-slate-500">Updated daily</span>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-1">
          {promos.map((promo) => (
            <article key={promo.title} className="relative min-w-[300px] overflow-hidden rounded-3xl bg-slate-900">
              <Image src={promo.image} alt={promo.title} width={640} height={280} className="h-36 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 to-slate-900/35" />
              <div className="absolute inset-0 p-4 text-white">
                <h3 className="max-w-[220px] text-lg font-bold leading-tight">{promo.title}</h3>
                <p className="mt-1 max-w-[240px] text-xs text-slate-200">{promo.subtitle}</p>
                <button className="mt-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-900">
                  {promo.cta}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900">Your activity</h2>
          <button className="text-xs font-semibold text-violet-700">View all</button>
        </div>

        <div className="space-y-2">
          <article className="flex items-center justify-between rounded-2xl bg-slate-50 p-3">
            <div className="inline-flex items-start gap-2">
              <Clock3 className="mt-0.5 h-4 w-4 text-slate-500" />
              <div>
                <p className="text-xs font-semibold text-slate-800">Aircon cleaning inquiry</p>
                <p className="text-[11px] text-slate-500">2 providers responded • 8 minutes ago</p>
              </div>
            </div>
            <TrendingUp className="h-4 w-4 text-violet-600" />
          </article>

          <article className="flex items-center justify-between rounded-2xl bg-slate-50 p-3">
            <div className="inline-flex items-start gap-2">
              <Shield className="mt-0.5 h-4 w-4 text-slate-500" />
              <div>
                <p className="text-xs font-semibold text-slate-800">Secure payment ready</p>
                <p className="text-[11px] text-slate-500">GCash, Maya, BPI supported for your next booking</p>
              </div>
            </div>
            <BadgeCheck className="h-4 w-4 text-emerald-600" />
          </article>
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
    </div>
  );
}
