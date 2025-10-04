import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary min-h-screen">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
