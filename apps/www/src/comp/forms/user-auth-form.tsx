/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";

import type * as z from "zod";
import * as React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Button } from "@designali/ui/button";
import { Input } from "@designali/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { DIcons } from "dicons";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { userAuthSchema } from "@/lib/validations/auth";

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <p className="sr-only">Email</p>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGoogleLoading}
              {...register("email")}
            />
            {errors.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <Button
            className="w-full"
            variant="outline"
            size={"lg"}
            disabled={isLoading}
          >
            {isLoading && "sdav"}
            {type === "register" ? "Sign Up with Email" : "Sign In with Email"}
          </Button>
        </div>
      </form>
      <div className="relative py-10">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div>
        <Button
          className="w-full"
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
            <DIcons.Loader className="mr-2 size-4 animate-spin" />
          ) : null}
          <p className="px-2">Continue with Google </p>
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
