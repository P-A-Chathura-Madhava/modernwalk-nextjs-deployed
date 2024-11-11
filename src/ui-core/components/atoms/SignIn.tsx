"use client";
import { SignInButton, useAuth } from "@clerk/nextjs";
import React from "react";

function SignIn() {
  const { isSignedIn } = useAuth();

  return (
    <>
      {!isSignedIn && (
        <div className="w-20 h-full p-2 font-bold rounded-md hover:bg-slate-400">
          <SignInButton>Sign In</SignInButton>
        </div>
      )}
    </>
  );
}

export default SignIn;
