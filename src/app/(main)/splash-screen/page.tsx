"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Page = () => {
  const router = useRouter();

  return (
    <main className="min-h-dvh bg-slate-100 px-4 py-5">
      <section className="mx-auto flex min-h-[calc(100dvh-2.5rem)] w-full max-w-sm flex-col overflow-hidden rounded-[2.25rem] bg-white shadow-2xl shadow-slate-300/70">
        <div className="relative h-[58%] min-h-[21rem] w-full">
          <Image
            src="/hero-bg.png"
            alt="Family at home"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/30 to-white" />
        </div>

        <div className="-mt-24 flex flex-1 flex-col px-6 pb-6">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30">
            <Image
              src="/logo-white.svg"
              alt="Ki-Ro logo"
              width={30}
              height={30}
            />
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900">
            Expert care for your home
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Connecting you with verified, skilled providers in Calabarzon who
            serve with <span className="font-semibold text-primary">Malasakit.</span>
          </p>

          <div className="mt-auto space-y-3 pt-8">
            <Button
              onClick={() => router.push("/guidelines")}
              className="h-14 w-full rounded-full text-lg font-semibold"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push("/sign-in")}
              className="h-14 w-full rounded-full border-slate-200 text-lg font-semibold"
            >
              I&apos;m a Provider
            </Button>
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-slate-400">
            By continuing, you agree to our terms &amp; privacy policy
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;
