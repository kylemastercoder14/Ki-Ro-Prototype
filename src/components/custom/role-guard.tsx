"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/lib/auth-mock";

export function RoleGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const user = getUser();
    if (!user) router.replace("/sign-in");
    else setOk(true);
  }, [router]);

  if (!ok) return null;
  return <>{children}</>;
}
