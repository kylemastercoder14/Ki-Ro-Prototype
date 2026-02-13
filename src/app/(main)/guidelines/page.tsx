"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="h-dvh flex flex-col bg-background px-7 pt-7 pb-5">
      <h1 className="text-2xl font-bold">Steps to Sign up</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        We&apos;ve made it easy for you to complete your registration. Please
        follow these simple steps and get started with us:
      </p>

      <div className="space-y-9 mt-10">
        <div className="flex items-start gap-5">
          <div className="bg-linear-to-b shrink-0 from-primary to-violet-600 size-10 rounded-full flex items-center justify-center text-white">
            1
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">
              Provide your information
            </h3>
            <p className="text-xs mt-1">
              Complete your profile by filling in and uploading essential
              details such as your personal information and log in credentials.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="bg-linear-to-b shrink-0 from-primary to-violet-600 size-10 rounded-full flex items-center justify-center text-white">
            2
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">
              Upload documents
            </h3>
            <p className="text-xs mt-1">
              To help us verify your profile and get you started as a trusted
              business owner, professional or service provider, we kindly ask
              that you upload the necessary documents.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="bg-linear-to-b shrink-0 from-primary to-violet-600 size-10 rounded-full flex items-center justify-center text-white">
            3
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">
              Schedule a call
            </h3>
            <p className="text-xs mt-1">
              Choose a convenient date and time to schedule a call with our team
              for further discussions or clarifications.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Button
          onClick={() => router.push("/onboarding")}
          className="w-full mt-10"
        >
          Proceed
        </Button>

        <p className="text-center text-sm text-muted-foreground mt-5">
          Already have an account?{" "}
          <Link className="text-primary font-medium" href="/sign-in">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
