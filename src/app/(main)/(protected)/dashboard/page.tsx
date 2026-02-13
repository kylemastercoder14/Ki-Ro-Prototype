"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bell,
  Briefcase,
  Building2,
  CalendarCheck2,
  ChartNoAxesCombined,
  Globe,
  Handshake,
  Languages,
  MapPin,
  MessageSquare,
  Search,
  Shield,
  Sparkles,
  Star,
  UserRound,
  Wallet,
  WifiOff,
} from "lucide-react";
import { getUser } from "@/lib/auth-mock";
import type { Role } from "@/lib/auth-mock";

type Metric = { label: string; value: string };

type RoleContent = {
  subtitle: string;
  accent: string;
  glow: string;
  metrics: Metric[];
  cards: Array<{
    title: string;
    note: string;
    chip: string;
    cta: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  strip: Array<{ text: string; icon: React.ComponentType<{ className?: string }> }>;
};

const contentByRole: Record<Role, RoleContent> = {
  SEEKER: {
    subtitle: "Find trusted services near you",
    accent: "from-rose-500 to-orange-500",
    glow: "shadow-rose-200/70",
    metrics: [
      { label: "AI Match", value: "94%" },
      { label: "Saved", value: "12" },
      { label: "Trust", value: "4.9" },
    ],
    cards: [
      {
        title: "On-call Home Electrician",
        note: "Makati • 1.6km • Arrives in 40 mins",
        chip: "PHP 1,200",
        cta: "Book now",
        icon: Search,
      },
      {
        title: "Creative Product Photographer",
        note: "Remote + On-site • Verified portfolio",
        chip: "PHP 2,500",
        cta: "View offer",
        icon: Sparkles,
      },
    ],
    strip: [
      { text: "Natural language search", icon: Search },
      { text: "AI-moderated chat", icon: MessageSquare },
      { text: "GCash / BPI ready", icon: Wallet },
    ],
  },
  PROVIDER: {
    subtitle: "Track gigs, income, and growth",
    accent: "from-sky-500 to-cyan-600",
    glow: "shadow-cyan-200/70",
    metrics: [
      { label: "Earnings", value: "PHP 48,250" },
      { label: "Open jobs", value: "12" },
      { label: "Rating", value: "4.8" },
    ],
    cards: [
      {
        title: "Smart CCTV Installation",
        note: "5 active bookings this week",
        chip: "Priority",
        cta: "Manage gig",
        icon: Briefcase,
      },
      {
        title: "K-H-I-R-O Profile Score",
        note: "Knowledge and Integrity can be improved",
        chip: "88%",
        cta: "Optimize profile",
        icon: ChartNoAxesCombined,
      },
    ],
    strip: [
      { text: "Predictive demand trends", icon: BarChart3 },
      { text: "Training upsells", icon: Handshake },
      { text: "Global opportunity gateway", icon: Globe },
    ],
  },
  PARTNER: {
    subtitle: "Scale regions and provider networks",
    accent: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-200/70",
    metrics: [
      { label: "Providers", value: "1,240" },
      { label: "Referrals", value: "PHP 15,660" },
      { label: "Conversion", value: "21.4%" },
    ],
    cards: [
      {
        title: "Calabarzon Upskilling Cohort",
        note: "132 providers currently enrolled",
        chip: "Live",
        cta: "Open stream",
        icon: Building2,
      },
      {
        title: "Affiliate Campaign",
        note: "15% commission model, 38 active advocates",
        chip: "Trending",
        cta: "View campaign",
        icon: Handshake,
      },
    ],
    strip: [
      { text: "Enterprise analytics reports", icon: BarChart3 },
      { text: "Social referral loops", icon: UserRound },
      { text: "Cross-border demand alerts", icon: Globe },
    ],
  },
  ADMIN: {
    subtitle: "Monitor trust and platform operations",
    accent: "from-amber-500 to-orange-600",
    glow: "shadow-amber-200/70",
    metrics: [
      { label: "Disputes", value: "14" },
      { label: "Fraud risk", value: "3 high" },
      { label: "DAU", value: "18.4K" },
    ],
    cards: [
      {
        title: "Payment anomaly: GCash",
        note: "Reversal mismatch detected for order #1183",
        chip: "High",
        cta: "Open case",
        icon: AlertTriangle,
      },
      {
        title: "Identity queue backlog",
        note: "27 provider KYC reviews pending",
        chip: "Medium",
        cta: "Review queue",
        icon: Shield,
      },
    ],
    strip: [
      { text: "AI fraud detection", icon: Shield },
      { text: "RA 10173 compliance checks", icon: BadgeCheck },
      { text: "Offline cache monitoring", icon: WifiOff },
    ],
  },
};

const roles: Role[] = ["SEEKER", "PROVIDER", "PARTNER", "ADMIN"];

export default function Page() {
  const [activeRole, setActiveRole] = useState<Role>(() => getUser()?.role ?? "SEEKER");

  const content = useMemo(() => contentByRole[activeRole], [activeRole]);

  return (
    <div className="space-y-4 pb-2">
      <section className="relative overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-5 text-white shadow-2xl shadow-slate-300/50">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

        <div className="relative z-10">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">Ki-Ro Dashboard</p>
              <h1 className="mt-2 text-2xl font-bold">{activeRole}</h1>
              <p className="mt-1 text-sm text-white/80">{content.subtitle}</p>
            </div>
            <button className="rounded-full border border-white/20 bg-white/10 p-2">
              <Bell className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-3 py-2.5">
            <MapPin className="h-4 w-4 text-white/80" />
            <span className="text-xs text-white/80">Calabarzon / Manila</span>
            <div className="ml-auto inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-1 text-[10px] font-semibold">
              <Shield className="h-3 w-3" /> Trusted network
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-1">
        <div className="grid grid-cols-4 gap-1">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`rounded-xl px-2 py-2 text-[11px] font-semibold transition ${
                activeRole === role
                  ? `bg-gradient-to-r text-white ${content.accent}`
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-3 gap-2">
        {content.metrics.map((item) => (
          <article
            key={item.label}
            className={`rounded-2xl border border-slate-200 bg-white p-3 shadow-lg ${content.glow}`}
          >
            <p className="text-[11px] text-slate-500">{item.label}</p>
            <p className="mt-1 text-sm font-bold text-slate-900">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="space-y-3">
        {content.cards.map((card) => {
          const Icon = card.icon;
          return (
            <article
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/70"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="inline-flex items-center gap-2">
                  <div className={`rounded-xl bg-gradient-to-r p-2 text-white ${content.accent}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{card.title}</h3>
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-semibold text-slate-600">
                  {card.chip}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-500">{card.note}</p>
              <button className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-slate-700">
                {card.cta} <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </article>
          );
        })}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/70">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900">Core Features</h2>
          <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600">
            Prototype
          </span>
        </div>

        <div className="space-y-2">
          {content.strip.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2"
              >
                <span className="inline-flex items-center gap-2 text-xs text-slate-700">
                  <Icon className="h-3.5 w-3.5 text-slate-500" />
                  {item.text}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-slate-900">Live Chat and Notifications</p>
            <p className="mt-1 text-xs text-slate-500">
              AI-moderated messaging with sentiment and trust scoring across bookings.
            </p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-[10px] font-semibold text-indigo-700">
            <MessageSquare className="h-3 w-3" /> Active
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-center">
            <CalendarCheck2 className="mx-auto h-4 w-4 text-slate-500" />
            <p className="mt-1 text-[10px] font-semibold text-slate-600">Bookings</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-center">
            <Star className="mx-auto h-4 w-4 text-slate-500" />
            <p className="mt-1 text-[10px] font-semibold text-slate-600">Ratings</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-center">
            <Languages className="mx-auto h-4 w-4 text-slate-500" />
            <p className="mt-1 text-[10px] font-semibold text-slate-600">EN / TL</p>
          </div>
        </div>
      </section>
    </div>
  );
}


