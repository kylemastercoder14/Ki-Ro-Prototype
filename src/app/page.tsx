"use client";

import { useMemo, useState, type ComponentType } from "react";
import {
  AlertTriangle,
  BarChart3,
  Bell,
  Bot,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Compass,
  Globe2,
  Home,
  Languages,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  User,
  Users,
  Wallet,
  WifiOff,
} from "lucide-react";

type Role = "SEEKER" | "PROVIDER" | "PARTNER" | "ADMIN";

type RoleTheme = {
  subtitle: string;
  accent: string;
  accentSoft: string;
  cardTone: string;
  nav: string[];
};

const roleThemes: Record<Role, RoleTheme> = {
  SEEKER: {
    subtitle: "Discover trusted help, book instantly",
    accent: "from-fuchsia-600 to-violet-500",
    accentSoft: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
    cardTone: "from-fuchsia-500/15 to-white",
    nav: ["Home", "Discover", "Messages", "Profile"],
  },
  PROVIDER: {
    subtitle: "Grow your gigs with integrity",
    accent: "from-cyan-600 to-blue-600",
    accentSoft: "bg-cyan-50 text-cyan-800 border-cyan-200",
    cardTone: "from-cyan-500/15 to-white",
    nav: ["Dashboard", "Gigs", "Leads", "Profile"],
  },
  PARTNER: {
    subtitle: "Scale regional communities",
    accent: "from-emerald-600 to-teal-600",
    accentSoft: "bg-emerald-50 text-emerald-800 border-emerald-200",
    cardTone: "from-emerald-500/15 to-white",
    nav: ["Overview", "Network", "Referrals", "Account"],
  },
  ADMIN: {
    subtitle: "Trust, compliance, and platform health",
    accent: "from-amber-500 to-orange-500",
    accentSoft: "bg-amber-50 text-amber-800 border-amber-200",
    cardTone: "from-amber-500/15 to-white",
    nav: ["Control", "Cases", "Insights", "Admin"],
  },
};

const seekerView = {
  quickFilters: ["Tech", "Creative", "Home Care", "Urgent Today"],
  highlights: [
    { label: "AI Match", value: "92% Fit" },
    { label: "Trust Score", value: "4.9" },
    { label: "Saved", value: "18 Gigs" },
  ],
  gigs: [
    {
      title: "On-demand Plumber",
      meta: "Makati • 1.2km • Available in 45 mins",
      price: "From PHP 850",
      rating: "4.9",
    },
    {
      title: "UX Portfolio Coach",
      meta: "Remote • Verified mentor",
      price: "From PHP 1,500",
      rating: "4.8",
    },
  ],
};

const providerView = {
  highlights: [
    { label: "Monthly Earnings", value: "PHP 48,250" },
    { label: "Open Leads", value: "12" },
    { label: "Profile Strength", value: "88%" },
  ],
  gigs: [
    { title: "Home Electrical Inspection", bookings: "8 bookings this week", rate: "PHP 2,200" },
    { title: "Smart Camera Installation", bookings: "5 bookings this week", rate: "PHP 3,800" },
  ],
};

const partnerView = {
  highlights: [
    { label: "Active Providers", value: "1,240" },
    { label: "Referral Credits", value: "PHP 15,660" },
    { label: "Conversion", value: "21.4%" },
  ],
  streams: [
    { name: "Calabarzon Upskilling Cohort", status: "Live", note: "132 providers enrolled" },
    { name: "Manila Creator Sprint", status: "Planning", note: "Kickoff in 6 days" },
  ],
};

const adminView = {
  highlights: [
    { label: "Dispute Queue", value: "14" },
    { label: "Fraud Alerts", value: "3 high risk" },
    { label: "DAU", value: "18.4K" },
  ],
  logs: [
    { title: "Payment mismatch flagged", level: "High", detail: "GCash reversal pending review" },
    { title: "Identity verification backlog", level: "Medium", detail: "27 provider KYC checks awaiting" },
  ],
};

const roles: Role[] = ["SEEKER", "PROVIDER", "PARTNER", "ADMIN"];

