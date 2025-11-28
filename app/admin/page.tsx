import Link from "next/link";

export default function AdminHome() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-semibold">Panel administracyjny</h1>
      <p className="text-foreground1/70 mb-6 text-sm">
        Witaj w panelu zarządzania. Wybierz sekcję, którą chcesz edytować.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/admin/events"
          className="hover:bg-tertiary/40 rounded-sm border border-black/5 p-6 shadow-sm"
        >
          <h2 className="mb-2 text-xl font-medium">Wydarzenia</h2>
          <p className="text-foreground1/70 text-sm">
            Zarządzaj wydarzeniami: dodawaj, edytuj, publikuj.
          </p>
        </Link>
      </div>
    </main>
  );
}
