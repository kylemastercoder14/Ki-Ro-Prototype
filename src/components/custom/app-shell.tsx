"use client";

import { ReactNode } from "react";
import { BottomTabs } from "./bottom-tabs";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background">
      {/* mobile frame */}
      <div className="mx-auto min-h-dvh w-full max-w-[430px]">
        <main className="pb-20 pt-3 px-4">{children}</main>
        <BottomTabs />
      </div>
    </div>
  );
}
