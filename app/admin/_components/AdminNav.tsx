"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/events", label: "Wydarzenia" },
];

export default function AdminNav() {
  const pathname = usePathname();
  return (
    <nav className="mb-6 flex gap-3 border-b border-black/5 pb-3">
      {links.map(l => {
        const active = pathname?.startsWith(l.href);
        return (
          <Link
            key={l.href}
            href={l.href}
            className={`rounded-sm px-3 py-1.5 text-sm font-medium ${active ? "bg-tertiary text-primary" : "text-foreground1/80 hover:bg-tertiary/40"}`}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
