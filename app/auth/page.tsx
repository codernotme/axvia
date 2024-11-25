"use client";

import { useState, FormEvent } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import SignInWithGoogle from "./oauth/SignInWithGoogle";
import SignInWithGitHub from "./oauth/SignInWithGitHub";
import { Label } from "@/components/ui/label";

import "@/styles/login.css";

export default function SignIn() {
  const { signIn } = useAuthActions();
  const [step, setStep] = useState<"signUp" | "signIn">("signIn");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await signIn("password", formData);
  };

  return (
      <div className="flex items-center justify-center flex-col min-h-screen container1">
        <div className="login-container p-4">
          <button className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;Axvia&nbsp;</span>
            <span aria-hidden="true" className="hover-text">
              &nbsp;Axvia&nbsp;
            </span>
          </button>
        </div>
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <title className="text-2xl font-bold text-center">
              {step === "signIn"
                ? "Sign in to your account"
                : "Create an account"}
            </title>
            <h1 className="text-center">
              {step === "signIn"
                ? "Enter your email below to sign in to your account"
                : "Enter your email below to create your account"}
            </h1>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="m@example.com"
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    required
                    type="password"
                  />
                </div>
                <input name="flow" type="hidden" value={step} />
                <Button className="w-full" type="submit">
                  {step === "signIn" ? "Sign in" : "Sign up"}
                </Button>
              </div>
            </form>
          </CardBody>
          <CardFooter className="space-y-2">
            <Button
              className="w-full"
              variant="bordered"
              onClick={() => setStep(step === "signIn" ? "signUp" : "signIn")}
            >
              {step === "signIn"
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </Button>
          </CardFooter>
          <CardFooter>
            <div className="flex justify-evenly gap-4">
              <SignInWithGoogle />
              <SignInWithGitHub />
            </div>
          </CardFooter>
        </Card>
      </div>
  );
}
