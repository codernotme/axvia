"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { ThemeProviderProps } from "next-themes/dist/types.js";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>
        <ConvexAuthProvider client={convex}>{children}</ConvexAuthProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
