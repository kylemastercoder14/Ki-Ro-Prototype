"use client";

import { AlertCircle } from "lucide-react";
import { getUser } from "@/lib/auth-mock";
import { SeekerDashboard } from "@/components/custom/seeker/seeker-dashboard";

export default function Page() {
  const role = getUser()?.role ?? "SEEKER";

  if (role === "SEEKER") {
    return <SeekerDashboard />;
  }

  return (
    <section className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
      <div className="flex items-start gap-2">
        <AlertCircle className="mt-0.5 h-4 w-4" />
        <div>
          <h1 className="text-sm font-semibold">Dashboard preview currently configured for seeker role</h1>
          <p className="mt-1 text-xs text-amber-700">
            Switch your mocked user role to <span className="font-semibold">SEEKER</span> to see the updated
            home experience.
          </p>
        </div>
      </div>
    </section>
  );
}