export default function Page() {
  const [activeRole, setActiveRole] = useState<Role>("SEEKER");
  const theme = useMemo(() => roleThemes[activeRole], [activeRole]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 p-3 sm:p-6">
      <div className="mx-auto w-full max-w-[420px] rounded-[2rem] border border-white/50 bg-white shadow-2xl shadow-slate-400/30">
        <div className="h-8 rounded-t-[2rem] bg-white px-5 pt-2 text-[11px] text-slate-500">
          11:03 AM
        </div>

        <div className="space-y-4 px-4 pb-6 pt-2">
          <header className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-400">KI-RO</p>
                <h1 className="text-xl font-bold text-slate-900">{activeRole} View</h1>
              </div>
              <button className="rounded-full border border-slate-200 p-2 text-slate-600">
                <Bell className="h-4 w-4" />
              </button>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-1">
              <div className="grid grid-cols-4 gap-1">
                {roles.map((role) => (
                  <button
                    key={role}
                    onClick={() => setActiveRole(role)}
                    className={`rounded-xl px-2 py-2 text-[11px] font-semibold transition ${
                      activeRole === role
                        ? `bg-gradient-to-r text-white ${theme.accent}`
                        : "text-slate-500"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex flex-1 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2.5">
                <Search className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-500">Search gigs, leads, or cases</span>
              </div>
              <button className="rounded-2xl border border-slate-200 bg-white p-2.5 text-slate-600">
                <SlidersHorizontal className="h-4 w-4" />
              </button>
            </div>
          </header>

          <section className={`rounded-3xl bg-gradient-to-r p-4 text-white ${theme.accent}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/80">Location</p>
                <p className="mt-1 flex items-center gap-1 text-sm font-semibold">
                  <MapPin className="h-3.5 w-3.5" /> Calabarzon / Manila
                </p>
              </div>
              <ShieldCheck className="h-6 w-6 text-white/90" />
            </div>
            <h2 className="mt-3 text-lg font-bold">{theme.subtitle}</h2>
            <p className="text-xs text-white/80">K-H-I-R-O aligned matching with secure, AI-assisted interactions.</p>
          </section>

          <section className="grid grid-cols-3 gap-2">
            {getHighlights(activeRole).map((item) => (
              <article
                key={item.label}
                className={`rounded-2xl border bg-gradient-to-b p-3 ${theme.cardTone} border-slate-200`}
              >
                <p className="text-[11px] text-slate-500">{item.label}</p>
                <p className="mt-1 text-sm font-bold text-slate-900">{item.value}</p>
              </article>
            ))}
          </section>

          {activeRole === "SEEKER" && (
            <section className="space-y-3">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {seekerView.quickFilters.map((filter) => (
                  <span
                    key={filter}
                    className="whitespace-nowrap rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1.5 text-xs font-semibold text-fuchsia-700"
                  >
                    {filter}
                  </span>
                ))}
              </div>
              {seekerView.gigs.map((gig) => (
                <article key={gig.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{gig.title}</h3>
                      <p className="mt-1 text-xs text-slate-500">{gig.meta}</p>
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-700">
                      <Star className="h-3 w-3" /> {gig.rating}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-800">{gig.price}</p>
                    <button className={`rounded-xl border px-3 py-1.5 text-xs font-semibold ${theme.accentSoft}`}>
                      Book Now
                    </button>
                  </div>
                </article>
              ))}
            </section>
          )}

          {activeRole === "PROVIDER" && (
            <section className="space-y-3">
              {providerView.gigs.map((gig) => (
                <article key={gig.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <h3 className="text-sm font-bold text-slate-900">{gig.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{gig.bookings}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-800">{gig.rate}</p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-cyan-50 px-2 py-1 text-xs font-semibold text-cyan-800">
                      <CheckCircle2 className="h-3 w-3" /> Priority visible
                    </span>
                  </div>
                </article>
              ))}
              <FeatureStrip
                items={[
                  { icon: Briefcase, text: "Gig management" },
                  { icon: BarChart3, text: "Predictive trends" },
                  { icon: Bot, text: "Profile optimizer" },
                ]}
              />
            </section>
          )}

          {activeRole === "PARTNER" && (
            <section className="space-y-3">
              {partnerView.streams.map((stream) => (
                <article key={stream.name} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-slate-900">{stream.name}</h3>
                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700">
                      {stream.status}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">{stream.note}</p>
                </article>
              ))}
              <FeatureStrip
                items={[
                  { icon: Globe2, text: "Global opportunity gateway" },
                  { icon: Users, text: "Community referrals" },
                  { icon: Wallet, text: "15% affiliate model" },
                ]}
              />
            </section>
          )}

          {activeRole === "ADMIN" && (
            <section className="space-y-3">
              {adminView.logs.map((log) => (
                <article key={log.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-slate-900">{log.title}</h3>
                    <span className="rounded-full bg-orange-50 px-2 py-1 text-[11px] font-semibold text-orange-700">
                      {log.level}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">{log.detail}</p>
                </article>
              ))}
              <FeatureStrip
                items={[
                  { icon: AlertTriangle, text: "AI fraud detection" },
                  { icon: Languages, text: "English / Tagalog support" },
                  { icon: WifiOff, text: "Offline-safe cache checks" },
                ]}
              />
            </section>
          )}

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-800">Real-time Chat</p>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[11px] font-medium text-slate-600">
                <MessageCircle className="h-3 w-3" /> Malasakit AI moderated
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Secure messaging, sentiment checks, and trust signals across bookings and provider interactions.
            </p>
          </section>
        </div>

        <nav className="sticky bottom-0 grid grid-cols-4 border-t border-slate-200 bg-white px-4 py-2">
          {theme.nav.map((label, index) => {
            const Icon = [Home, Compass, CalendarDays, User][index];
            return (
              <button key={label} className="flex flex-col items-center gap-1 py-1">
                <Icon className={`h-4 w-4 ${index === 0 ? "text-slate-900" : "text-slate-400"}`} />
                <span className={`text-[10px] font-semibold ${index === 0 ? "text-slate-900" : "text-slate-400"}`}>
                  {label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </main>
  );
}

function getHighlights(role: Role) {
  if (role === "SEEKER") return seekerView.highlights;
  if (role === "PROVIDER") return providerView.highlights;
  if (role === "PARTNER") return partnerView.highlights;
  return adminView.highlights;
}

function FeatureStrip({
  items,
}: {
  items: { icon: ComponentType<{ className?: string }>; text: string }[];
}) {
  return (
    <div className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-3">
      {items.map(({ icon: Icon, text }) => (
        <div key={text} className="flex items-center justify-between text-xs text-slate-600">
          <span className="inline-flex items-center gap-2">
            <Icon className="h-3.5 w-3.5 text-slate-500" /> {text}
          </span>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
        </div>
      ))}
    </div>
  );
}

