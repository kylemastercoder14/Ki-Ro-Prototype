/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';


const Page = () => {
  const router = useRouter();
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Happy family"
          className="w-full h-[65%] object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/80 to-transparent h-full z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col h-full px-6 pb-10 pt-16">
        <div className="flex items-center gap-2">
            <img src="/logo-main.svg" alt="KI-RO Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-4xl font-bold text-primary">Ki-Ro</h1>
          </div>
        <div className="mt-auto mb-8">


          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Expert care for <br/>
            <span className="text-primary">your home</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Connecting you with verified, skilled providers in Calabarzon who serve with <span className="font-semibold text-primary">Malasakit</span>.
          </p>

          <div className="space-y-4">
            <Button
              size="lg"
              className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg shadow-primary/25 bg-primary hover:bg-primary/90 transition-transform active:scale-95"
              onClick={() => router.push("/sign-in")}
            >
              Get Started
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full h-14 text-lg font-semibold rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => router.push("/splash-screen")}
            >
              I&apos;m a Provider
            </Button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default Page
