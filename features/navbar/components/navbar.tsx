"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

import { NAV_ITEMS } from "../constants";

export function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        bg-white/70
        backdrop-blur-lg
        dark:bg-slate-950/70
      "
    >
      <Container>
        <nav
          className="
            flex
            h-20
            items-center
            justify-between
          "
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/logo.png"
              alt="AeroClean X1 Logo"
              width={48}
              height={48}
              priority
            />

            <span className="text-2xl font-bold">
              AeroClean X1
            </span>
          </Link>

          <div
            className="
              hidden
              items-center
              gap-8
              md:flex
            "
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  text-sm
                  transition
                  hover:text-green-500
                "
              >
                {item.label}
              </a>
            ))}

            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}