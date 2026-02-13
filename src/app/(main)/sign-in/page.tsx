"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="h-dvh flex flex-col bg-background px-7 pt-7 pb-5">
      <h1 className="text-2xl font-bold">Welcome back</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Sign in to your account
      </p>

      <div className="space-y-4 mt-10">
        <FloatingLabelInput label="Email Address" />
        <FloatingLabelInput label="Password" />
        <Link
          href="/forgot-password"
          className="text-sm font-medium text-primary block text-right"
        >
          Forgot your password?
        </Link>
      </div>

      <Button onClick={() => router.push("/dashboard")} className="w-full mt-7">
        Sign in
      </Button>

      <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <hr className="border-dashed" />
        <span className="text-muted-foreground text-xs">
          Or using other method
        </span>
        <hr className="border-dashed" />
      </div>

      <Button variant="outline" onClick={() => {}} className="w-full mt-4">
        <Image priority src="/google.png" width={20} height={20} alt="Google" />
        Sign in with Google
      </Button>
      <Button variant="outline" onClick={() => {}} className="w-full mt-4">
        <Image
          priority
          src="/facebook.png"
          width={20}
          height={20}
          alt="Facebook"
        />
        Sign in with Facebook
      </Button>

      <p className="text-center text-sm text-muted-foreground mt-8">
        Don&apos;t have an account?{" "}
        <Link className="text-primary font-medium" href="/guidelines">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Page;

const FloatingLabelInput = ({
  label,
  type = "text",
  ...props
}: {
  label: string;
  type?: string;
}) => (
  <div className="group relative w-full">
    <label className="origin-start text-muted-foreground group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground has-[+textarea:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:top-0 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium">
      <span className="bg-background inline-flex px-1">{label}</span>
    </label>
    {type === "textarea" ? (
      <Textarea
        placeholder=" "
        className="dark:bg-background min-h-20"
        {...props}
      />
    ) : (
      <Input
        type={type}
        placeholder=" "
        className="dark:bg-background"
        {...props}
      />
    )}
  </div>
);
