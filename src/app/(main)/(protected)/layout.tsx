import { ReactNode } from "react";
import { AppShell } from "@/components/custom/app-shell";
import { RoleGuard } from "@/components/custom/role-guard";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <RoleGuard>
      <AppShell>{children}</AppShell>
    </RoleGuard>
  );
}
