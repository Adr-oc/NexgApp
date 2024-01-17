import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: {
          variables: {
            colorBackground: "#ffffff",
            colorInputBackground: "black",
            colorAlphaShade: "white",
            colorText: "white",
            colorInputText: "white",
          },
          __type: "prebuilt_appearance",
        },
        layout: {
          socialButtonsVariant: "iconButton",
          variables: {
            colorPrimary: "#FFFFFF",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          },
        },
        elements: {
          logoImage: {
            filter: "brightness(0) invert(1)",
          },
          headerTitle: {
            fontSize: "28px",
          },
          headerSubtitle: {
            color: "#FFFFFF",
          },
          main: {
            gap: "2rem",
          },
          socialButtonsProviderIcon__github: {
            filter: "brightness(0) invert(1)",
          },
          dividerBox: {
            display: "none",
          },
          formFieldInput: {
            backgroundColor: "transparent",
          },
          formButtonPrimary: {
            backgroundColor: "#FFFFFF30",
            fontSize: "12px",
            textTransform: "none",
            "&:focus": {
              backgroundColor: "#FFFFFF15",
            },
            "&:active": {
              backgroundColor: "#FFFFFF15",
            },
            "&:hover": {
              backgroundColor: "#FFFFFF15",
            },
          },
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.className}  m-0 p-0 bg-black`}>
          <main className="h-full m-0">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}