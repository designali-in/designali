import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/registry/default/designali/ui/button";
import { UserAuthForm } from "@/src/comp/forms/user-auth-form";
import { Card, CardContent } from "@designali/ui/card";

export const metadata = {
  title: "Register - Designali",
  description: "A design agency with a touch of magic.",
};

export default function Page() {
  return (
    <div>
      <section className="relative h-screen overflow-hidden bg-[linear-gradient(to_bottom,#bfdbfe_40%,#fff_80%)] dark:bg-[linear-gradient(to_bottom,#1e40af_40%,#000_80%)]">
        <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)]">
          <div className="col-span-1 flex h-full items-center justify-center" />
          <div className="col-span-1 flex h-full items-center justify-center border-x border-blue-300 dark:border-blue-700" />
          <div className="col-span-1 flex h-full items-center justify-center" />
        </div>
        <figure className="bg-accent-500/40 pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full blur-[200px]" />
        <figure className="bg-surface-primary dark:bg-dark-surface-primary pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full opacity-50 blur-[100px] md:block" />
        <figure className="bg-surface-primary dark:bg-dark-surface-primary pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full opacity-50 blur-[100px] md:block" />
        <div className="relative z-10 flex flex-col divide-y divide-blue-300 pt-[35px] dark:divide-blue-700">
          <div className="mx-auto flex h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-10 lg:px-24">
            <Link href="/" className=" ">
              <Button variant="secondary">Back to Home</Button>
            </Link>
            <h1 className="text-text-primary dark:text-dark-text-primary text-pretty text-center text-4xl font-medium leading-none tracking-[-1.44px] sm:text-5xl md:max-w-screen-lg md:text-6xl md:tracking-[-2.16px] lg:text-[clamp(50px,7vw,75px)]">
              Register to your account
            </h1>
            <h2 className="text-md text-text-tertiary dark:text-dark-text-tertiary max-w-2xl text-pretty text-center md:text-lg">
              Get started now. No credit card required.
            </h2>
          </div>

          <div className="dark:divide-dark-border mb-20 flex items-start justify-center divide-y divide-white/10 px-8 sm:px-24">
            <div className="m flex w-full max-w-xl flex-col items-center justify-start">
              <div className="my-4 grid w-full gap-6 md:p-10">
                <Card className="py-6 shadow-2xl">
                  <CardContent>
                    <Suspense>
                      <UserAuthForm />
                    </Suspense>
                    <div className="mt-4 text-center text-sm">
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="text-ali font-semibold underline"
                      >
                        Login
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <p className="px-8 text-center text-sm text-slate-600 dark:text-slate-400">
                  By clicking continue, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="underline underline-offset-4 hover:text-primary hover:no-underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-primary hover:no-underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
