'use client'

import { useEffect, useRef, useState } from 'react'

export default function Dropdown({
  trigger,
  children,
  align = 'right',
}: {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: 'left' | 'right'
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-sm border border-black/10 bg-white px-2 py-1 text-sm shadow-sm hover:bg-tertiary/40 dark:bg-black/40"
      >
        {trigger}
      </button>
      {open && (
        <div
          className={`absolute z-20 mt-1 min-w-40 rounded-sm border border-black/10 bg-white p-1 text-sm shadow-lg dark:bg-black/70 ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
        >
          {children}
        </div>
      )}
    </div>
  )}

export function DropdownItem({ children, onClick, danger = false }: { children: React.ReactNode; onClick?: () => void; danger?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`block w-full rounded-sm px-3 py-1.5 text-left hover:bg-tertiary/40 ${danger ? 'text-red-600' : ''}`}
    >
      {children}
    </button>
  )
}
