import { ReactNode } from "react";
import { AppShell } from "@/components/custom/app-shell";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <AppShell>{children}</AppShell>
  );
}
