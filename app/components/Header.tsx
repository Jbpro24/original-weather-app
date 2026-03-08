"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-md text-sm font-medium transition ${
      pathname === path
        ? "bg-blue-600 text-white shadow-sm"
        : "text-gray-800 hover:bg-gray-100"
    }`;

  return (
    <header className="headerWrapper">
      <nav className="headerNav">
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>
        <Link href="/about" className={linkClass("/about")}>
          About
        </Link>
        <Link href="/features" className={linkClass("/features")}>
          Features
        </Link>
      </nav>
    </header>
  );
}

