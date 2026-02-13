"use client";

import {
  ShoppingCart,
  Utensils,
  Camera,
  Plane,
  Hotel,
  Gift,
  Map,
  Music,
  Coffee,
  Ticket,
  Compass,
  Sun,
  Mountain,
  Bike,
  Heart,
  Star,
  Gamepad2,
  Palmtree,
  Sailboat,
  Sparkles,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  return (
    <div className="relative h-dvh overflow-hidden flex flex-col justify-end bg-linear-to-b from-primary to-purple-600">
      {/* ICON OVERLAY */}
      <div className="absolute inset-0 text-white/10 pointer-events-none">
        {/* ===== TOP ROW ===== */}
        <ShoppingCart className="icon top-8 left-[5%] float-slow" size={24} />
        <Music className="icon top-12 left-[18%] float-fast" size={22} />
        <Utensils className="icon top-14 left-[32%] float-medium" size={28} />
        <Star className="icon top-8 left-[46%] float-slow" size={20} />
        <Plane className="icon top-10 left-[60%] float-fast" size={26} />
        <Coffee className="icon top-14 left-[74%] float-fast" size={26} />
        <Heart className="icon top-10 right-[8%] float-medium" size={24} />
        <Sun className="icon top-16 right-[22%] float-slow" size={30} />
        <Camera className="icon top-6 right-[36%] float-medium" size={24} />
        <Sparkles className="icon top-6 left-[88%] float-slow" size={22} />

        {/* ===== UPPER MID ===== */}
        <Hotel className="icon top-[22%] left-[8%] float-fast" size={28} />
        <Gamepad2
          className="icon top-[24%] left-[24%] float-medium"
          size={22}
        />
        <Map className="icon top-[26%] left-[40%] float-slow" size={24} />
        <Ticket className="icon top-[22%] left-[56%] float-fast" size={24} />
        <Palmtree
          className="icon top-[24%] left-[72%] float-medium"
          size={28}
        />
        <Gift className="icon top-[26%] right-[6%] float-slow" size={28} />

        <Compass className="icon top-[34%] left-[12%] float-medium" size={26} />
        <Mountain className="icon top-[36%] left-[28%] float-fast" size={24} />
        <Bike className="icon top-[32%] left-[44%] float-slow" size={26} />
        <Coffee className="icon top-[34%] left-[60%] float-fast" size={24} />
        <Sailboat
          className="icon top-[36%] left-[76%] float-medium"
          size={26}
        />
        <Camera className="icon top-[32%] right-[8%] float-slow" size={24} />

        {/* ===== CENTER ===== */}
        <Mountain className="icon top-[46%] left-[6%] float-medium" size={26} />
        <Sailboat className="icon top-[48%] left-[20%] float-slow" size={22} />
        <Bike className="icon top-[50%] left-[34%] float-fast" size={24} />
        <Music className="icon top-[48%] left-[48%] float-slow" size={28} />
        <Utensils
          className="icon top-[52%] left-[62%] float-medium"
          size={24}
        />
        <Ticket className="icon top-[50%] left-[76%] float-medium" size={24} />
        <ShoppingCart
          className="icon top-[48%] right-[6%] float-fast"
          size={26}
        />

        <Plane className="icon top-[58%] left-[10%] float-fast" size={26} />
        <Sun className="icon top-[56%] left-[26%] float-medium" size={30} />
        <Heart className="icon top-[58%] left-[42%] float-slow" size={22} />
        <Star className="icon top-[56%] left-[58%] float-medium" size={24} />
        <Gift className="icon top-[58%] left-[74%] float-slow" size={24} />
        <Sparkles className="icon top-[56%] right-[8%] float-fast" size={24} />

        {/* ===== LOWER AREA ===== */}
        <Palmtree
          className="icon bottom-[28%] left-[8%] float-slow"
          size={28}
        />
        <Hotel className="icon bottom-[30%] left-[22%] float-fast" size={26} />
        <Compass
          className="icon bottom-[32%] left-[36%] float-fast"
          size={22}
        />
        <Gamepad2
          className="icon bottom-[28%] left-[50%] float-fast"
          size={24}
        />
        <Map className="icon bottom-[30%] left-[64%] float-medium" size={28} />
        <Coffee className="icon bottom-[32%] left-[78%] float-slow" size={24} />
        <Music
          className="icon bottom-[28%] right-[6%] float-medium"
          size={22}
        />

        {/* ===== BOTTOM ROW ===== */}
        <Sparkles className="icon bottom-24 left-[10%] float-fast" size={24} />
        <Bike className="icon bottom-22 left-[24%] float-fast" size={24} />
        <Utensils className="icon bottom-20 left-[38%] float-slow" size={26} />
        <Plane className="icon bottom-28 left-[52%] float-medium" size={28} />
        <Heart className="icon bottom-24 left-[66%] float-medium" size={22} />
        <Ticket className="icon bottom-28 left-[80%] float-slow" size={26} />
        <Camera className="icon bottom-24 right-[6%] float-fast" size={24} />
      </div>

      {/* CONTENT AREA */}
      <div className="absolute top-20 z-10 px-6 pb-8 text-white">
        <div className="flex items-center justify-center mb-7 gap-2">
          <Image width={35} height={35} src="/logo-white.svg" alt="Ki-Ro" />
          <h1 className="text-4xl font-bold">Ki-Ro</h1>
        </div>
        <p className="text-2xl font-medium mb-4">
          Connecting Filipinos with trusted help – fast, fair, caring.
        </p>
        <p className="text-base">
          Your gateway to professional services, skilled providers, and trusted
          B2B solutions all in one place.
        </p>
      </div>

      {/* WHITE BOTTOM SHEET */}
      <div className="relative z-10 bg-white rounded-t-4xl space-y-5 p-5 h-73">
        <div className="space-y-1.5">
          <p className="font-medium text-sm">Select your user type:</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="User Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Business Owner">Business Owner</SelectItem>
                <SelectItem value="Service Provider">
                  Service Provider
                </SelectItem>
                <SelectItem value="Professional">Professional</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <p className="font-medium text-sm">Select your business type:</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Business type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Freelancer/Individual">
                  Freelancer/Individual
                </SelectItem>
                <SelectItem value="Company/Corporate">
                  Company/Corporate
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-start gap-2">
          <Checkbox defaultChecked />
          <div className="grid gap-2">
            <p className="text-muted-foreground text-xs">
              By clicking this checkbox, you agree to the <b className='text-primary'>terms and conditions</b> and <b className='text-primary'>privacy policy</b>.
            </p>
          </div>
        </div>

        <Button className="w-full" onClick={() => router.push("/guidelines")}>Continue</Button>
      </div>
    </div>
  );
};

export default Page;
