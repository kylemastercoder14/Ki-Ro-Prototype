/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Briefcase, Building2, Shield } from "lucide-react";
import { getUser } from "@/lib/auth-mock";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Tab = { href: string; label: string; icon: any };

const seekerTabs: Tab[] = [
  { href: "/seeker", label: "Home", icon: Home },
  { href: "/seeker?tab=search", label: "Search", icon: Search },
];

const providerTabs: Tab[] = [
  { href: "/provider", label: "Jobs", icon: Briefcase },
  { href: "/provider?tab=chat", label: "Chat", icon: Search },
];

const partnerTabs: Tab[] = [
  { href: "/partner", label: "Team", icon: Building2 },
  { href: "/partner?tab=leads", label: "Leads", icon: Search },
];

const adminTabs: Tab[] = [
  { href: "/admin", label: "Admin", icon: Shield },
];

export function BottomTabs() {
  const pathname = usePathname();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    setRole(getUser()?.role ?? null);
  }, [pathname]);

  if (!role) return null;

  const tabs =
    role === "SEEKER"
      ? seekerTabs
      : role === "PROVIDER"
      ? providerTabs
      : role === "PARTNER"
      ? partnerTabs
      : adminTabs;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-auto w-full max-w-[430px] border-t bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="grid grid-cols-2 gap-1 p-2">
          {tabs.map((t) => {
            const active = pathname.startsWith(t.href.split("?")[0]);
            const Icon = t.icon;
            return (
              <Link
                key={t.href}
                href={t.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-xs",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                <Icon className="h-5 w-5" />
                {t.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
