import { ReactNode } from 'react'

export function Table({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] border-collapse text-sm">
        {children}
      </table>
    </div>
  )
}

export function THead({ children }: { children: ReactNode }) {
  return <thead className="bg-tertiary/40 text-left text-foreground1">{children}</thead>
}

export function TBody({ children }: { children: ReactNode }) {
  return <tbody className="divide-y divide-black/5">{children}</tbody>
}

export function TR({ children }: { children: ReactNode }) {
  return <tr className="hover:bg-tertiary/20">{children}</tr>
}

export function TH({ children, className }: { children: ReactNode; className?: string }) {
  return <th className={`p-3 font-medium ${className ?? ''}`}>{children}</th>
}

export function TD({ children, className }: { children: ReactNode; className?: string }) {
  return <td className={`p-3 ${className ?? ''}`}>{children}</td>
}
