import React from "react";
import type { Metadata } from "next";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";
import RightSidebar from "@/components/shared/RightSidebar";
import Topbar from "@/components/shared/Topbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NexG",
  description: "A Next.js 13 Meta Threads application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className="bg-stone-950">
          <SignedIn>
            <Topbar />

            <main className="flex flex-row">
              <LeftSidebar />
              <section className="main-container">
                <div className="w-full max-w-4xl">{children}</div>
              </section>
              {/* @ts-ignore */}
              <RightSidebar />
            </main>
            <Bottombar />
          </SignedIn>
          <SignedOut>
            <main
              id="content"
              role="main"
              className="h-[100vh] relative max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto w-full h-full before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element-dark.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2"
            >
              <div className="text-center py-8 px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl text-white sm:text-4xl">
                  Get notified when we launch
                </h1>
                <h2 className="mt-1 sm:mt-3 text-4xl font-bold text-white sm:text-6xl">
                  <span className="bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">
                    Preline PRO
                  </span>
                </h2>

                <form>
                  <div className="mt-8 space-y-4">
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4"></div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <div className="relative"></div>
                    </div>

                    <div className="grid">
                      <Link
                        href="/sign-in"
                        type="submit"
                        className="sm:p-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Iniciar Sesion
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </main>

            <footer className="absolute bottom-0 inset-x-0 text-center py-5">
              <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-sm text-white/50">
                  © 2024 Preline. A product of{" "}
                  <a
                    className="text-white font-medium hover:text-white/80"
                    href="/"
                  >
                    Nexg
                  </a>
                </p>
              </div>
            </footer>
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
