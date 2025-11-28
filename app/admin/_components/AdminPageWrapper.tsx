import { ReactNode } from 'react'
import AdminNav from './AdminNav'

export default function AdminPageWrapper({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <AdminNav />
      <h1 className="mb-6 text-2xl font-semibold">{title}</h1>
      <div className="rounded-sm border border-black/5 bg-white p-4 shadow-sm dark:bg-black/20">
        {children}
      </div>
    </div>
  )
}
