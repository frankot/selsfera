import Link from 'next/link'

export default function AdminHome() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-semibold">Panel administracyjny</h1>
      <p className="mb-6 text-sm text-foreground1/70">
        Witaj w panelu zarządzania. Wybierz sekcję, którą chcesz edytować.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/admin/events" className="rounded-sm border border-black/5 p-6 shadow-sm hover:bg-tertiary/40">
          <h2 className="mb-2 text-xl font-medium">Wydarzenia</h2>
          <p className="text-sm text-foreground1/70">Zarządzaj wydarzeniami: dodawaj, edytuj, publikuj.</p>
        </Link>
      </div>
    </main>
  )
}
