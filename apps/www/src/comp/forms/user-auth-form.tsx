/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";

import type * as z from "zod";
import * as React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import GradientText from "@/registry/default/ui/texts/gradient-text";
import { zodResolver } from "@hookform/resolvers/zod";
import { DIcons } from "dicons";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { userAuthSchema } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: string;
}

type FormData = z.infer<typeof userAuthSchema>;

export function UserAuthForm({ className, type, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    const signInResult = await signIn("email", {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams.get("from") || "/dashboard",
    });

    setIsLoading(false);

    if (!signInResult.ok) {
      return toast.error("Your sign in request failed. Please try again.");
    }

    return toast.success(
      "We sent you a login link. Be sure to check your spam too.",
    );
  }

  return (
    <div className={cn(" ", className)} {...props}>
      <div>
        <div className="grid w-full justify-center gap-3 p-6 text-center">
          <h1 className="text-3xl font-semibold tracking-tighter md:text-5xl">
            <GradientText>Designali</GradientText>
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Your complete platform for the Design.
          </p>
        </div>
        <Button
          className="bg-ali w-full"
          variant="outline"
          size={"lg"}
          type="button"
          onClick={() => {
            setIsGoogleLoading(true);
            signIn("google");
          }}
          disabled={isLoading || isGoogleLoading}
        >
          {isGoogleLoading ? (
            <DIcons.Loader className="mr-1 size-4 animate-spin" />
          ) : null}
          <p className="px-1">Continue with Google </p>
          <Image
            src="/icons/google.svg"
            alt="Your Image"
            height={50}
            width={50}
            className="h-5 w-5"
          />
        </Button>
      </div>
    </div>
  );
}
