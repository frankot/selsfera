export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-secondary min-h-screen">
      {/* Admin Navigation - placeholder for now */}
      <header className="bg-foreground1 text-primary p-4">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
}
